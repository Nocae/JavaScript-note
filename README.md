# JAVASCRIPT

## DOM

文档对象模型（DOM），是一个应用编程接口（API），用于在HTML中使用扩展的XML

>DOM将整个页面抽象为一组分层节点，HTML或XML页面的每个组成部分都是一种节点，包含不同的数据
>DOM通过创建表示文档的树，让开发者随心所欲控制网页的内容和结构
>使用DOM API可以轻松删除、添加、替换、修改模块

1.DOM级别

DOM Level 1 成为W3C的推荐标准。规范由两个模块组成：DOM Core 和 DOM HTML  
前者提供了一种映射XML文档，从而方便访问和操作文档任意部分的方式  
后者扩展了前者，并增加了特定HTML的对象和方法

## BOM

IE3和Netscape Navigator 3 提供了浏览器对象模型（BOM）API，用于支持访问和操作浏览器的窗口。  
BOM主要针对浏览器窗口和子窗口

人们通常把任何特定于浏览器的扩展都归在BOM范畴，如：

- 弹出新浏览器窗口的能力；
- 移动、缩放和关闭浏览器窗口的能力；
- navigator对象，提供关于浏览器的详尽信息；
- location对象，提供浏览器加载页面的详尽信息；
- screen对象，提供关于用户屏幕分辨率的详尽信息；
- performance对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
- 对cookie的支持；
- 其他自定义对象，如 XMLHttpRequest和IE的ActiveXObject。

## HTML中的JAvaScript

### &lt;script&gt;元素

将javascript插入HTML的主要方法是使用&lt;script&gt;元素

&lt;script&gt;元素中有八个属性：

- async：可选。表示立即开始下载脚本，只对外部脚本有效
- charset：可选。使用src属性指定的代码字符集
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置
- defer：可选。表示脚本可以延迟到文档完全被解析和显示后再执行，只对外部脚本有效
- interity：可选。允许对比接收到的资源和指定的加密签名以验证子资源完整性
- language： 废弃。表示代码块中的脚本语言
- src：可选。表示包含要执行的代码的外部文件
- type：可选。 代替language，表示代码块中脚本语言的内容类型（同称MIME类型），如果这个值是nodule则代码会被当成ES6模块，而且只有这时候代码中才能出现import和export关键字

### 标签位置

把所有的JavaScript文件都放在&lt;head&gt;中，意味着要把所有的JavaScript都下载、解析和解释完成后，才开始渲染页面  
对于需要很多JavaScript的页面，这会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白  
现代Web应用程序通常将所有JavaScript引用放在&lt;body&gt;元素中的页面内容后面

### 推迟执行脚本

HTML4.01为&lt;script&gt;定义了一个叫defer的属性  
设置defer属性，相当于告诉浏览器立即下载，但延迟执行

### 异步执行脚本

HTML5为&lt;script&gt;定义了async属性，从处理方式看，async属性与defer属性类似  
它们两者都只适用于外部脚本，都会告诉浏览器立即开始下载  
与defer不同的是标记为async的脚本并不保证能按照它们出现的次序执行

详见课本15页，嘤嘤嘤~~~

### 动态加载脚本

因为javascript可以使用DOM API，所以通过向DOM中动态添加script元素同样可以加载指定的脚本  
只要创建一个script元素并将其添加到DOM中即可

详见课本15页，嘤嘤嘤~~~

### 文档模式

最初的文档模式有两种：混杂模式（quirks mode），标准模式（standards mode）  
后来出现了第三种文档模式：准标准模式（almost standards mode），主要区别在于如何对待图片元素周围的空白  

### &lt;noscript&gt;元素

对于禁用script的浏览器来说，这个元素依然有它的用处  

>&lt;noscript&gt;元素可以包含任何可以出现在&lt;body&gt;中的HTML元素，&lt;script&gt;除外
在下列两种情况下，浏览器将会显示包含在&lt;script&gt;中的内容：
- 浏览器不支持脚本；
- 浏览器对脚本的支持被关闭；

>简单来说就是浏览器不可使用脚本后将显示&lt;noscript&gt;元素内内容

## 语言基础

### 区分大小写

>ECMAScript中的一切都区分大小写，无论是变量、函数名、还是操作符，都区分大小写
>typeof不能作为函数名，因为它是关键字，但是Typeof是一个完全有效的函数名

### 标识符

>**就是变量、函数、属性或函数参数的名称**

标识符可以由一个或多个下列字符组成：
- 第一个字符必须是一个字母、下划线或美元符号；
- 剩下的其它字符可以是字母、下划线、美元符号或数字；

标识符中的字母可以是扩展ASCII(Extended ASCII)中的字母，也可以是Unicode的字母字符

>按照惯例，ECMAScript标识符使用驼峰大小写形式，即**第一个单词的首字母小写**，**后面的每个单词的首字母大写**

***关键字、保留字、true、false、null不能作为标识符***

### 注释

ECMAScript采用C语音风格的注释，包括单行注释和块注释  
单行注释以两个斜杠字符开头

```js
// 单行注释
```

块注释以一个斜杠和一个星号（/\*）开头，以它们的反相组合（\*/）

```js
/* 这是多行
注释 */
```

### 严格模式

ECMAScript5增加了严格模式（strict mode）概念  

严格模式是一种不同的JavaScript解析和执行模型

ECMAScript3的一些不规范写法在这里会被处理，对于不安全的活动将抛出错误

要启动严格模式，在脚本开头加上一行：

```js
"use strict"
```

虽然看起来像个没有赋值给任何变量的字符串，但其实是一个预处理**指令**

任何支持js引擎看到它都会切换到严格模式，这种语法的目的是不破坏ECMAScript 3 语法

也可单独指定一个函数在严格模式下执行，只要把预处理指令放到函数体开头

```js
function doSomething(){
    "use strict";
    // 函数体
}
```

### 语句

ECMAScript 中的语句以分号结尾，省略号意味着由解析器确定语句在哪里结尾

```js
let sum = a + b // 没有分号也有效，但不推荐
let diff = a - b; // 加分号有效，推荐
```

- 即使语句末尾的分号不是必须的，也应该加上。
- 加分号可以有助于方式省略造成的问题，如避免输入内容不完整
- 有助于开发着通过删除空行来压缩代码（如果没有分号，只删除空行，会导致语法错误）
- 有助于在某些情况下提升性能，因为解析器会尝试在合适的位置补上分号纠正语法错误

控制语句只在执行多条语句时要求必须有代码块，不过最佳实践是始终在控制语句中使用代码块

即使要执行的只有一条语句

在控制语句中使用代码块可以让内容更清晰，需要修改代码时也可以减少出错的可能性

```js
if(test)
    console.log(test);
// 有效，容易导致错误，应该避免

if(test){
    console.log(test);
}
// 推荐
```

### 关键字与保留字

ECMA-262描述了一组保留的关键字，关键字有特殊的用途  
保留的关键字不能用作标识符或属性名

|||||
|:-:|:-:|:-:|:-:|
|break|do|in|typeof|
|case|else|instanceof|var|
|catch|export|new|void|
|class|extends|return|while|
|const|finally|super|with|
|continue|for|switch|yield|
|debugger|function|this||
|default|if|throw||
|delete|import|try||


规范中也描述了一组**未来的保留字**，同样**不能用作标识符或属性名**

始终保留:

enum

严格模式下保留:

implements  package     public
interface   protected   static
let         private


模块代码中保留:

await

这些词汇不能用作标识符，但现在可以用作对象的属性名  
最好不要使用关键字和保留字作为标识符和属性名，确保兼容过去和未来的ECMAScript版本

### 变量

#### var关键字

可以用它保存任何类型的值（不初始化的情况下，变量会保存一个特殊值undefined）  
不仅可以改变保存的值，也可以改变值的类型。合法，但不推荐（可以有，但没必要）

1. var声明作用域

使用var操作符定义的变量会成为包含它的函数的局部变量  
如：使用var在一个函数内部定义一个变量，意味着该变量在函数退出是被销毁

```js
function test(){
    var message = "hi";
}
test();
console.log(message); // 出错
```

在函数内定义变量是省略var操作符，可以创建一个全局变量

```js
function test(){
    message = "hi";
}
test();
console.log(message); // "hi"
```

如果需要定义多个变量，可以在一条语句中用逗号分隔每个变量  
在严格模式下，不能定义名为eval和arguments的变量，否则会导致语法错误

2. var声明提升

就是把所有变量声明都拉到函数作用域的顶部  
反复多次使用var声明同一个变量也没问题

#### let声明

let跟var的作用差不多，但有着非常重要的区别  
最明显的区别就是，let声明的范围是块作用域，var声明的是范围是函数作用域

```js
if(true){
    let age = 26;
    console.log(age); // 26
}
console.log(age); // ReferenceError:age 没有定义
```

age变量之所以不能在if块外部被引用，因为它的作用域仅限于该块内部  
块作用域是函数作用域的自己，因此适用于var的作用域限制同样也适用于let

>let也不允许同一个块级作用域中出现冗余声明，会报错

```js
var name;
var name;

let age;
let age;  // SyntaxError;标识符age已经声明过了
```

js引擎会记录用于变量声明的标识符及其所在的块作用域，因此嵌套使用相同的标识符不会报错，这是因为同一个块中没有重复声明

>对声明冗余报错不会因混用let和var而受影响
>这两个关键字声明的并不是不同类型的变量，他们只是指出变量在相关作用域如何存在

```js
var name;
let name; // SyntaxError: Identifier 'name' has already been declared

let age;
var age; // SyntaxError: Identifier 'age' has already been declared
```

1. 暂时性死区

>let和var的另一个重要区别就是let声明的变量不会在作用域中被提升

```js
console.log(age);

let age = 22; // ReferenceError: Cannot access 'age' before initialization
```

解析代码时，js引擎也会注意到后面出现的let声明，只不过在此之前不能以任何方式来引用未声明的变量

- let声明之前的执行瞬间被称为“暂时性死区”
- 此阶段引用任何后面才声明的变量都会抛出ReferenceError

2. 全局声明

与var关键字不同，使用let在全局作用域中声明的变量**不会成为window对象的属性**（var则会）

```js
var name = 'matt';
console.log(window.name); // 'matt'

let age = 26;
console.log(window.age); // undefined
```

let声明仍然是在全局作用域中发生的，相应变量会在页面的声明周期内存续  
为了避免SyntaxError，**必须确保页面不会重复声明同一变量**

3. 条件声明

使用var声明变量时，由于声明会被提升，js引擎会自动将多余的声明在作用域顶部合并为一个声明  
因为let的作用域是块，所以不可能检查前面是否已经使用let声明过的同名变量，同时不可能在没有声明的情况下声明它

```html
    <script>
        var name = 'nicho'
        let age = 21;

        console.log(name);
        console.log(age);
    </script>

    <script>
        // 假设脚本不确定页面中是否已经声明了同名变量
        // 那它可以假设还没有声明过

        var name = 'natt';
        // 这里没问题，因为可以被作为一个提升声明来处理
        // 不需要检查之前是否声明过同名变量
        console.log(name);

        let age = 22; // 报错Uncaught SyntaxError: Identifier 'age' has already been declared
    </script>
```

使用try/catch语句或typeof操作符也不能解决，因为条件块中let声明的作用域仅限于该块

>为此对于let这个新的ES6声明关键字，不能依赖条件声明模式

4. for循环中的let声明

在let声明之前，for循环定义的迭代变量会渗透到循环体外部  
改成let后这个问题就消失了，迭代变量的作用域仅限于for循环内部

```js
for (let index = 0; index < 5; index++) {}

console.log(index); // ReferenceError: index is not defined
```

```js
for (let index = 0; index < 5; index++) {
    setTimeout(()=>console.log(index),0)
}

// 输出
0
1
2
3
4
```

使用let声明迭代变量时，js引擎会在后台为每个迭代循环声明一个新的迭代变量  
每个setTimeout引用的都是不同的变量实例  
这种每次迭代声明一个独立变量实例的行为适用于所有风格的for、for-in、for-of循环


#### const声明

const与let基本相同，唯一一个重要区别就是用它声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行错误

```js
const age = 26;
age = 36; // TypeError: Assignment to constant variable. 给常量赋值报错

// const也不允许重复声明
const name = '123';
const name = '234'; // SyntaxError: Identifier 'name' has already been declared

// const 声明的作用域也是块
const name = 'matt'

if(true){
    const name = 'nich'
}

console.log(name); // matt
```

const 声明的限制只适用于它**指向的变量的引用**  
如果const引用的是一个对象，那修改这个对象内部的属性并不违反const限制

js引擎会为for循环中let声明分别创建独立的变量实例，虽然const变量跟 let变量很相似  
但是不能用const来声明迭代变量（迭代变量会自增）

>想用const声明一个不会修改的for循环，也是可以的
>每次迭代只是创建一个新变量，对于for-of和for-in很有意义

```js
let i = 0;

for (const j = 7; i < 5; i++){
    console.log(j);
}
// 7 7 7 7 7

for (const key in {a: 1, b: 2}){
    console.log(key);
}
// a,b

for (const value of [1,2,3,4,5]){
    console.log(value);
}
// 1,2,3,4,5
```

#### 声明风格及最佳实践

- 不使用var；
- const优先，let次之；

### 数据类型

>ECMAScript有6种简单数据类型（也称为**原始类型**）：Undefined、Null、Boolean、Number、String、Symbol
>Symbol（符号）是ECMAScript6新增的
>还有一种复杂数据类型叫做Object（对象），它是一种无序名值对的集合

#### typeof操作符

因为ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型  
typeof操作符就是为此而生的（检测并以字符串返回数据类型）

- "undefined"表示值未定义；
- "boolean"表示值为布尔值；
- "string"表示值为字符串；
- "number"表示值为数值；
- "object"表示值为对象（而不是函数）或null；
- "function"表示值为函数；
- "symbol"表示值为符号；

```js
let message = "some string";

console.log(typeof message); // string
console.log(typeof(message)); // string
console.log(typeof 95); // number
console.log(typeof null); // object
```

- 调用typeof null返回object，是因为特殊值null被认为是一个空对象的引用
- 函数在ECMAScript中被认为是对象，并不是数据类型，可是函数也有自己特殊的属性，有必要通过typeof来区分函数和其他对象

#### undefined类型

undefined类型只有一个值，就是特殊值undefined  
当var或let声明变量没有初始化时，就相当于给变量赋予了undefined值

```js
let msg;

console.log(msg === undefined); // true
```

等同于 let msg = undefined; 但这是不必要的，默认情况下，任何未经初始化的变量都会取得undefined值

>增加这个特殊值的目的就是正式明确空对象指针（null）和未初始化变量的区别

包含undefined值得变量跟未定义变量是有区别的

```js
let msg;

console.log(msg); // undefined
console.log(age); // ReferenceError: age is not defined
```

对未声明的变量，只能执行一个有用的操作，就是对它调用typeof，返回的结果是undefined  
对未声明的变量调用delete也不会报错，但没什么用，实际上在严格模式会抛出错误

>建议在声明变量的同时进行初始化，当typeof返回undefined时，就会知道是因为给定的变量尚未声明，而不是声明了但未初始化

#### Null类型

Null类型只有一个值，即特殊值null  
逻辑上讲，null表示一个空对象指针，所以给typeof传null会返回"object"


>定义将来要保存对象值的变量时，建议使用null初始化，不要使用其他值
>这样只要检查这个变量的值是不是null就可以知道这个变量是否在后来被被重新赋予了一个对象的引用

```js
let car  = null;

if (car != null){
    // car 是一个对象的引用
}
```

undefined 值是由null 值派生而来的，因此ECMA-262将他们定义为表面上相等

```js
console.log(undefined == null); // true
```

>即使null和undefined有关系，用途也是完全不一样的

>任何时候只要变量要保存对象，而当时有没有那个对象可保存，就要用null来填充该变量
>这样就保持null是空对象指针的语义，进一步将其与undefined区分开来

#### Boolean类型

Boolean类型是ECMAScript中使用的最频繁的类型之一，两个字面值：true和false

这两个布尔值不同于数值，因此true不等于1，false不等于0







# 转义字符

|显示结果|描述|实体名称|实体编号|
|---|---|---|---|
| |空格|\&nbsp;|\&#160;|
|<|小于号|\&lt;|\&#60;|
|>|大于号|\&gt;|\&#62;|
|&|和号|\&amp;|\&#38;|
|“|引号|\&quot;|\&#34;|
|‘|撇号|\&apos;(IE不支持)|\&#39;|
