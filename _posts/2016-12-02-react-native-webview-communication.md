---
title: React Native 与 WebView 的通信
updated: 2016-12-02 11:40
---

> 在React Native 0.37版本中，合并入了[react-native-webview-bridge](https://github.com/alinz/react-native-webview-bridge/tree/v2)作者的PR，从此React Native中自带的WebView拥有了和Web通信的功能。此版本之前的版本也可以用`react-native-webview-bridge`或者其他WebView Bridge的方案进行通信。

> 本文结构从讲官方支持的方法开始，到定义消息结构来扩展功能，到如何透明化通信，优化通信接口设计，到更通用的实现方案。

很多手机应用的开发场景中，我们都会涉及到React Native与WebView通信。以前Hybrid App中Native做的工作，到RN中依然存在。

![通信](http://upload-images.jianshu.io/upload_images/1555399-7fa9a9e85c781414.gif?imageMogr2/auto-orient/strip)

## 0x0 React Native WebView 的通信功能

> 首先介绍一下React Native WebView自带的通信功能

### 0x01 React Native 侧

在0.37的WebView中新增了：

- 一个属性`onMessage`
- 一个方法`postMessage`

在某个组件（页面）中初始化（渲染）一个`WebView`

``` javascript
import * as React from 'react'
import { WebView } from 'react-native'

class Example extends React.Component {
    webview: WebView
    handleMessage = (evt: any) => {
        const message = evt.nativeEvent.data
    }
    render() {
        return (
            <WebView
                ref={w => this.webview = w}
                onMessage={this.handleMessage}
            />
        )
    }
}
```

这样你就可以在该组件（页面）的`handleMessage`方法中处理消息了（消息必须是字符串）。

同时，你可以在该组件（页面）渲染完毕，`WebView`的`ref`属性执行之后，在组件（页面）中的任何地方使用`this.webview.postMessage`向`WebView`中的页面发送消息。

``` javascript
const message: string = 'hello web!'
this.webview.postMessage(message)
```

其中`postMessage`接受一个字符串参数。



### 0x02 Web 侧

> 不知道为啥官方文档没写这个，只能去看[示例文件](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/js/messagingtest.html)

并且在网页中增加了：

- 一个`message`事件
- 一个`postMessage`方法

监听从React Native发过来的消息：

``` javascript
window.document.addEventListener('message', function (e) {
    const message = e.data
})
```

给React Native发消息：

``` javascript
window.postMessage('hi! RN')
```


## 0x1 定义传输协议，扩展`message`的的功能

当然，大多数情况下，需求不可能只是给网页发一段字符串这么简单。很多时候，一侧向另一侧发送消息，是为了得到另一侧的某些数据，或者触发另一侧的某些动作。这时候，我们就需要定义通信协议来处理复杂的请求。

可以借鉴`Hybrid`方案中常用的`command + paylaod`的方式，这样定义：

``` javascript
const message = {
    command: 'example', // string
    payload: {  // any
        arg1: 1,
        arg2: '',
    }
}
```

举个例子，假设在web侧，有一个可以获取信息的方法：

``` javascript
// web side
const me = {
    name: 'Qi', age: 26,
    nickname: 'pinqy',
}
// 提供我的信息
function info(property: string) {
    return me[property] || 'I don\'t know'
}
```

Native也想要获取这个信息，可以发一个消息：

``` javascript
const data = {
    command: 'get info', // 表明意图
    payload: { // 表明内容
        property: 'nickname'
    }
}
this.webview.postMessage(JSON.stringify(data))
```

Web这边监听从Native发过来的消息并且做相应的处理：

``` javascript
window.document.addEventListener('message', function (e) {
    const message = JSON.parse(e.data)
    if (message.command === 'get info') {
        const property = info(message.payload.property)
        // 向Native发消息通知结果
    }
})
```

处理完得到结果应该给native发送消息告知结果了

``` javascript
const data = {
    command: 'get info',
    payload: {
        [message.payload.property]: property
    }
}
window.postMessage(JSON.stringify(data))
```

然后Native要接受这个结果：

``` javascript
handleMessage = (evt: any) => {
    const message = JSON.parse(evt.nativeEvent.data)
    if (message.command === 'get info') {
        const nickname = message.payload.nickname
        // 得到了数据随你怎么办吧
    }
}
```

现在问题来了：

1. 假设有多个`get info`的请求，有的要获得`nikename`，有的要获得`age`怎么区分，或者每个请求如何知道哪个回应是针对哪个请求的。
2. 我自己也监听了一个叫`get info`的命令，我咋知道发过来的是回复给我的还是请求我的。

第一个问题，为了区分不同的请求，我们可以在payload中新增一个`id`字段，用全局唯一的ID（可用自增函数实现）来区分每个消息，返回结果的时候也将这个`id`带上，就知道了。

第二个问题，为了区分是不是`response`，我们可以再加一个`isReply`字段，请求的时候为`false`，回复结果的时候置为`true`。

下面讲。

## 0x2 让通信透明，我只想知道怎么发，怎么收，怎么响应就行了

> 上面这些真的是麻烦到不行了，使用的时候`id`什么的，我都不想关心

记得使用`ajax`或者`fetch`发送一个请求么？

``` javascript
$.post('URL', {}, function (res) {})
fetch('URL').then(res => res.json()).then()
```

我也想发送信息，传入回调函数处理结果就好。

还有一个问题是监听，就像`express`一样，我能直接监听一个具体的命令然后给出处理结果就好了。

基于以上愿望，我们可以这样设计接口：

``` javascript
send(command: string, payload: any): Promise<any>
listen(command: string, handler: Function)
```

回到在通信协议中增加`id`和`isReply`，首先我们需要增加一个`map`来记录我们每次发出的请求的响应函数，等待收到回复的信息之后，执行。

``` javascript
const transactions = {}
function addTransaction(command, fn) {
    const id = getUID()
    transactions[`${command}(${id})`] = fn
    return id
}
function executeTransaction(command, id, data) {
    if (transactions[`${command}(${id})`]) {
        transactions[`${command}(${id})`](data)
        delete transactions[`${command}(${id})`]
    }
}
```

接着就可以定义`send`接口函数了：

``` javascript
function send(command, data, callback) {
    const payload = {
        command, data,
        isReply: false,
        id: addTransaction(callback),
    }
    // 发送message，Web或者Native均可
}
```

接下来就是`listen`接口了。这个接口的作用实际记录下收到某种命令请求的时候的执行函数，因此我们也需要新建一个`map`来存下所有命令对应的处理函数：

``` javascript
const callbacks = {}
function listen(command, fn) {
    callbacks[command] = fn
}
// 这里默认每个命令只有一个处理方法，如果需要多个可用也可用其他方案实现。
```

此外，我们还得实现一个`listener`来监听所有来自另一边的消息：

``` javascript
// Native Side
<WebView onMessage={e => listener(e.nativeEvent.data)} />

// Web Side
window.document
    .addEventListener('message', (e) => listener(e.data))
```

`listener`也是环境无关的处理方法：

``` javascript
function listener(message) {
    const payload = JSON.parse(message)
    const { command, id, isReply, data } = payload
    if (isReply) {
        // 如果是自己请求的回复，则调取之前存下的回调函数
        executeTransaction(command, id, data)
    } else {
        // 如果是请求，则得到结果后回复
        if (callbacks[command]) {
            callbacks[command](data, reply(command, id))
        }
    }
}
function reply(command, id) {
    return function (data) {
        const payload = {
            command, id, data,
            isReply: true
        }
        // 发送message，环境无关
    }
}
```

到这里，一个简单的通信细节透明的React Native和Web通信接口的实现就完成了。

## 0x3 进一步改进接口，让RN获取Web中函数就像直接调用函数那么简单

> 我理想中的获得Web上信息的方式应该是这样的。

以上面的例子来说的话，希望能直接在`native`侧调取`web`侧的函数`info`

``` javascript
// native side
const nickname = await info('nickname')
```

当然，给Native暴露哪些函数应该是web设置好的

``` javascript
// web side
function info(property: string) {
    return me[property] || 'I don\'t know'
}
define('info', info) // 把info方法暴露给native

// native side
const info = bind('info') // bind的名字和web发布的相同
// 这一步同样可以通过代码自动做。
```

要完成上面接口的改造，我们得做两件事：

1. 回调处理改成Promise的。
2. 将`data`变成参数的Array。

实现`define`

``` javascript
function define(name, fn) {
    listen(name, (data) => fn(...data))
}
```

实现`bind`

``` javascript 
function bind(name) {
    return (...args) => {
        return new Promise(resolve => {
            send(name, args, resolve)
        })
    }
}
```

是不是超简单。


## 0x4 不止适配自带的WebView，任何WebView Bridge都可以

> 这部分主要是关于如何将通用功能抽取成通用工具让其可以适用于各种场景的。

进一步分析整个通信过程的实现来看，其实关于通信细节这一块，都是通用的，不通用的是发送方法和监听方法，因此，我们完全可以把这两块单独抽出来，作为生成一个通信器的参数：

``` javascript
function createMessager(sender): messager
```

例如，在RN原生支持的messge接口里：

``` javascript
// react native side
messager = createMessager(this.webview.postMessage)

// web side
messager = createMessager(window.postMessage)
```

然后在`react-native-webview-bridge#v2`中就可以：

``` javascript
// react native side
messager = createMessager(this.webviewBridge.send)

// web side
messager = createMessager(window.WebViewBridge.send)
```

监听函数也同样。

具体可以看这里：[react-native-webview-invoke/factory](https://github.com/pinqy520/react-native-webview-invoke/blob/master/src/messager/index.js)

## 0x5 核心思想上面都讲过了，具体实现可以看源码

里面也有demo。当然，我已经抽取成库了，可以直接用在你的项目里。

[react-native-webview-invoke](https://github.com/pinqy520/react-native-webview-invoke) - [中文文档](https://github.com/pinqy520/react-native-webview-invoke/wiki/%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3)
