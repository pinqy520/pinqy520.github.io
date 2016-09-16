---
title: 开始使用Vorlon.js，好用的JavaScript远程调试和测试工具
updated: 2016-02-01 20:01
---


## 0x00 为什么需要远程调试？

在H5的开发中可能会遇到这样的问题：

> 我所开发的移动端网页碰到了一个Bug，可是在Chrome模拟的手机环境中是没问题的，可是在某些手机中就是没有生效，不知道到底是因为CSS不支持还是因为JS没有执行，没有控制台打不了日志，`alert`信息又太有限了，愁死我了。

或者是这样的问题：

> 公司的手机App要给Webview添加一些接口，方便公司的活动Web页面在App中打开的时候能执行一些操作，可是我按照和IOS同学约定的接口发送请求后并没有成功执行。不知道是我JS写的有问题还是IOS那边接收有问题，没有日志，没控制台执行脚本调试，真是麻烦。

如果这个时候手机上打开的网页也有像Chrome里面一样的调试台，开发就能变得更方便了，因此才需要像Vorlon.js这样的工具，**能够在电脑上远程打开手机上网页的控制台，来对手机浏览器或者WebView上的网页来进行调试。**

## 0x01 Vorlon.js是什么？

Vorlon.js是微软在 `微软Build 2015大会` 上公布的一款用于JavaScript远程调试和测试的开源工具。（**大牌有保障**，写此文的时候版本是 `0.1.0` ）

官方网站传送门： [http://www.vorlonjs.com/](http://www.vorlonjs.com/)

> An open source, extensible, platform-agnostic tool for remotely debugging and testing your JavaScript. Powered by node.js and socket.io.

官方原话是

> 一款基于 `node.js` 和 `socket.io` 的、开源的、可扩展的、平台无关的**JavaScript远程调试和测试工具。**

有如下优点：

- 易于安装（这个我同意，npm全局安装一下，傻瓜式操作）
- 多设备（大部分设备都行，不过我看ISSUE里说安卓4.0以下不行，因为不支持 `socket.io` ）
- 可扩展，有各种插件（自带了很多有用的功能，不过似乎都被算成插件了，没看见有第三方的）


## 0x02 Vorlon.js怎么用？

### 安装

``` bash
$ npm install vorlon -g
```

### 启动

``` bash
$ vorlon
```

启动完成之后就会监听两个端口： `1337（脚本和控制台）` 和 `5050（代理）`

开启两个功能：`dashboard（控制台）` 和 `Proxy（代理）`

### 功能和使用

打开 [http://localhost:1337](http://localhost:1337) 就能看到 `dashboard` 了在这里面调试已经连接上的远程网页。

![Vorlon.js Dashboard](https://i.imgur.com/KVegr6O.jpg)

#### 在页面中植入远程调试的js

``` html
<script src="http://localhost:1337/vorlon.js"></script>
```
然后，在手机浏览器中打开已植入脚本的网页，可以发现在`Dashboard` 里已经出现了连接设备的信息了。

![Vorlon Connect](https://i.imgur.com/st9nuIr.jpg)

此时鼠标hover在DOM节点上，浏览器页面中相关的区域也会高亮就和Chrome开发者工具一样：

![enter image description here](https://i.imgur.com/d9f4rPI.jpg)

你可以尝试在`Dashboard`中正下方的`Interactive Console`的输入框中输入`alert('test')`尝试一下，可以看到再浏览器中的页面弹出了test的框（如果你的webview没有干掉Alert功能的话）。

#### 使用代理（vorlon proxy）自动注入脚本并调试

**Vorlon Proxy**的功能是使用本地的一个接口来访问一个现存的网页，例如：我想要访问`http://127.0.0.1:8080/`，我可以通过

```
http://localhost:5050/vorlonproxy/root.html?vorlonproxytarget=http://127.0.0.1:8080/&vorlonsessionid=1270.0.1
```

 的方式进行访问。

Vorlon Proxy会转发 `http://127.0.0.1:8080/` 中的内容，并自动注入vorlon.js脚本，识别跨域资源。让你不用注入脚本也能对现有页面进行远程调试（我在手机上访问如下地址即可）。

```
http://(your host ip):5050/vorlonproxy/root.html?vorlonproxytarget=http://www.baidu.com/
```

打开 [http://localhost:1337/httpproxy](http://localhost:1337/httpproxy) 就能用代理配置的自动配置，可以看到如下输入框：

![enter image description here](https://i.imgur.com/FFBLTpZ.jpg)

在输入框中输入 `http://127.0.0.1:8080/` 点击 `Inspect with VORLON.JS（注入vorlonjs脚本）` 后会弹出两个页面：一个是输入的页面的转发就是上面那个`localhost:5050`的页面，还有一个是这个页面的Dashboard。

## 0x03 Vorlon.js的局限性

虽然如上说了诸多Vorlon.js的好处，但是还是有很多问题没有解决。

- 无法设置断点
- 连接不稳定（也有可能是我公司的网络问题）
- 才`0.1.0`版，给人不靠谱的感觉
