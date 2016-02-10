---
title: Flow教程 (1) - 简介和开始
updated: 2016-02-11 02:04
---

> 之前在项目中用了TypeScript进行编写，并用了Atom里的atom-typescript插件。感觉强类型所带来的代码提示和IDE纠错功能真心非常好用，想作为主要语言来学习。可是在用惯了babeljs配合ES6里的一些方便的特性，例如：Promise等之后，使用TypeScript还是有点不太习惯，于是选择了Flow（[官网传送门](http://flowtype.org)）。

## 0x00 什么是Flow

Flow Checker是Facebook公布的一个JavaScript静态类型检查器，官方的说法：[http://flowtype.org/docs/about-flow.html](http://flowtype.org/docs/about-flow.html)

可以将Flow理解为两个东西：

- 静态类型检查器
- JavaScript方言

### 作为静态类型检查器


### 作为JavaScript方言

> 其实这样说并不严谨，也是为了静态类型检查更容易，Flow中允许显示声明变量的类型。

还记得TypeScript里变量类型的声明和各种数据类型的声明吗？

``` javascript
interface A {
    b: string
    c: any
}

function plus(x: number, y: number): number {
    return x + y
}
```

在Flow中也可以进行类似的声明，并使用babel转换成一般的JavaScript代码：

``` javascript
/* @flow */
var x: number = 0;
var f = function(a: Array<string | number>): boolean {
    return false;
}
```

转换成：

``` javascript
/* @flow */
var x = 0;
var f = function(a){
    return false;
}
```

## 0x01 Flow带来的好处

和TypeScript一样：

- 错误检查
- 代码提示、代码补全

## 0x02 开始使用

## 0x03 Flow的优点

在未来Flow会将TypeScript中，DefinitelyTyped.org中现有的公共库的TypeScript声明文件 (.d.ts) 转换成Flow可用的。

## 0x04 在Nuclide中使用Flow

## 参考文献

[Flow, a new static type checker for JavaScript](https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/)