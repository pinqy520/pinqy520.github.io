---
title: [译]使用webpack构建发布就绪（production-ready）的实时的SaaS
updated: 2016-09-17 01:49
---

> 原文： **[「A production-ready realtime SaaS with webpack」](https://medium.com/@matt.krick/a-production-ready-realtime-saas-with-webpack-7b11ba2fa5b0 )**
> 作者： **Matt Krick**
> 翻译： 黄祺pinqy

译者说：

> 最近在看**meatier**，某个**meteor**的替代方案，解决了meteor的几个问题：**技术方案陈旧（毕竟三年了）、编译扩展不方便、学习成本高**等等。它直接采用现在流行技术，并且使用webpack进行打包，降低了编译扩展这块的学习成本。
> 
> 虽然这篇文章是去年年底的，但是关于webpack配置这块依然值得学习（也可能会很快过时吧，哈哈）。
> 
> 最后，第一次进行翻译，如有错误欢迎指出。

---


我是Meteor的忠实粉丝，它让一切都socket化（socketize）[^socketize]，编译（transpile）样式，然后为server生成一些代码。然而有时候，可能需要更灵活一点。

像标准的SaaS[^saas]，我需要一个可以从CDN获取的小跳转页，一个提供实时websocket连接的门户首页，很容易在横向和纵向进行扩展

最终结果就是Meatier[^meatier]，我将其放到github上了：http://github.com/mattkrick/meatier，他解决了很多问题：

1. JWT（JSON Web Tokens）[^jwt]
2. sockets
3. 使用redux做client-side缓存
4. 将socket状态存于redux的state中
5. 优化和实时数据库更新

但是在本文重心在于webpack，因为由100篇webpack 101指导，却并没有一篇webpack 201。

在本项目中，使用了webpack 2 Beta，虽然还有一些bug，但是并不常见

## 构建production的webpack设置

我假设你已经设置好了一个开发用的webpack配置，如果你不知道如何创建一个开发配置......


![嘿嘿嘿](http://upload-images.jianshu.io/upload_images/1555399-471cb2ab9cb98520.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 使用路由来拆分你的页面

第一步先处理路由，然后让你的同步组件异步处理。参考这个[例子](https://github.com/mattkrick/meatier/blob/master/src/universal/routes/signup.js)。

``` javascript
export default store => {
  return {
    onEnter: requireNoAuth(store),
    path: 'signup',
    getComponent: async (location, cb) => {
      let component = await System.import('./Signup');
      cb(null, component)
    }
  }
}
```

这里的路由并不是指的jsx，而是一个在redux store中的函数（注：类似于一个reducer专门用来处理路由），用来更好的对ruduer进行代码拆分（更多信息在下篇博客当中），重点在于`System.import`中，它将创建一个promise来传输这个模块，那么在webpack 2中，它将会变成一个独立的可以被动态加载的模块[^system.import]。

### 为client编写production-ready的webpack配置

好，现在webpack知道如何最好的来分割你的代码了，这能节约流量。然而，有时候可能不会这么完美。比如说：在某种情况下，节约额外的5kb流量，并不比增加一次额外的http请求收益更高。所以我们要使用`AggressiveMergingPlugin`，它能平衡你的请求大小比例。还有`MinChunkSizePlugin`插件，可以用来设置阈值（例如50000）来限制一些小的chunks（注：**代码块**，可以理解为模块）。

接下来是优化用户第二次访问的体验（如果用户会第二次访问你的网站？），我们需要尽可能多的利用用户的浏览器缓存，只传输少量的流量（意味着更少的钱和更快的速度）。我们首先拆分vendor包，因为有可能你不想BUG产生的次数和你更新React的次数一样多。

然后是进行地址更新，当客户端读取一个资源的时候，在、浏览器看到一个文件名（URL地址），如果它能够解析到一个本地缓存，那浏览器就不会发送请求。也就是说：假设你的文件叫`app.js`，你更新了这个文件之后，浏览器并不会重新下载它，除非你关闭了缓存。为了解决这个问题，当文件改变时，将会给每个文件分配一个hash值（放到文件名里）。

``` javascript
output: {
  filename: '[name]_[chunkhash].js',
  chunkFilename: '[name]_[chunkhash].js',
  ...
},
```

现在，我们不能在HTML中静态的请求一个`app.js`（为了解决上面那个问题），我们需要请求一个在每次build之后文件名都会变化的文件，可以用`AssetsPlugin`来创建一个查询表，来存储资源和hash后的名称。

``` javascript
new AssetsPlugin({
  path: path.join(root, 'build'), 
  filename: 'assets.json'
}),
```

然后，在生成HTML之前，我们就需要`assets.json`，给src赋值`assets.app.js`（`assets`是`require('assets.json')`，`assets.app.js`是hash后的`app.js`的地址，同理`assets.vendor.js`和`assets.manifest.js`也一样）。

https://github.com/mattkrick/meatier/blob/master/src/server/Html.js

现在问题来了，如果一个chunk改变了，那也会改变其他chunk的hash值（因为webpack按照文件名进行获取不同的模块，那么一个文件的hash值变了，其他文件因为引用的模块路径有变化，也会变化），导致你其他的chunk也会刷新（被浏览器重新下载）。为了避免这种问题，`NamedModulesPlugin`能够将webpack模块编号，替换成一个实际的路径。只需要在没有参数的情况下调用它，在下一次编译中，所有的chunk都会由区分开的hash值。一般情况下，你不会想要客户端知道你的实际路径，这就是为啥我们要使用`HashedModuleIdsPlugin`，它会增加一些额外的流量，但是能让人安心。

现在，唯一会被刷新的chunk只有你改变过代码的那个，并且会带有webpack runtime（webpack自带的一些代码）。但是，这个webpack runtime已经被打包进了上一个公共的chunk中，可能叫`vendor.js`。围绕这一点，我们需要抽取出webpack runtime，因此相比于要刷新两个文件，可以只更新一个你想要的文件。

``` javascript
new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor', 'manifest'],
  minChunks: Infinity
}),
```

因为现在最新的公共chunk一直都是有webpack runtime的，它将会在`CommonsChunkPlugin`中被提取出来。需要注意的是，它并没有相应的入口chunk，并且`minChunks`被设置成无限的，所以没有东西会被加进去。

为了得到HTML的内容，我们需要创建另外一个HTTP请求，但是额外的请求会造成额外的浪费，所以，我们将其嵌入其中。我们将从`assets.json`中获取路径，然后将其中的内容读取成字符串（打印到HTML模板）。

https://github.com/mattkrick/meatier/blob/master/src/server/createSSR.js

``` javascript
const assets = require('../../build/assets.json');
const readFile = promisify(fs.readFile);
assets.manifest.text = await readFile(path.join(root, 'build', path.basename(assets.manifest.js)), 'utf-8');
```

### 为server编写production-ready的webpack配置

最后一步比较麻烦，对于CSS文件你有四种选择：

1. 将css提取成样式表（`<link />`），
2. 将你组建中的样式写成inline-style的
3. 将css提取到一系列style标签中
4. 混合方案

我个人比较喜欢提取成样式表，以消耗额外的HTTP请求为代价（但是它加载的很快，不需要javascript，并且可以对样式进行浏览器缓存）。最理想的情况下，每个stylesheet就是一个chunk。但是现在在服务端渲染中还不可能（作者说：如果他错了就告诉他），同样的css可能会被重复多次，将会被压缩到很小，所以就让我们优化一个大的样式表吧。

现在有很多hacky的解决方案去解决这个：node并不知道如何需要`require`一个CSS文件的问题。如下几种：

- 在server端忽略CSS require
- 在每个组件中加入`process.env.BROWSER`环境变量
- 将他们探测出来，放置在webpack的`stats.json`文件中，然后在服务端将它们插入进去。
- 给每个组件一个能被父级访问的`this.styles`，然后一路被父级访问，直到创建了一个`style`标签。
- 将styles放到组建的上下文中

然而，我并不喜欢上面任何一个。重写组件只为了能够使用服务端渲染，是一个错误的想法。因此，我决定在server端生成一个路由的webpack build，因为webpack知道如何处理css文件（node不知道）。它（webpack）能编译整个路由，并且用它在server端渲染每个页面。这很容易，将你的`target`设置为`node`，并且`output.libraryTarget: "commonjs2"`。

https://github.com/mattkrick/meatier/blob/master/webpack/webpack.config.server.js

接下来用`ExtractTextPlugin`创建你的css文件。然而在webpack 1 和 2 中，出现了一些问题：为了将所有样式打包成一个文件，我设置`allChunks`为`true`，结果还是生成了多个CSS文件。为了解决这个问题，我使用了`LimitChunkCountPlugin`，将chunk限制设置为1。结果就是，你的网站会使用一个可以被server用来渲染HTML的预处理好的路由，和一个包含网站所有样式的CSS文件。

为了加快服务端启动的时间，假设你在服务端使用了babel。你可以用如下选项排除调这个预渲染好的bundle

``` javascript
require('babel-register')({
  only(filename) {
    return (filename.indexOf('build') === -1 && filename.indexOf('node_modules') === -1);
  }
});
```

## 结语

好了，现在你知道如何来便写一个production ready的webpack配置文件了，它将在服务端渲染中工作，并不需要在客户端中允许javascript。你不需要重写你的组件来处理样式，并且，它在开发中依然很快。无论何时，你在开发server端的时候，你都可以运行你的production构建（build），并且你不需要在每次重启后，重新编译你的client端（bundle）。



[^socketize]: 译者注： 『一切编程都是Socket』Socket起源于Unix，而Unix基本哲学之一就是“一切皆文件”，都可以用“打开open –> 读写write/read –> 关闭close”模式来操作。Socket就是该模式的一个实现。所以使用javascript同构变成的方式，把网络请求都变成类似与读写的操作，通过websocket将前后端数据同步。

[^jwt]: 译者注：https://jwt.io/

[^saas]: 译者注：可以理解成一个web app

[^meatier]: 译者注：作者写的一个类似于meteor的webpack构建saas的模板。

[^system.import]: 译者注：在webpack2中，遵循ES6的代码拆分方式，可以使用`System.import`方法，在运行时动态加载es6模块。webpack把`System.import`作为拆分点，然后把请求的模块放入一个单独的『块』(chunk)中。