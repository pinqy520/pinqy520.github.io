---
title: Flow教程 (1) - 简介和开始
updated: 2016-02-11 02:04
---

> 之前在项目中用了TypeScript进行编写，并用了Atom里的atom-typescript插件。感觉强类型所带来的代码提示和IDE纠错功能真心非常好用，想作为主要语言来学习。可是在用惯了babeljs配合ES6里的一些方便的特性，例如：Promise等之后，使用TypeScript还是有点不太习惯，于是选择了Flow（[官网传送门](http://flowtype.org)）。

## 0x00 什么是Flow [[传送门](http://flowtype.org/docs/about-flow.html)]

Flow Checker是Facebook公布的一个JavaScript静态类型检查器，能够在不改变代码的情况下，检查JavaScript中一般的Bug，如：无声类型转换、空指针引用等等。同时，Flow也支持给JavaScript添加类型语法，因此，开发者们可以通过在他们的代码中声明不变量让其自动维护。

可以将Flow理解为两个东西：

- 静态类型检查器
- JavaScript方言

### 作为静态类型检查器

官方的例子中：

``` javascript
/* @flow */
function onlyWorksOnNumbers(x) {
  return x * 10;
}
onlyWorksOnNumbers('Hello, world!');
```

在不改变代码的情况下，执行命令行：

``` bash
$ flow
```

会提示错误

``` bash
This type is incompatible with number
```

### 作为JavaScript方言

> 其实这样说并不严谨，也是为了静态类型检查更容易，Flow中允许显示声明变量的类型。

还记得TypeScript里变量类型的声明和各种数据类型的声明吗？

``` typescript
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

### 安装

#### 1. 手动安装：

a. 下载：

- Mac OS X: https://facebook.github.io/flow/downloads/flow-osx-latest.zip
- Linux (64 bit): https://facebook.github.io/flow/downloads/flow-linux64-latest.zip

b. 解包：

``` bash
$ unzip flow.zip
```

c. 将其中的可执行代码放入一个文件夹目录，进入目录并将其设置为环境变量：

``` bash
$ cd flow
$ echo -e "\nPATH=\"\$PATH:$(pwd)/\"" >> ~/.bashrc && source ~/.bashrc
```

#### 2. Mac中通过Homebrew安装

``` bash
$ brew update
$ brew install flow
```

#### 3. 通过npm安装`flow-bin`

``` javascript
$ npm install flow-bin --global
```

### 命令行使用

### 在Nuclide中使用Flow

我使用的是这种方式，也可以手动加载flow相关的atom插件。首先，在Atom中安装Nuclide：

``` bash
$ apm install nuclide
```

## 0x03 Flow的优点

1.  不改变JavaScript原有特性，ES6支持。 

> 就算是增加了类型声明，也是首先进行类型检查，然后通过Babel转换成没有类型声明的版本，之后就是es6或者es5的原生JavaScript代码，然后Flow也添加了ES6中新增的类型的声明和检查。

2. 类型检查是选择性的
3. 类型声明也是选择性的
4. 在未来Flow会将TypeScript中，DefinitelyTyped.org中现有的公共库的TypeScript声明文件 (.d.ts) 转换成Flow可用的。
5. Facebook大公司有保障，并且FB已经再其自己的项目中应用了，更新靠谱。



## 参考文献

[Flow, a new static type checker for JavaScript](https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/)