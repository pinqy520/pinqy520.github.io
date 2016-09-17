---
title: 如何组织Mobx/Redux中的Store
updated: 2016-09-17 22:00
---


> 读Mobx官方文档中的最佳实践有感，并结合一些自己项目经验。总结一下遇到的坑，和预备的解决方案。

用了半年的redux，依稀记得刚开始用Redux的时候到处查找文档想知道组织state结构的最佳实践，因为在todo list的demo中用list代表todos，并不知道这个状态下的todos是纯数据，还是页面中展示数据的缓存。意思是，不太明白：

 1. 是store为页面服务（将页面中需要的可能会变更的数据另外存储起来）
 2. 还是数据就是数据，页面只是取得数据（类似于数据库）

最后搜到了作者的一句话，大概就是，随便你怎么用，用出花来都行，鼓励大家自主创新。所以在前期写页面时我也主要使用的一种比较流行的方式，就是上面的方式1，store为页面服务。

## 0x0 store为页面服务，以及遇到的坑

在前期使用这种方案真心不要太爽：

1. 看着设计图想想所需要的数据
2. 按照这些数据构建每个页面的state树节点
3. 写可能的action处理每一个用户行为
4. 构建好用户请求用到的异步action
5. 写reducer处理请求到的数据
6. 接入现实数据
7. 测试

完美，action写法统一，管理方便，reducer写法统一，管理方便，数据流下来，刷新不用自己处理（setState）。但是，最终发现，自己的项目，单页面这样写写很不错，但是并不适合写一个完整的app或者前后端同构的web app。（遇到啥问题下面说，先看看这种store的组织方式怎么做）

### 0x00 什么是store为页面服务

即根节点往下是各个页面，页面中的组件对应着state子树中的节点。

在React中，一个页面是由若干个嵌套的组件构成，每个组件都有相应的数据输入，最终这些数据输入可以反映成一个树状结构，最后我们直观的使用这个树状结构到state树上，就如下图所示。

![page base state.png](http://upload-images.jianshu.io/upload_images/1555399-075f237a1bffc8dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



### 0x01 遇到了什么问题

1. 重复页面倒退
2. 数据同步

**重复页面倒退**是指如下这种情况：

![wenti1.png](http://upload-images.jianshu.io/upload_images/1555399-1a6c262a5a9401a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

假设这种情况：在React Native和Redux构建的一个App中，我们从首页feed流进入某个id为1的文章的详情页，从详情页进入了某个推荐列表，然后又从这个推荐列表进入了另一个id为2的文章的详情页。

现在问题来了，无论是id为1的详情页，还是id为2的详情页，它们用的都是同一个state树的分支（可能叫`state.detailPage`），所以当页面浏览到id为2的详情页的时候，数据请求完毕之后设置到`state.detailPage`分支，id为1的数据就被替换掉了。如果这个时候要回退到id为1的详情页，就必须得重新获取数据。否则就还是id为2的数据。

在web应用里，用户比较习惯在白页中重新加载数据（当回退的时候），可是在app中，这是不符合习惯的，而且在app中页面发生了变化，只是向一个页面的堆栈中压入一个新的页面，之前的页面并不会释放调，我们习惯性将获取页面数据放入componentWillMount或者constructor或者任一个生命周期函数中，都不会执行（也就是说不会重新获取数据）。

**第二个问题是数据同步**。

还记得flux的引入是为了解决什么问题吗？

facebook右上角的消息提醒总是莫名其妙的出现，因为同是消息提醒的数据在不同的数据源中可能重复存有多份。使用flux可以让数据的源头只有一个，所有的展示都是通过一个源头流下来的数据产生的，某个页面中我读取了当前的所有消息，发送一个action告诉数据源，现在未读消息变为0了，然后所有地方的未读消息，受这个数据的改变都变成0了。

然而如果采用页面即数据的这种方案，即使数据源只有一个，但是同一种数据也有可能在多个地方存储过。例如上面的例子：列表页中可能有某个文章的标题（在列表页树分支的某个节点上），这个文章的详情页也有这个文章的标题，假设我在某个地方（假设是详情页）更改了这个树分支上的标题，其他树分支上标题并不会改变（例如列表页，因为是不同的数据），依然没有解决flux根本想解决的问题。

## 0x1 寻求解决方案

两个问题都有其各自单独的解决方案。

要解决相同页面会退的问题，就必须区分id为1和id为2的数据，例如，我们可以在`state.detailPage[1]`和`state.detailPage[2]`中分别存放id为1的详情页的数据和id为2的详情页的数据，然而redux的combine并不能动态的增加分支，分之节点都是事先预置好的，要实现这种，我们只能自己写中间件，或者自己实现插入分支（我是这样做的）。

如果要解决数据同步的问题，有两种方案：第一种，使用事件机制，所有要跟着变动的地方，建一个变更的事件，当变更的时候触发这个事件，让所有相关的地方发生改变；第二种，不管是列表的标题还是详情的标题，都只存一次，存在一个地方，那么不同地方取的都是同一个数据，就可以自然同步了。

方案一让人感觉redux并没有帮上什么忙，第二种方法不太好实现，在实际中，我们混合使用了两种方案。

这两个问题看下来，让人第一感受是：数据和页面需要分离，数据以表的形式存在，并且只存一次。

如果解决这个问题呢？还是以上面可能的app为例：

我们建立一个叫文章的map（可以是state下面的一个子分支），用id区分（当然，得自己实现），新建一个叫ui的分支专门为页面展示服务，里面都是各种id，文章id等等。在reducer获取的时候，现将列表接口获取的已有的数据付给文章map对应id的各个文章，然后向列表页返回一个id的列表。列表页要取详情，就去文章的map中自己取。到了详情页，向后端接口获取详情数据，再将文章map中，某条的信息更新的更完备。

### 0x11 另一个构建store的方法 - Mobx

其实总得来说flux应该是一套从后端到前端一路向下的数据解决方案，而不应该仅仅只是用在react的前端这块的数据处理，要是这样的话，可能它方便之处并不在于单一数据源。而应该在于前端开发和调试的时候，能规整代码结构，让数据可追溯，并且可以很方便的缓存数据。而如果用上面提交的方案来处理前端数据，首先id动态生成数据redux是不支持的，其次也太过复杂。

另外，有很多reducers其实并没有做数据处理，只是简单的把数据做了转发，而获取数据由往往是通过异步的action来实现的，那这样的reducer是否有必要存在？

Mobx实际上是为了解决这样麻烦的reducer而产生的，直接让action改动数据，然后用双向绑定的方式将数据直接映射到界面中。用来简化前端的数据流程。他和MVVM的不同处在于数据是单独出来的作为store的存在。在react组件中绑定store中的数据，类似于以前打模板的方式，当store变化时自动就会映射到界面中，所有的数据操作都在action中进行。

https://mobxjs.github.io/mobx/

![flow.png](http://upload-images.jianshu.io/upload_images/1555399-640bfbaf377e2c30.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


如此，我们就不必在意页面取什么数据了，store就看成数据库，使用mobx提供的amap生成按照id -> value的键值对来处理不同id的同种数据。

### 0x12 最佳实践给的灵感

官方文档给的给出了建议的构建store的方式：[https://mobxjs.github.io/mobx/best/store.html](https://mobxjs.github.io/mobx/best/store.html)

>  Most applications benefit from having at least two stores. One for the UI state and one or more for the domain state. 

建议我们至少新建两个store（实际上应该是两种），一个UI state一个domain state（domain state可以理解为我们数据库的一张表，例如文章表，这样的），UI state是指当前UI的状态，比如：窗口尺寸、当前展示的页面、渲染状态、网络状态等等，也可以存上面的页面所用到的数据，但是是一个id的引用，实际数据还是从domain state中取得的。

其新建store的方式也并不和redux一样，在mobx中，一个store是一个类，而具体的state则是它的实例，

在它官方给的例子中，只有一个domain state，就是TodoStore，用来存储todo list和相应的操作（这些操作可以声明成action）如果整个app中只有一个todo list的话，那整个state就是一个TodoStore的实例了

``` javascript
import {observable, autorun} from 'mobx';
import uuid from 'node-uuid';

export class TodoStore {
    authorStore;
    transportLayer;
    @observable todos = [];
    @observable isLoading = true;

    constructor(transportLayer, authorStore) {
        this.authorStore = authorStore; // Store that can resolve authors for us
        this.transportLayer = transportLayer; // Thing that can make server requests for us
        this.transportLayer.onReceiveTodoUpdate(updatedTodo => this.updateTodoFromServer(updatedTodo));
        this.loadTodos();
    }

    /**
     * Fetches all todo's from the server
     */
    loadTodos() {
        this.isLoading = true;
        this.transportLayer.fetchTodos().then(fetchedTodos => {
            fetchedTodos.forEach(json => this.updateTodoFromServer(json));
            this.isLoading = false;
        });
    }

    /**
     * Update a todo with information from the server. Guarantees a todo
     * only exists once. Might either construct a new todo, update an existing one,
     * or remove an todo if it has been deleted on the server.
     */
    updateTodoFromServer(json) {
        var todo = this.todos.find(todo => todo.id === json.id);
        if (!todo) {
            todo = new Todo(this, json.id);
            this.todos.push(todo);
        }
        if (json.isDeleted) {
            this.removeTodo(todo);
        } else {
            todo.updateFromJson(json);
        }
    }

    /**
     * Creates a fresh todo on the client and server
     */
    createTodo() {
        var todo = new Todo(this);
        this.todos.push(todo);
        return todo;
    }

    /**
     * A todo was somehow deleted, clean it from the client memory
     */
    removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        todo.dispose();
    }
}
```

这样抽象下来的话，todo也可以抽象成一个类，而每个todo item都是todo的实例，多个todo存储在todoStore中，也满足我们对整个数据的抽象。

``` javascript
export class Todo {

    /**
     * unique id of this todo, immutable.
     */
    id = null;

    @observable completed = false;
    @observable task = "";

    /**
     * reference to an Author object (from the authorStore)
     */
    @observable author = null;

    store = null;

    /**
     * Indicates whether changes in this object
     * should be submitted to the server
     */
    autoSave = true;

    /**
     * Disposer for the side effect that automatically
     * stores this Todo, see @dispose.
     */
    saveHandler = null;

    constructor(store, id=uuid.v4()) {
        this.store = store;
        this.id = id;

        this.saveHandler = reaction(
            // observe everything that is used in the JSON:
            () => this.asJson,
            // if autoSave is on, send json to server
            (json) => {
                if (this.autoSave) {
                    this.store.transportLayer.saveTodo(json);
                }
            }
        });
    }

    /**
     * Remove this todo from the client and server
     */
    delete() {
        this.store.transportLayer.deleteTodo(this.id);
        this.store.removeTodo(this);
    }

    @computed get asJson() {
        return {
            id: this.id,
            completed: this.completed,
            task: this.task,
            authorId: this.author ? this.author.id : null
        };
    }

    /**
     * Update this todo with information from the server
     */
    updateFromJson(json) {
        // make sure our changes aren't send back to the server
        this.autoSave = false;
        this.completed = json.completed;
        this.task = json.task;
        this.author = this.store.authorStore.resolveAuthor(json.authorId);
        this.autoSave = true;
    }

    dispose() {
        // clean up the observer
        this.saveHandler();
    }
}
```

假设我们以后要新增查看todo item的详情（例如：里面有具体计划之类的）。我们也都是对同一个todo的对象进行操作。而具体我们展现的是那个todo item的页面，我们可以放到ui state中。

> 不知道有没有比较好理解，可以留言反馈下，或者实际操作下Mobx

## 0x2 效果

> 正在实验中，后期加上，目前上面遇到的两个问题已完美解决，但是预感会遇到其他坑。