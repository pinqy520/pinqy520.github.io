---
title: WebVR 之 一次AFrame尝试
updated: 2016-03-29 21:03
---

## 0x00 开始

> 入手了Cardboard之后就对各种VR的应用非常感兴趣，一个一个的尝试之后接触到MozVR，以及WebVR这种另一种编写VR场景的方式。

目前在前端写VR还是主要使用Three.js构建3D场景，然后通过WebVR的接口建立控制器。在此基础上，MozVR开发了AFrame，可以用写html标签的形式，以及DOM控制的方式，来编写VR场景以及3D元素的控制，减少了前端开发者入门VR的门槛。

在入门WebVR之前，我也决定将AFrame作为我了解WebVR的第一步。

[DEMO入口（手机safari中打开）](http://www.pinqy.cn/demo/hello-vr/)

## 0x01 AFrame

### 简介

官方的说法是：

> A-Frame是一个创建跨端的Web虚拟现实体验的框架，包括：桌面、移动、以及Oculus Rift

### 基本使用

假设我们从来都没有接触过Three.js也不知道如何3D建模，只是写过网页。

1. 我们首先建立一个aframe的页面

``` html
<!doctype html>
<html>
  <head>
    <title>My first VR site</title>
    <script src="https://aframe.io/releases/latest/aframe.min.js"></script>
  </head>
  <body>
  </body>
</html>
```

就是一个很普通的网页开始的形式，引入了aframe库。

2. 你可以在`<body></body>`中插入一个标签（以下例子都只保留`<body/>`内的内容）

``` html
<a-scene>
</a-scene>
```

它就类似与网页中的body，告诉大家『一个3D场景（网页内容）要开始啦』。

然后你就可以在场景中新建『实例』(Entity)了。

``` html
<a-scene>
	<a-box></a-box>
</a-scene>
```

### 交互 + 动画

> 网页中我们说到交互就是各种各样的响应事件，说到动画就是CSS3中各种transition和animation。AFrame让我们同样也可以这样操作3D元素。

当然在这之前我们首先我们要了解AFrame中几种交互事件的定义。

在网页中，我们通常使用鼠标指针来进行交互操作。在AFrame定义的场景中，我们也可以定义这样一个指针，它出现在你视野的正中，而你的视野在场景中是一个`camera`，`camera`也是场景中的一个实体（以下代码均在`<a-scene />`中，不重复声明）。

``` html
<a-entity position="0 1.8 4">
    <a-camera id="camera" look-controls>
        <a-cursor color="#4CC3D9" fuse="true"></a-cursor>
    </a-camera>
</a-entity>
```

上面代码就定义了这样一个位置在`0 1.8 4`的摄像机，其前方有一个颜色为`#4ccd9`的指针，通过这样一个指针，可以有`mouseover`/`click`这样的交互。

![AFrame cursor](https://i.imgur.com/Z7rAanX.png)

指针有了，现在需要一个物体：

``` html
<a-box position="0 0 -2"></a-box>
```

这样声明了一个物体。还记得我们怎么给html中的元素添加交互动画的吗？

``` less
selector {
	opacity: 1;
	&:hover {
		opacity: 0.5;
	}
}
```

鼠标hover上物体就变成了半透明的。

在AFrame中我们也可以这样定义动画，不过并不是CSS属性，而是子标签

``` html
<a-box position="0 0 -2">
	<a-animation begin="mouseenter" attribute="opacity" to="0.5" dur="2000"></a-animation>
</a-box>
```

可以发现鼠标hover上去，就变成半透明了，可是鼠标出来却不会恢复原状，如果要达到这样的效果我们还需要：


``` html
<a-box position="0 0 -2">
	<a-animation begin="mouseenter" attribute="opacity" to="0.5" dur="2000"></a-animation>
	<a-animation begin="mouseleave" attribute="opacity" to="1" dur="2000"></a-animation>
</a-box>
```

就ok了。

在原生的html中，我们还可以给元素绑定交互事件，例如点击等：

``` javascript
$('selector').on('click', function (){
	console.log('element has been clicked')
})
```

在AFrame中我们也可以这样，我们首先给物体设置一个类名

``` html
<a-box class="box-1" position="0 0 -2"></a-box>
```

然后就可以绑定事件了：

``` javascript
$('.box-1').on('click', function () {
	console.log('box has been clicked')
})
```

会发现，完美执行，这里的点击事件是指针注释5秒。具体配置官方文档有写。

下面我们看个更复杂的例子：

## 0x02 实例

还是上面那个指针。

为了能在场景中交互，场景内应该有一些可交互的物体，现在我们来创建一个如下物体的集合：

![entity](https://i.imgur.com/MuYcdk7.png)

它由两部分组成：箱子 和 影子

![AFrame Entity](https://i.imgur.com/BI4083K.png)

现在我们要定义这两个物体，将他们定义到合适的位置，并且把他们分组为一个整体：

``` html 
<a-entity position="0 0 -2">
    <a-box class="cube" position="0 3.5 0" rotation="30 30 0" width="2" depth="2" height="2" color="#F16745" roughness="0.8"></a-box>
    <a-image class="cube-shadow" position="0 0 0" src="./assets/radial-shadow-2.png" opacity="0.5" rotation="-90 0 0" scale="2 2 2"></a-image>
</a-entity>
```

有了物体我们就可以开始定义一些简单的交互动画了。

在上面代码中的属性里我们可以看到，现在，我们视线正前方的正方形，是选转了`30 30 0`的角度的。我们想让它在，鼠标移动到上面的时候变成正对着的，即旋转角度变成`0 0 0`，鼠标移开的时候，再恢复成现在的样子，那么，就应该给盒子添加如下子元素：

``` html
<a-box class="cube" position="0 3.5 0" rotation="30 30 0" width="2" depth="2" height="2" color="#F16745" roughness="0.8">
    <a-animation attribute="rotation" to="0 0 0" dur="1000" begin="mouseenter" fill="forwards"></a-animation>
    <a-animation attribute="rotation" to="30 30 0" dur="1000" begin="mouseleave" fill="forwards"></a-animation>
</a-box>
```

如果你感觉在没有交互的时候它的行为太单一了，我们可以加上一个反复浮动的动画效果，当然，原理和css3中的`animation`一样，只不过css属性变成了html中的动画标签：

``` html
<a-animation attribute="position" to="0 4 0" dur="2000" repeat="indefinite" direction="alternate" fill="forwards"></a-animation>
```

另外，当物体更接近与地面的时候，影子颜色应该变身，扩散范围应该变小，具体来说就是：

``` html 
<a-image class="cube-shadow" position="0 0 0" src="./assets/radial-shadow-2.png" opacity="0.5" rotation="-90 0 0" scale="2 2 2">
    <a-animation attribute="scale" to="2.5 2.5 2.5" dur="3000" repeat="indefinite" direction="alternate" fill="forwards"></a-animation>
    <a-animation attribute="opacity" to="0.3" dur="2000" repeat="indefinite" direction="alternate" fill="forwards"></a-animation>
</a-image>
```

这样就让浮动的效果看起来更真实，完整代码如下：

``` html
<a-entity position="0 0 -2">
    <a-box class="cube" position="0 3.5 0" rotation="30 30 0" width="2" depth="2" height="2" color="#F16745" roughness="0.8">
        <a-animation attribute="rotation" to="0 0 0" dur="1000" begin="mouseenter" fill="forwards"></a-animation>
        <a-animation attribute="rotation" to="30 30 0" dur="1000" begin="mouseleave" fill="forwards"></a-animation>
        <a-animation attribute="position" to="0 4 0" dur="2000" repeat="indefinite" direction="alternate" fill="forwards"></a-animation>
    </a-box>
    <a-image class="cube-shadow" position="0 0 0" src="./assets/radial-shadow-2.png" opacity="0.5" rotation="-90 0 0" scale="2 2 2">
        <a-animation attribute="scale" to="2.5 2.5 2.5" dur="3000" repeat="indefinite" direction="alternate" fill="forwards"></a-animation>
        <a-animation attribute="opacity" to="0.3" dur="2000" repeat="indefinite" direction="alternate" fill="forwards"></a-animation>
    </a-image>
</a-entity>
```

然后开始绑定点击事件：

> 点击后在元素上方展开一个折叠的平面

折叠的平面元素+动画代码：

``` html
<a-entity>
    <a-entity position="0 0 0" scale="1 1 1">

        <!-- Animations rotate and position the group for a bit of extra visual flair. -->
        <a-animation attribute="position" to="0 4.5 0" dur="2000" fill="forwards"></a-animation>
        <a-animation attribute="scale" from="0 0 0" to="1 1 1" dur="1000" fill="forwards"></a-animation>
        <a-animation attribute="rotation" from="0 60 0" to="10 10 0" dur="2500" fill="forwards"></a-animation>

        <!-- Translate and position are used to set the "hinge" of each board to it's top edge.  -->
        <a-box width="6" height="1" depth=".05" translate="0 -0.5 0" color="#F16745">
            <a-animation attribute="rotation" from="-90 0 0" to="0 0 0" dur="1000" fill="forwards"></a-animation>

            <a-box position="0 -1 0" width="6" height="1" depth=".05" translate="0 -0.5 0" color="#FFC65D">
                <a-animation attribute="rotation" from="-175 0 0" to="0 0 0" dur="1000" begin="250" fill="both"></a-animation>

                <a-box position="0 -1 0" width="6" height="1" depth=".05" translate="0 -0.5 0" color="#7BC8A4">
                    <a-animation attribute="rotation" from="-180 0 0" to="0 0 0" dur="1000" begin="500" fill="both"></a-animation>
                    <a-box position="0 -1 0" width="6" height="1" depth=".05" translate="0 -0.5 0" color="#4CC3D9">
                        <a-animation attribute="rotation" from="-180 0 0" to="0 0 0" dur="1000" begin="750" fill="both"></a-animation>
                        <a-box position="0 -1 0" width="6" height="1" depth=".05" translate="0 -0.5 0" color="#93648D">
                            <a-animation attribute="rotation" from="-180 0 0" to="0 0 0" dur="1000" begin="1000" fill="both"></a-animation>
                        </a-box>
                    </a-box>
                </a-box>
            </a-box>
        </a-box>
    </a-entity>
</a-entity>
```

然后绑定对象。

``` javascript
// unfoldHTML 就是上面的代码的字符串
// $scene 是scene元素zepto对象
// $cube 是上面的盒子加影子的zepto对象
let $cubeTwoBoard = $(unfoldHTML).attr('position', '0 7 -5')

$cube
.attr({
    position: '0 0 -5'
})
.on('click', (e) => $scene.append($cubeTwoBoard))
.on('mouseleave', () => $cubeTwoBoard.remove())
```

大功告成！