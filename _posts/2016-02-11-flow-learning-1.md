---
title: Flow教程（一） - 简介和开始
updated: 2016-02-11 02:04
---

> 之前在项目中用了TypeScript进行编写，并用了Atom里的atom-typescript插件。感觉类型声明所带来的代码提示和IDE纠错功能真心非常好用，想作为主要语言来学习。可是在用惯了babeljs配合ES6里的一些方便的特性，例如：Promise等之后，使用TypeScript还是有点不太习惯，于是选择了Flow（[官网传送门](http://flowtype.org)）。

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

> 建议直接用`brew`和`npm`安装。

下载：[地址传送门](https://github.com/facebook/flow/releases)

解包：

``` bash
$ unzip flow.zip
```

将其中的可执行代码放入一个文件夹目录，进入目录并将其设置为环境变量：

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

### 基本使用

在需要检测的文件前面加上注释`/* @flow */`：

**index.js**

```javascript
/* @flow */

// your javascript/flow code
```

然后在目录中执行：

``` bash
$ flow
```

就可以看到检测结果了。

### 在Nuclide中使用Flow

> 代码检查配合『错误提示』+『自动补全』在编辑器中使用起来很方便，更可以提高编码效率。

我使用的是这种方式，也可以手动加载flow相关的atom插件。

- 在Atom中安装Nuclide：

``` bash
$ apm install nuclide
```

- 在根目录添加一个空的`.flowconfig`文件

- 在需要检测的文件最前面加上注释`/* @flow */`

代码检查：

![Nuclide代码检查](https://i.imgur.com/GloxVNs.gif)

代码提示自动补全：

![Nuclide自动补全](https://i.imgur.com/5ZyYscB.gif)

### VS Code

在VS Code中安装官方提供的Flow Language Support。（博主已转战VSCODE）

## 0x03 通过官方的例子进一步了解一下

### 1. Hello Flow

> `/* @flow */`很重要，再文件中添加这段注释，告诉Flow，该文件是需要进行类型检测。

**`hello.js`**

``` javascript
/* @flow */

function foo(x) {
  return x * 10;
}

foo('Hello, world!');
```

``` bash
$ flow

hello.js:7
  7: foo("Hello, world!");
     ^^^^^^^^^^^^^^^^^^^^ function call
  4:   return x*10;
              ^ string. This type is incompatible with
  4:   return x*10;
              ^^^^ number
```

因为字符型没有乘法，所以报错，改成下面这种就不会了：

``` javascript
/* @flow */

function foo(x) {
  return x * 10;
}

// This is fine, because we're passing a number now
foo(10);
```

### 2. 增加类型声明

> 类型检测中，Flow能推断出一个文件中的许多东西，所以，你不必去声明每一个函数和变量。不过，即使Flow能够推断一个类型，你也仍然可以给其加上明确的声明。

**`type_annotations.js`**

``` javascript
/* @flow */

function foo(x: string, y: number): string {
  return x.length * y;
}

foo('Hello', 42);
```

``` bash
$ flow

type_annotations.js:4
  4:   return x.length * y;
              ^^^^^^^^^^^^ number. This type is incompatible with
  3: function foo(x: string, y: number): string {
                                         ^^^^^^ string
```

因为例子中声明的函数`foo`的返回类型是`string`，而两个`number`类型变量相乘的结果为`number`，因此报错。改成下面这样就行~：

``` javascript
/* @flow */

// Changing the return type to number fixes the error
function foo(x: string, y: number): number {
  return x.length * y;
}

foo('Hello', 42);
```

### 3. 可为空的类型

> 大多数类型系统会忽略`null`的情况，而Flow不会，当程序会可能会因为`null`造成crash的情况里，Flow进行类型检查时也会发现。

**`nulls.js`**

``` javascript
/* @flow */

function length(x) {
  return x.length;
}

var total = length('Hello') + length(null);
```

``` bash
$ flow

nulls.js:7
  7: var total = length("Hello") + length(null);
                                   ^^^^^^^^^^^^ function call
  4:   return x.length;
                ^^^^^^ property `length`. Property cannot be accessed on possibly null value
  4:   return x.length;
              ^ null
```

因为在函数`length`中，并没有对没有`length`属性的传参进行判断，因此，当传入参数为`null`时，就会产生错误，Flow会在检查时发现这种错误。当对这种情况再函数中进行判断之后，Flow就会检查通过了：

``` javascript
/* @flow */

function length(x) {
  if (x !== null) {
    return x.length;
  } else {
    return 0;
  }
}

var total = length('Hello') + length(null);
```

Flow会根据函数中的具体情况进行类型检查，下面例5中也有体现。

### 4. 数组

**`arrays.js`**

``` javascript
/* @flow */

function total(numbers: Array<number>) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

total([1, 2, 3, 'Hello']);
```

``` bash
$ flow

arrays.js:11
 11: total([1, 2, 3, "Hello"]);
     ^^^^^^^^^^^^^^^^^^^^^^^^^ function call
 11: total([1, 2, 3, "Hello"]);
                     ^^^^^^^ string. This type is incompatible with
  3: function total(numbers: Array<number>) {
                                   ^^^^^^ number
```

因为明明声明的是`number`的`Array`。

``` javascript
total([1, 2, 3, 4]);
```

### 5. 动态代码

> 例3中已经有所体现，Flow能根据函数内的具体情况，进行类型判断。

**`dynamic.js`**

``` javascript
/* @flow */

function foo(x) {
  return x.length;
}

var res = foo('Hello') + foo(42);
```

``` bash
$ flow

dynamic.js:4
  4:   return x.length;
              ^^^^^^^^ property `length`
  4:   return x.length;
                ^^^^^^ property `length`. Property not found in
  4:   return x.length;
              ^ Number
```

加上一个`if`判断就行了

``` javascript
/* @flow */

function foo(x) {
  if (typeof x === 'string') {
    return x.length;
  } else {
    return x;
  }
}

var res = foo('Hello') + foo(42);
```


## 0x04 Flow的优点

1.  不改变JavaScript原有特性，ES6支持。 
2.  无痛转成ES6 ES5，（主要针对，很多情况下TS需要先转成ES6再用Babel转成ES5）



## 参考文献

[Flow, a new static type checker for JavaScript](https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/)