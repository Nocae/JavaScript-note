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

布尔值字面量true和false区分大小写，所以True和False（及其他大小混写形式）是有效的标识符，但不是布尔值

>虽然布尔值只有两个，但其他EMCAScript类型的值都有相应布尔值的等价形式
>将一个其他类型的值转换为布尔值，可以调用特定的Boolean()转型函数：

```js
let msg = 'Hello World!'
let msgAsBoolean = Boolean(msg);

console.log(msgAsBoolean); // true
```

Boolean()转型函数可以在任意类型的数据上调用，而且始终返回一个布尔值  
什么值能转换为true或false的规则取决于数据类型和实际的值

|数据类型|转换为true的值|转换为false的值|
|:-:|:-:|:-:|
|Boolean|true|false|
|String|非空字符串|""(空字符串)|
|Number|非零数值（包括无穷值）|0、NaN|
|Object|任意对象|null|
|Undefined|N/A（不存在）|undefined|

#### Number类型

Number类型使用IEEE754格式表示整数和浮点数、不同的数值类型相应的也有不同的数值字面量格式

整数也可以用八进制或十六进制字面量表示  

如果字面量中包含的数值超出了应有的范围，就会忽略前缀的零，后面的数字序列会被当成十进制数

```js
let octalNum1 = 070;
let octalNum2 = 079;
let octalNum3 = 08;

console.log(octalNum1); // 八进制56
console.log(octalNum2); // 无效的八进制，当成79
console.log(octalNum3); // 无效的八进制，当成8
```

八进制字面量在严格模式下是无效的，导致JavaScript引擎抛出语法错误

创建十六进制字面量，必须让真正的数值前缀0x（区分大小写），然后是十六进制数字，十六进制数字钟的字母大小写均可

```js
let hexNum1 = 0xA;
let hexNum2 = 0x1f;

console.log(hexNum1); // 十六进制10
console.log(hexNum2); // 十六进制31
```

1. 浮点值

定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字

```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1;  // 有效，但不推荐
```

>因为存储浮点值使用的内存空间是存储整数值得两倍，所以ECMAScript总是想发设发把值转换为整数
>小数点后面没有数字的情况下，数值就会变成整数
>如果数值本身就是整数，只是小数点后面跟着0，也会被转换为整数

```js
let floatNum1 = 1.; // 小数点后面没有数字，当成整数1处理
let floatNum2 = 1.0; // 小数点后面是零，当成整数1处理
```

对于非常大或非常小的数值，浮点值可以用科学计数法来表示  
ECMAScript中科学计数法的格式要求是一个数值（整数或浮点数）后跟一个大写或小写的字母e，再加上一个要乘的10的多少次幂

```js
let floatNum = 3.123e7; // 等于31230000
```

浮点值的精确度最高可达17位小数，在在算数计算中不如整数精确、如：0.1加0.2得到的不是0.3而是0.30000000000000004

这种微小的舍入错误，导致很难测试特定的浮点值  
之所以存在这种舍入错误，是因为使用了IEEE754数值，这种错误并非ECMAScript所独有，其他使用相同格式的语言也有这个问题

2. 值的范围

由于内存的限制，ECMAScript并不支持表示这个世界上的所有数值  
ECMAScript可以表示的最小数值保存在Number.MIN_VALUE中，这个值在多数浏览器中是5e-234;  
ECMAScript可以表示的最大数值保存在Number.MAX_VALUE，这个值在多数浏览器中是1.7976931348623157e+308

>如果某个计算得到的数值超过了js可以表示的范围，那么这个数值会被自动转换为一个特殊的Infinity（无穷）值。
>无法表示的负数以-Infinity（负无穷大）表示，无法表示的正数以Infinity（正无穷大）表示

要确定一个值是不是有限大，可以使用isFinite()函数

```js
const result = Number.MAX_VALUE + Number.MAX_VALUE;

console.log(isFinite(result)); // false
```

>使用Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY也可以获取负、正Infinity

3. NaN

有一个特殊的数值叫NaN，意味“不是数值”（not a number），用于表示本来要返回数值的操作失败了（而不是抛出错误）。

ECMAScript中，0、+0或-0相除会返回NaN

```js
console.log(0/0); // NaN
console.log(-0/+0); // NaN
```

如果分子是非0值，分母是有符号0或无符号0，会返回Infinity或-Infinity

```js
console.log(5/0); // Infinity
console.log(5/-0); // -Infinity
```

NaN有几个独特的属性

- 任何涉及NaN的操作始终返回NaN（如NaN/10），连续多步计算时这可能是个问题
- NaN不等于包括NaN在内的任何值

ECMAScript提供了一个isNaN()函数，该函数接收一个参数，可以是任意数据类型，判断是否“不是数值”  
把一个值传给isNaN()后，该函数会尝试把它转换为数值  
某些非数值的值可以直接转换成数值，如字符串"10"或布尔值  
任何不能转换成数值的值都会导致这个函数返回true

```js
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false，10是数值
console.log(isNaN("10")); // false，可以转换成数值10
console.log(isNaN("blue")); // true，不可以转换为数值
console.log(isNaN(true)); // false，可以转换为数值1
```

4.数制转换

有三个函数可以将非数值转换为数值：Number()、paiseInt()和parseFloat()

Number()是转型函数，可用于任何数据类型，后两个函数主要用来将字符串转换为数值

Number()函数基于如下规则执行转换

- 布尔值，true转换为1，false转换为0；

- 数值，直接返回；

- null，返回0；

- undefined，返回NaN；

- 字符串，应用以下规则：

    - 如果字符串包含数值字符，包括数值字符前面加、减号情况，则转换为一个十进制数值（转换后符号消失，同时忽略前面的零）；

	- 如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（忽略前面的零）；

    - 如果字符串包含有效的十六进制格式"0xf"，则会转换为与该十六进制对应的十进制整数值；

	- 如果是空字符串（不包含字符），则返回0；

    - 如果字符串包含除上述情况之外的其他字符，则返回NaN；

- 对象，调用valueOf()方法，并按照上述规则转换返回的值。如果结果是NaN，则调用toString()方法，再按照转换字符串的规则转换；

```js
console.log(Number("hello")); // NaN
console.log(Number("")); // 0
console.log(Number("000011")); // 11
console.log(Number(true)); // 1
```

Number()转换字符串时相对复杂且反常规，在需要得到整数时可以优先使用parseInt()函数  
parseInt()函数更专注于字符串是否包含数值模式，字符串最前面的空格会被忽略，从第一个非空格字符开始转换  
如果第一个字符不是数值字符、加号或减号，parseInt()立即返回NaN，意味着空字符串也会返回NaN  
如果第一个字符是数值字符、加号或减号，则继续依次检测每个字符，直到字符串末尾，或**碰到非数值字符(非数值字符后的数值也会被忽略）**

假设字符串中的第一个字符是数值字符，parseInt()函数也能识别不同的整数格式  

```js
console.log(parseInt("1234blue")); // 1234
console.log(parseInt("")); // NaN
console.log(parseInt("0xA")); // 10
console.log(parseInt(22.5)); // 22
console.log(parseInt("70")); // 70
console.log(parseInt("0xf")); // 15
```

不同的数值格式很容易混淆，因此parseInt()也接收第二个参数，用于指定底数（进制数）

```js
let num = parseInt("0xAF", 16); // 175
```

如果提供了十六进制参数，那么字符串前面的"0x"可以省略

```js
let num1 = parseInt("AF", 16); // 175
let num2 = parseInt("AF"); // NaN
```

因为不传底数参数相当于让parseInt()自己决定如何解析，所以为避免解析出错，建议始终传给它第二个参数

parseFloat() 函数的工作方式跟parseInt()函数类似，都是从位置0开始检测每个字符

也是解析到字符串末尾或解析到一个无效的浮点数值字符位置  
**这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被省略**

parseFloat()函数的另一个不同之处在于，始终忽略字符串开头的零  
这个函数能识别前面讨论的所有浮点格式，以及十进制格式（开头的零始终被忽略）  
十六进制始终会返回0，因为parseFloat()只解析**十进制值**，因此不能指定底数  
如果字符串表示整数（没有小数点或者小数点后面只有一个零），则返回整数

```js
console.log(parseInt("1234blue")); // 1234
console.log(parseInt("")); // NaN
console.log(parseInt("0xA")); // 10
console.log(parseInt(22.5)); // 22
console.log(parseInt("70")); // 70
console.log(parseInt("0xf")); // 15
```

#### String类型

```js
let firstName = "John";
let lastName = "Jacob";
let lastName = "Jingleheimerschmidt'    
```

ECMAScript语法中表示字符串的引号没有区别，要注意的是，以某种引号作为字符串开头，必须仍然以该种引号作为字符串结尾

1. 字符字面量

字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符



String（字符串）数据类型表示零或多个16位Unicode字符序列

字符串可以使用双引号（"）、单引号（'）或反引号（`）标识

| 字面量 | 含义                                                         |
| ------ | ------------------------------------------------------------ |
| \n     | 换行                                                         |
| \t     | 制表                                                         |
| \b     | 退格                                                         |
| \r     | 回车                                                         |
| \f     | 换页                                                         |
| \\\    | 反斜杠（\）                                                  |
| \\'    | 单引号（\'），在字符串以单引号标示时使用，例如\'He said, \\'hey. \\' \' |
| \\"    | 双引号（\"），在字符串以双引号标示时使用，例如\"He said, \\"hey. \\" \" |
| \ \`    | 反引号（\`），在字符串以反引号标示时使用，例如\`He said, \ \`hey. \ \` \` |
| \xnn | 以十六进制编码nn表示的字符（其中n是十六进制数字0~F），如\x41等于"A" |
| \unnnn | 以十六进制编码nnnn表示的Unicode字符（其中n是十六进制数字0~F），如\u03a3等于希腊字符"∑" |





# 转义字符

|显示结果|描述|实体名称|实体编号|
|---|---|---|---|
| |空格|\&nbsp;|\&#160;|
|<|小于号|\&lt;|\&#60;|
|>|大于号|\&gt;|\&#62;|
|&|和号|\&amp;|\&#38;|
|“|引号|\&quot;|\&#34;|
|‘|撇号|\&apos;(IE不支持)|\&#39;|
