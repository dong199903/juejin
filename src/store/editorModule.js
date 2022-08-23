// editor 相关 vuex 数据

import { get, set } from '@/utils/storage'
//初始数据
const pages = [
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第5天 设计模式 设计模式提供一种讨论软件设计的公共语言，使得熟练设计者的设计经验可以被初学者和其他设计者掌握。简单来说设计模式就是一门架构，用于解决不同问",
    collection: ["前端"],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第5天 设计模式 设计模式提供一种讨论软件设计的公共语言，使得熟练设计者的设计经验可以被初学者和其他设计者掌握。简单来说设计模式就是一门架构，用于解决不同问",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第5天\">这是我参与「第四届青训营 」笔记创作活动的的第5天</h2>\n<h2 id=\"设计模式\">设计模式</h2>\n<p>设计模式提供一种讨论软件设计的公共语言，使得熟练设计者的设计经验可以被初学者和其他设计者掌握。简单来说设计模式就是一门架构，用于解决不同问题的灵活设计思想。</p>\n<h2 id=\"单例模式\">单例模式</h2>\n<p>单例模式是十分经典的设计模式之一，其设计思想被许多应用所借鉴，之前的前端老大哥Jquery就借用了单例模式实现便捷dom操作</p>\n<p><strong>介绍</strong></p>\n<p>所有相关的操作基于一个实例对象完成</p>\n<p><strong>优点</strong></p>\n<ul>\n<li>节约内存单元</li>\n<li>控制实例对象数量</li>\n<li>严格限制了对对象的操作</li>\n</ul>\n<p><strong>Js模拟单例模式</strong></p>\n<pre><code>class Con {\n  constructor() {\n    if(!Con.obj) Con.obj = this\n    return Con.obj\n  }\n  //静态成员变量保存一份实例对象\n  static obj = null\n}\nlet c1 = new Con()\nlet c2 = new Con()\nconsole.log(c1===c2)//true\n</code></pre>\n<p><strong>常见的应用</strong></p>\n<ul>\n<li>Jquery的全局对象 $</li>\n<li>Vuex的全局挂载对象</li>\n<li>等等</li>\n</ul>\n<h2 id=\"发布订阅模式\">发布订阅模式</h2>\n<p><strong>定义</strong></p>\n<p>在订阅对象发生改变时通知对象触发消息通知</p>\n<p><strong>应用场景</strong></p>\n<p>发布订阅在前端应用是十分广泛的例子，例如Vuex的设计，Redux的设计，vue的数据双向绑定</p>\n<p><strong>优点</strong></p>\n<ul>\n<li>观察者和被观察者是抽象耦合的。</li>\n<li>可以很好的完成消息的订阅发布集中管理。</li>\n</ul>\n<p><strong>JavaScript模拟实现</strong></p>\n<pre><code>class OrderSub{\n  constructor(){\n    this.events = {};\n  }\n  on(event,callback){\n    //1.查找是否存在事件，\n    if(!this.events[event]){\n      this.events[event] = [];\n    }\n    this.events[event].push(callback);\n  }\n  sub(event,...params){\n    let callbacks = this.events[event];\n    if(callbacks){\n      for(let key of callbacks){\n        key(...params);\n      }\n    }\n    \n  }\n  del(event){\n    if(this.events[event]){\n      delete this.events[event];\n      \n    }\n  }\n  delAll(){\n    delete this.events;\n  }\n}\n</code></pre>\n<h2 id=\"总结\">总结</h2>\n<p>通过对设计模式的学习，我更加深刻的认识到了设计模式对编程思维的提升和作用，总体来说，设计模式是十分灵活的，不可以将其强硬的应用在某个方向上，应该结合具体的例子和场景，选择合适的设计模式可以做到事半功倍。以上是我在本节课的学习总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661166676156.jpg",
    date: 1661166680278,
    editor: "markdown",
    likes: 0,
    postId: "6031421661166654510",
    status: 1,
    tag: ["前端"],
    title: "设计模式",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第1天，点击查看活动详情 1. useState基本用法 useState是react的响应式数据用法，其用法如下 /* 数组的第一",
    collection: [],
    comments: 0,
    content: "携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第1天，点击查看活动详情 1. useState基本用法 useState是react的响应式数据用法，其用法如下 /* 数组的第一",
    contentHTML: "<p>携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第1天，<a href=\"https://juejin.cn/post/7123120819437322247\" title=\"https://juejin.cn/post/7123120819437322247\">点击查看活动详情</a></p>\n<h2 id=\"1-usestate基本用法\">1. useState基本用法</h2>\n<p>useState是react的响应式数据用法，其用法如下</p>\n<pre><code>/*\n数组的第一个参数num是基础数据\n数组的第二个参数setNum表用于修改数据\n*/\nconst [num,setNum] = useState(0)\n</code></pre>\n<h2 id=\"2-usestate修改基础数据\">2. useState修改基础数据</h2>\n<p>当点击修改时，数据自动+1</p>\n<pre><code>import {useState} from &quot;react&quot;\nfunction StateTest () {\n  let [num,setNum] = useState(0)\n  return (\n    &lt;div&gt;\n      &lt;div&gt;{num}&lt;/div&gt;\n      &lt;div onClick={()=&gt;setNum(num+1)}&gt;修改Num&lt;/div&gt;\n    &lt;/div&gt;\n  )\n}\n</code></pre>\n<h3 id=\"3-usestate修改对象数据（数组和对象）\">3. useState修改对象数据（数组和对象）</h3>\n<p>许多同学在初次使用useState修改数组或者对象数据时，发现页面根本不更新。如下所示</p>\n<p><strong>错误示例</strong></p>\n<pre><code>import {useState} from &quot;react&quot;\nfunction StateTest () {\n  let [info,setInfo] = useState({\n    name:&quot;xiaoming&quot;\n  })\n\n  function changeInfo() {\n    info.name = &quot;xiaoli&quot;\n    setInfo(info)\n  }\n  return (\n    &lt;div&gt;\n      &lt;div&gt;{info.name}&lt;/div&gt;\n      &lt;div onClick={()=&gt;changeInfo}&gt;修改obj&lt;/div&gt;\n    &lt;/div&gt;\n  )\n}\n</code></pre>\n<p> 页面初次显示xiaoming。当我们点击修改obj时，无论咋样，页面始终无法更新。</p>\n<p> <strong>原因：</strong> useState的数据更新必须是拷贝一份原来的数据（深拷贝），不能是在原来的对象数据上直接操作，页面根据上一层的state判断当前state是否引用地址相等，如果相等。那么页面不会更新。</p>\n<p> <strong>正确示例</strong></p>\n<p> 无论是对象还是数组，我们都可以先使用...运算符完成深拷贝</p>\n<pre><code> function StateTest () {\n  let [info,setInfo] = useState({\n    name:&quot;xiaoming&quot;\n  })\n\n  function changeInfo() {\n    //1.先深拷贝一份对象\n    let obj = {...info}\n    //2.修改数据\n    obj.name = &quot;xiaogang&quot;\n    //3.触发更新\n    setInfo(obj)\n  }\n  return (\n    &lt;div&gt;\n      &lt;div&gt;{info.name}&lt;/div&gt;\n      &lt;div onClick={()=&gt;changeInfo()}&gt;修改obj&lt;/div&gt;\n    &lt;/div&gt;\n  )\n}\n\n页面先显示xiaoming,点击修改obj,页面改变为xiaogang\n</code></pre>\n<h2 id=\"4usestate批量更新问题\">4.useState批量更新问题</h2>\n<p>看下面的例子，如果我点击按钮，最后界面会显示? 是4还是2还是其它？</p>\n<pre><code>import {useState} from &quot;react&quot;\nfunction StateTest () {\n  let [num,setNum] = useState(1)\n\n  function changeNum() {\n    setNum(num+1)\n    setNum(num+1)\n    setNum(num+1)\n  }\n  return (\n    &lt;div&gt;\n      &lt;div&gt;{num}&lt;/div&gt;\n      &lt;div onClick={()=&gt;changeNum()}&gt;修改num&lt;/div&gt;\n    &lt;/div&gt;\n  )\n}\n\n页面初始显示1，当点击后页面显示2\n</code></pre>\n<p>  <strong>原因</strong> useState的对同一个数据进行多次更新会出现合并现象，默认会选择最后一次数据进行更新。</p>\n<p> <strong>如何解决批量更新？</strong></p>\n<p> useState的数组第二个参数可以传递一个函数，使用改函数可以完成同一份数据的批量更新</p>\n<pre><code>import {useState} from &quot;react&quot;\nfunction StateTest () {\n  let [num,setNum] = useState(1)\n\n  function changeNum() {\n    setNum((num)=&gt;num+1)\n    setNum((num)=&gt;num+1)\n    setNum((num)=&gt;num+1)\n  }\n  return (\n    &lt;div&gt;\n      &lt;div&gt;{num}&lt;/div&gt;\n      &lt;div onClick={()=&gt;changeNum()}&gt;修改num&lt;/div&gt;\n    &lt;/div&gt;\n  )\n}\nexport default  StateTest\n\n页面初始是1，当点击修改时，数据更改为4\n</code></pre>\n<h2 id=\"总结\">总结</h2>\n<p> 感谢各位观众老爷的支持，如果您感觉满意，可以点赞，评论，转发支持下，您的支持就是我创作的动力。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661166628848.jpg",
    date: 1661166630077,
    editor: "markdown",
    likes: 0,
    postId: "485111661166605411",
    status: 1,
    tag: ["前端"],
    title: "useState",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第1天 1.什么是前端 前端主要是用于解决界面人机交互问题而产生的。其包含的内容可以概括为 解决人机GUI界面问题 支持跨终端 PC/移动端 客户端/小程序",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第1天 1.什么是前端 前端主要是用于解决界面人机交互问题而产生的。其包含的内容可以概括为 解决人机GUI界面问题 支持跨终端 PC/移动端 客户端/小程序",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第1天\"><strong>这是我参与「第四届青训营 」笔记创作活动的的第1天</strong></h2>\n<h2 id=\"1什么是前端\">1.什么是前端</h2>\n<p>前端主要是用于解决界面人机交互问题而产生的。其包含的内容可以概括为</p>\n<ul>\n<li><p>解决人机GUI界面问题</p>\n</li>\n<li><p>支持跨终端</p>\n<ul>\n<li>PC/移动端</li>\n<li>客户端/小程序</li>\n<li>VR/AR等</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"2前端技术栈\">2.前端技术栈</h2>\n<p>前端技术栈可以简单概括为三部分，html,css,javascript三部分，其中html负责网页的基本内容和结构\n而css负责处理网页的样式，javascript处理网页的逻辑行为和用户交互等。</p>\n<p><img src=\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ef87c52930d4069915141f7f7b024c9~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"3前端应该关注的方面\">3.前端应该关注的方面</h2>\n<p>作为前端工程师，我们应该重点关注一下几方面内容和知识</p>\n<ul>\n<li>美观</li>\n<li>安全</li>\n<li>兼容</li>\n<li>功能</li>\n<li>性能</li>\n<li>体验</li>\n<li>无障碍</li>\n</ul>\n<h2 id=\"4前端的边界\">4.前端的边界</h2>\n<ul>\n<li>node</li>\n<li>electron</li>\n<li>react native</li>\n<li>web rtc</li>\n<li>webGL</li>\n<li>WebAssembly</li>\n</ul>\n<h2 id=\"5什么是html\">5.什么是HTML</h2>\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n  &lt;meta charset=&quot;UTF-8&quot;&gt;\n  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;\n  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n  &lt;title&gt;Document&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n<p>html由heade,body等大结构组成，内部可以嵌套其它子元素。html的组成可以用dom树表示，任意的页面都可以用dom树完整的表示出来。</p>\n<p><img src=\"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60c377014229462ead3c51a56fe995b8~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"6html语法注意\">6.HTML语法注意</h2>\n<ul>\n<li>标签和属性不推荐大小写，使用小写</li>\n<li>空标签可以不闭合，如input meta</li>\n<li>属性值推荐使用双引号</li>\n<li>某些属性值可以省略，如readonly,meta等</li>\n</ul>\n<h2 id=\"7html划分页面结构\">7.HTML划分页面结构</h2>\n<p>html在描述页面前，我们可以按照页面的基本结构对页面进行简单的划分，这样后续可以简化我们的设计过程\n常见的划分结构包括，上中下结构。</p>\n<p><img src=\"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/176fb41140dd4d3ea35df0a010fae6e2~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"8语义化\">8.语义化</h2>\n<p><strong>什么是语义化</strong>\n语义化就是标签元素，属性和属性值都具备特定的含义。例如ol表示无序的列表，而ul表示有序的列表。</p>\n<p><strong>语义化的好处</strong></p>\n<ul>\n<li>提高代码可读性</li>\n<li>提高代码可维护性</li>\n<li>搜索引擎优化</li>\n<li>提升阅读无障碍体验</li>\n</ul>\n<p><strong>如何做到语义化</strong></p>\n<ul>\n<li>了解每个标签的属性和含义</li>\n<li>思考每个标签的应用场景</li>\n<li>不适用可视化工具生成代码</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我对前端与HTML课程的理解。谢谢</p>\n",
    coverUrl: "",
    date: 1661160402798,
    editor: "markdown",
    likes: 0,
    postId: "786991661160365612",
    status: 1,
    tag: ["前端"],
    title: "HTML",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
  {
    abstract: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    collection: [],
    comments: 0,
    content: "这是我参与「第四届青训营 」笔记创作活动的的第2天 1.css介绍 css是专门用于对页面元素的样式进行设计，通常包含了 设置字体和颜色 设置位置和大小 添加动画效果 2.css的使用方式 外链  <",
    contentHTML: "<h2 id=\"这是我参与「第四届青训营-」笔记创作活动的的第2天\">这是我参与「第四届青训营 」笔记创作活动的的第2天</h2>\n<h2 id=\"1css介绍\">1.css介绍</h2>\n<p>css是专门用于对页面元素的样式进行设计，通常包含了</p>\n<ul>\n<li>设置字体和颜色</li>\n<li>设置位置和大小</li>\n<li>添加动画效果</li>\n</ul>\n<h2 id=\"2css的使用方式\">2.css的使用方式</h2>\n<ul>\n<li><p>外链</p>\n<pre><code>  &lt;link rel=&#39;stylesheet&#39; href=&#39;./style/index.css&#39;&gt;&lt;/link&gt;\n</code></pre>\n</li>\n<li><p>内联</p>\n<pre><code>  &lt;style&gt;\n      *{\n          margin:0 auto;\n      }\n  &lt;/style&gt;\n</code></pre>\n</li>\n<li><p>嵌入</p>\n<pre><code>  &lt;div style=&#39;margin:0 auto&#39;&gt;&lt;/div&gt;\n</code></pre>\n</li>\n</ul>\n<h2 id=\"3css工作流程\">3.css工作流程</h2>\n<p>css的工作流程：页面加载html，并解析html.同时执行加载css的过程。解析的css和解析的html合并成为cssom树，渲染到页面展示。</p>\n<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7b34ee04604ad5816807f931684924~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<h2 id=\"4css选择器\">4.css选择器</h2>\n<p><strong>作用：找出页面额元素，给其添加对应的样式</strong></p>\n<p><strong>分类</strong></p>\n<ul>\n<li>通配选择器：部分或者全部选中</li>\n<li>标签选择器：直接操作标签</li>\n<li>ID选择器：注意全局唯一性</li>\n<li>类选择器：可以重复</li>\n<li>属性选择器</li>\n</ul>\n<p><strong>伪类</strong>\n伪类就是不存在的类，伪类用来描述一个元素的特殊状态。它不属于元素标签的定位。</p>\n<p>通过伪类，我们可以实现许多额外的特殊功能，常见的有如下几类</p>\n<ul>\n<li>清除浮动</li>\n<li>实现BFC隔离</li>\n<li>实现特殊效果如hover等</li>\n</ul>\n<h2 id=\"5选择器的继承\">5.选择器的继承</h2>\n<p>css的选择器是默认会有继承属性的。我们为一个元素设置的样式，同时也会应用到它的后代元素上，继承是只发生在祖先后代之间的。</p>\n<h2 id=\"6css尺寸相关\">6.css尺寸相关</h2>\n<p><img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44b977725f704d0d9f1df07793ca34ae~tplv-k3u1fbpfcp-watermark.image?\" alt=\"image.png\"></p>\n<p><strong>width</strong>\nwidth是盒子指定的宽度，它可以由长度，百分比或者auto决定。其中设置百分比是相对于父元素容器的宽度决定</p>\n<p><strong>height</strong>\nheight是盒子指定的高度，它可以由高度，百分比和auto决定，仅仅当容器有高度时，设置百分比才会生效。并且是相对于父元素的高度决定的。</p>\n<p><strong>padding</strong>\npadding是盒子的内边距，其中设置百分比是相对于容器的宽度。</p>\n<p><strong>margin</strong>\nmargin是盒子的外边距，其中设置百分比是相对于盒子的宽度</p>\n<p><strong>border</strong>\nborder是盒子的边框，其中可以设置四个边框的颜色和尺寸。</p>\n<h2 id=\"7position属性\">7.position属性</h2>\n<ul>\n<li>static:默认属性，非定位元素</li>\n<li>relative:相对于自己定位，不脱离文档流</li>\n<li>absolute:相对于非父亲static元素定位，脱离文档流</li>\n<li>fixed:相对于视口绝对定位</li>\n</ul>\n<h2 id=\"总结\">总结</h2>\n<p>以上是我的css课程学习的总结。</p>\n",
    coverUrl: "http://127.0.0.1:9999/1661160336124.jpg",
    date: 1661160337133,
    editor: "markdown",
    likes: 0,
    postId: "4644141661160320513",
    status: 1,
    tag: ["前端"],
    title: "css",
    type: "前端",
    username: 123456,
    watched: 0
  },
]
const editorModule = {
    state: {
      post: get("post") || pages,
      draft: get("draft") || [],
      show:[],
      size:5,
      pageNum:0,
      search:[],
      activeDraft: undefined,
    },
    mutations: {
        ADD_POST: (state, newPost) => {
          //1.获取文章
          let posts = state.post;
          console.log(posts);
          posts.unshift(newPost)
          //2.保存
          set("post",posts)
        },
        
        ADD_DRAFT: (state, obj) => {
          //1.获取文章
          let drafts = state.draft;
          // 修改内容
          console.log(drafts);
          let flag = false;
          let newDrafts = []
          for (let item of drafts) {
            if (item.postId == obj.postId) {
              flag = true;
              newDrafts.push(obj)
            } else {
              newDrafts.push(item)
            }
          }
          if (flag == false) {
            newDrafts.unshift(obj)
          }
          // drafts.unshift(obj)
          //2.保存
          // set("draft",drafts)
          set("draft",newDrafts)
            
        },

        //获取某一条文章
        GET_POST(state,pid){
          let posts = state.post
          if(posts.length) {
            for(let i=0;i<posts.length;i++) {
              if(posts[i].postId==pid) return posts[i]
            }
            return null
          }
          return null
        },
        GET_DRAFT_ITEM(state, pid) {
          let drafts = state.draft
          if(drafts.length) {
            for(let i=0;i<drafts.length;i++) {
              if(drafts[i].postId==pid) {
                state.activeDraft = drafts[i];
                // return drafts[i]
              }
            }
            return null
          }
          return null
            // state.draft = get("draft");
            // console.log(state.draft['draft' + pid]);
            // return state.draft['draft' + pid]
        },
        REFRESH_ARTICLE_DATA(state) {
            state.post = get("post");
            state.draft = get("draft");
        },

        //分页获取数据
        GET_NUM_LIST(state,payload) {
          let res = [...state.show]
          res.push(...state.post.slice(state.size*state.pageNum,state.size*state.pageNum+state.size))
          state.show = res
          console.log(res)
          state.pageNum++
        },

        //搜索的数据
        SEARCH(state,search) {
          let res = []
          state.post.forEach(element => {
            if(element.title.includes(search) || element.content.includes(search)) res.push(element)
          });
          state.search = res
        },

        //当前的文章添加评论内容,数组
        COMMENT(state,payload){
          let res = [...state.post]
          res.forEach(item=>{
            if(item.postId==payload.pid) {
              item.comments++
              if(item.commentList) item.commentList.unshift(payload.desc)
              else item.commentList = [payload.desc]
            }
          })
          state.post = res
          set("post",res)
        },

        //收藏
        CANG(state,pid){
          let res = [...state.post]
          res.forEach(item=>{
            if(item.postId==pid) {
              if(item.cang) item.cang = false
              else item.cang = true
            }
          })
          state.post = res
          set("post",res)
        },
        //喜欢
        LOVE(state,pid){
          let res = [...state.post]
          res.forEach(item=>{
            if(item.postId==pid) {
              if(item.love) {
                item.love = false
                item.likes--
              }else {
                item.love = true
                item.likes++
              }
            
            }
          })
          state.post = res
          set("post",res)
        },
    },
    actions: {
    }

}

export default editorModule