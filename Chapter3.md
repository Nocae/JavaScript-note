### 区分大小写

> ECMAScript 中的一切都区分大小写，无论是变量、函数名、还是操作符，都区分大小写
> typeof 不能作为函数名，因为它是关键字，但是 Typeof 是一个完全有效的函数名

### 标识符

> **就是变量、函数、属性或函数参数的名称**

标识符可以由一个或多个下列字符组成：

- 第一个字符必须是一个字母、下划线或美元符号；
- 剩下的其它字符可以是字母、下划线、美元符号或数字；

标识符中的字母可以是扩展 ASCII(Extended ASCII)中的字母，也可以是 Unicode 的字母字符

> 按照惯例，ECMAScript 标识符使用驼峰大小写形式，即**第一个单词的首字母小写**，**后面的每个单词的首字母大写**

**_关键字、保留字、true、false、null 不能作为标识符_**

### 注释

ECMAScript 采用 C 语音风格的注释，包括单行注释和块注释  
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

ECMAScript5 增加了严格模式（strict mode）概念

严格模式是一种不同的 JavaScript 解析和执行模型

ECMAScript3 的一些不规范写法在这里会被处理，对于不安全的活动将抛出错误

要启动严格模式，在脚本开头加上一行：

```js
"use strict";
```

虽然看起来像个没有赋值给任何变量的字符串，但其实是一个预处理**指令**

任何支持 js 引擎看到它都会切换到严格模式，这种语法的目的是不破坏 ECMAScript 3 语法

也可单独指定一个函数在严格模式下执行，只要把预处理指令放到函数体开头

```js
function doSomething() {
  "use strict";
  // 函数体
}
```

### 语句

ECMAScript 中的语句以分号结尾，省略号意味着由解析器确定语句在哪里结尾

```js
let sum = a + b; // 没有分号也有效，但不推荐
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
if (test) console.log(test);
// 有效，容易导致错误，应该避免

if (test) {
  console.log(test);
}
// 推荐
```

### 关键字与保留字

ECMA-262 描述了一组保留的关键字，关键字有特殊的用途  
保留的关键字不能用作标识符或属性名

|          |          |            |        |
| :------: | :------: | :--------: | :----: |
|  break   |    do    |     in     | typeof |
|   case   |   else   | instanceof |  var   |
|  catch   |  export  |    new     |  void  |
|  class   | extends  |   return   | while  |
|  const   | finally  |   super    |  with  |
| continue |   for    |   switch   | yield  |
| debugger | function |    this    |        |
| default  |    if    |   throw    |        |
|  delete  |  import  |    try     |        |

规范中也描述了一组**未来的保留字**，同样**不能用作标识符或属性名**

始终保留:

enum

严格模式下保留:

implements package public
interface protected static
let private

模块代码中保留:

await

这些词汇不能用作标识符，但现在可以用作对象的属性名  
最好不要使用关键字和保留字作为标识符和属性名，确保兼容过去和未来的 ECMAScript 版本

### 变量

#### var 关键字

可以用它保存任何类型的值（不初始化的情况下，变量会保存一个特殊值 undefined）  
不仅可以改变保存的值，也可以改变值的类型。合法，但不推荐（可以有，但没必要）

1. var 声明作用域

使用 var 操作符定义的变量会成为包含它的函数的局部变量  
如：使用 var 在一个函数内部定义一个变量，意味着该变量在函数退出是被销毁

```js
function test() {
  var message = "hi";
}
test();
console.log(message); // 出错
```

在函数内定义变量是省略 var 操作符，可以创建一个全局变量

```js
function test() {
  message = "hi";
}
test();
console.log(message); // "hi"
```

如果需要定义多个变量，可以在一条语句中用逗号分隔每个变量  
在严格模式下，不能定义名为 eval 和 arguments 的变量，否则会导致语法错误

2. var 声明提升

就是把所有变量声明都拉到函数作用域的顶部  
反复多次使用 var 声明同一个变量也没问题

#### let 声明

let 跟 var 的作用差不多，但有着非常重要的区别  
最明显的区别就是，let 声明的范围是块作用域，var 声明的是范围是函数作用域

```js
if (true) {
  let age = 26;
  console.log(age); // 26
}
console.log(age); // ReferenceError:age 没有定义
```

age 变量之所以不能在 if 块外部被引用，因为它的作用域仅限于该块内部  
块作用域是函数作用域的自己，因此适用于 var 的作用域限制同样也适用于 let

> let 也不允许同一个块级作用域中出现冗余声明，会报错

```js
var name;
var name;

let age;
let age; // SyntaxError;标识符age已经声明过了
```

js 引擎会记录用于变量声明的标识符及其所在的块作用域，因此嵌套使用相同的标识符不会报错，这是因为同一个块中没有重复声明

> 对声明冗余报错不会因混用 let 和 var 而受影响
> 这两个关键字声明的并不是不同类型的变量，他们只是指出变量在相关作用域如何存在

```js
var name;
let name; // SyntaxError: Identifier 'name' has already been declared

let age;
var age; // SyntaxError: Identifier 'age' has already been declared
```

1. 暂时性死区

> let 和 var 的另一个重要区别就是 let 声明的变量不会在作用域中被提升

```js
console.log(age);

let age = 22; // ReferenceError: Cannot access 'age' before initialization
```

解析代码时，js 引擎也会注意到后面出现的 let 声明，只不过在此之前不能以任何方式来引用未声明的变量

- let 声明之前的执行瞬间被称为“暂时性死区”
- 此阶段引用任何后面才声明的变量都会抛出 ReferenceError

2. 全局声明

与 var 关键字不同，使用 let 在全局作用域中声明的变量**不会成为 window 对象的属性**（var 则会）

```js
var name = "matt";
console.log(window.name); // 'matt'

let age = 26;
console.log(window.age); // undefined
```

let 声明仍然是在全局作用域中发生的，相应变量会在页面的声明周期内存续  
为了避免 SyntaxError，**必须确保页面不会重复声明同一变量**

3. 条件声明

使用 var 声明变量时，由于声明会被提升，js 引擎会自动将多余的声明在作用域顶部合并为一个声明  
因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过的同名变量，同时不可能在没有声明的情况下声明它

```html
<script>
  var name = "nicho";
  let age = 21;

  console.log(name);
  console.log(age);
</script>

<script>
  // 假设脚本不确定页面中是否已经声明了同名变量
  // 那它可以假设还没有声明过

  var name = "natt";
  // 这里没问题，因为可以被作为一个提升声明来处理
  // 不需要检查之前是否声明过同名变量
  console.log(name);

  let age = 22; // 报错Uncaught SyntaxError: Identifier 'age' has already been declared
</script>
```

使用 try/catch 语句或 typeof 操作符也不能解决，因为条件块中 let 声明的作用域仅限于该块

> 为此对于 let 这个新的 ES6 声明关键字，不能依赖条件声明模式

4. for 循环中的 let 声明

在 let 声明之前，for 循环定义的迭代变量会渗透到循环体外部  
改成 let 后这个问题就消失了，迭代变量的作用域仅限于 for 循环内部

```js
for (let index = 0; index < 5; index++) {}

console.log(index); // ReferenceError: index is not defined
```

```js
for (let index = 0; index < 5; index++) {
  setTimeout(() => console.log(index), 0);
}

// 输出
0;
1;
2;
3;
4;
```

使用 let 声明迭代变量时，js 引擎会在后台为每个迭代循环声明一个新的迭代变量  
每个 setTimeout 引用的都是不同的变量实例  
这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for、for-in、for-of 循环

#### const 声明

const 与 let 基本相同，唯一一个重要区别就是用它声明变量时必须同时初始化变量，且尝试修改 const 声明的变量会导致运行错误

```js
const age = 26;
age = 36; // TypeError: Assignment to constant variable. 给常量赋值报错

// const也不允许重复声明
const name = "123";
const name = "234"; // SyntaxError: Identifier 'name' has already been declared

// const 声明的作用域也是块
const name = "matt";

if (true) {
  const name = "nich";
}

console.log(name); // matt
```

const 声明的限制只适用于它**指向的变量的引用**  
如果 const 引用的是一个对象，那修改这个对象内部的属性并不违反 const 限制

js 引擎会为 for 循环中 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变量很相似  
但是不能用 const 来声明迭代变量（迭代变量会自增）

> 想用 const 声明一个不会修改的 for 循环，也是可以的
> 每次迭代只是创建一个新变量，对于 for-of 和 for-in 很有意义

```js
let i = 0;

for (const j = 7; i < 5; i++) {
  console.log(j);
}
// 7 7 7 7 7

for (const key in { a: 1, b: 2 }) {
  console.log(key);
}
// a,b

for (const value of [1, 2, 3, 4, 5]) {
  console.log(value);
}
// 1,2,3,4,5
```

#### 声明风格及最佳实践

- 不使用 var；
- const 优先，let 次之；

### 数据类型

> ECMAScript 有 6 种简单数据类型（也称为**原始类型**）：Undefined、Null、Boolean、Number、String、Symbol
> Symbol（符号）是 ECMAScript6 新增的
> 还有一种复杂数据类型叫做 Object（对象），它是一种无序名值对的集合

#### typeof 操作符

因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型  
typeof 操作符就是为此而生的（检测并以字符串返回数据类型）

- "undefined"表示值未定义；
- "boolean"表示值为布尔值；
- "string"表示值为字符串；
- "number"表示值为数值；
- "object"表示值为对象（而不是函数）或 null；
- "function"表示值为函数；
- "symbol"表示值为符号；

```js
let message = "some string";

console.log(typeof message); // string
console.log(typeof message); // string
console.log(typeof 95); // number
console.log(typeof null); // object
```

- 调用 typeof null 返回 object，是因为特殊值 null 被认为是一个空对象的引用
- 函数在 ECMAScript 中被认为是对象，并不是数据类型，可是函数也有自己特殊的属性，有必要通过 typeof 来区分函数和其他对象

#### undefined 类型

undefined 类型只有一个值，就是特殊值 undefined  
当 var 或 let 声明变量没有初始化时，就相当于给变量赋予了 undefined 值

```js
let msg;

console.log(msg === undefined); // true
```

等同于 let msg = undefined; 但这是不必要的，默认情况下，任何未经初始化的变量都会取得 undefined 值

> 增加这个特殊值的目的就是正式明确空对象指针（null）和未初始化变量的区别

包含 undefined 值得变量跟未定义变量是有区别的

```js
let msg;

console.log(msg); // undefined
console.log(age); // ReferenceError: age is not defined
```

对未声明的变量，只能执行一个有用的操作，就是对它调用 typeof，返回的结果是 undefined  
对未声明的变量调用 delete 也不会报错，但没什么用，实际上在严格模式会抛出错误

> 建议在声明变量的同时进行初始化，当 typeof 返回 undefined 时，就会知道是因为给定的变量尚未声明，而不是声明了但未初始化

#### Null 类型

Null 类型只有一个值，即特殊值 null  
逻辑上讲，null 表示一个空对象指针，所以给 typeof 传 null 会返回"object"

> 定义将来要保存对象值的变量时，建议使用 null 初始化，不要使用其他值
> 这样只要检查这个变量的值是不是 null 就可以知道这个变量是否在后来被被重新赋予了一个对象的引用

```js
let car = null;

if (car != null) {
  // car 是一个对象的引用
}
```

undefined 值是由 null 值派生而来的，因此 ECMA-262 将他们定义为表面上相等

```js
console.log(undefined == null); // true
```

> 即使 null 和 undefined 有关系，用途也是完全不一样的

> 任何时候只要变量要保存对象，而当时有没有那个对象可保存，就要用 null 来填充该变量
> 这样就保持 null 是空对象指针的语义，进一步将其与 undefined 区分开来

#### Boolean 类型

Boolean 类型是 ECMAScript 中使用的最频繁的类型之一，两个字面值：true 和 false

这两个布尔值不同于数值，因此 true 不等于 1，false 不等于 0

布尔值字面量 true 和 false 区分大小写，所以 True 和 False（及其他大小混写形式）是有效的标识符，但不是布尔值

> 虽然布尔值只有两个，但其他 EMCAScript 类型的值都有相应布尔值的等价形式
> 将一个其他类型的值转换为布尔值，可以调用特定的 Boolean()转型函数：

```js
let msg = "Hello World!";
let msgAsBoolean = Boolean(msg);

console.log(msgAsBoolean); // true
```

Boolean()转型函数可以在任意类型的数据上调用，而且始终返回一个布尔值  
什么值能转换为 true 或 false 的规则取决于数据类型和实际的值

| 数据类型  |    转换为 true 的值    | 转换为 false 的值 |
| :-------: | :--------------------: | :---------------: |
|  Boolean  |          true          |       false       |
|  String   |       非空字符串       |   ""(空字符串)    |
|  Number   | 非零数值（包括无穷值） |      0、NaN       |
|  Object   |        任意对象        |       null        |
| Undefined |     N/A（不存在）      |     undefined     |

#### Number 类型

Number 类型使用 IEEE754 格式表示整数和浮点数、不同的数值类型相应的也有不同的数值字面量格式

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

八进制字面量在严格模式下是无效的，导致 JavaScript 引擎抛出语法错误

创建十六进制字面量，必须让真正的数值前缀 0x（区分大小写），然后是十六进制数字，十六进制数字钟的字母大小写均可

```js
let hexNum1 = 0xa;
let hexNum2 = 0x1f;

console.log(hexNum1); // 十六进制10
console.log(hexNum2); // 十六进制31
```

1. 浮点值

定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字

```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = 0.1; // 有效，但不推荐
```

> 因为存储浮点值使用的内存空间是存储整数值得两倍，所以 ECMAScript 总是想发设发把值转换为整数
> 小数点后面没有数字的情况下，数值就会变成整数
> 如果数值本身就是整数，只是小数点后面跟着 0，也会被转换为整数

```js
let floatNum1 = 1; // 小数点后面没有数字，当成整数1处理
let floatNum2 = 1.0; // 小数点后面是零，当成整数1处理
```

对于非常大或非常小的数值，浮点值可以用科学计数法来表示  
ECMAScript 中科学计数法的格式要求是一个数值（整数或浮点数）后跟一个大写或小写的字母 e，再加上一个要乘的 10 的多少次幂

```js
let floatNum = 3.123e7; // 等于31230000
```

浮点值的精确度最高可达 17 位小数，在在算数计算中不如整数精确、如：0.1 加 0.2 得到的不是 0.3 而是 0.30000000000000004

这种微小的舍入错误，导致很难测试特定的浮点值  
之所以存在这种舍入错误，是因为使用了 IEEE754 数值，这种错误并非 ECMAScript 所独有，其他使用相同格式的语言也有这个问题

2. 值的范围

由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数值  
ECMAScript 可以表示的最小数值保存在 Number.MIN_VALUE 中，这个值在多数浏览器中是 5e-234;  
ECMAScript 可以表示的最大数值保存在 Number.MAX_VALUE，这个值在多数浏览器中是 1.7976931348623157e+308

> 如果某个计算得到的数值超过了 js 可以表示的范围，那么这个数值会被自动转换为一个特殊的 Infinity（无穷）值。
> 无法表示的负数以-Infinity（负无穷大）表示，无法表示的正数以 Infinity（正无穷大）表示

要确定一个值是不是有限大，可以使用 isFinite()函数

```js
const result = Number.MAX_VALUE + Number.MAX_VALUE;

console.log(isFinite(result)); // false
```

> 使用 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY 也可以获取负、正 Infinity

3. NaN

有一个特殊的数值叫 NaN，意味“不是数值”（not a number），用于表示本来要返回数值的操作失败了（而不是抛出错误）。

ECMAScript 中，0、+0 或-0 相除会返回 NaN

```js
console.log(0 / 0); // NaN
console.log(-0 / +0); // NaN
```

如果分子是非 0 值，分母是有符号 0 或无符号 0，会返回 Infinity 或-Infinity

```js
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity
```

NaN 有几个独特的属性

- 任何涉及 NaN 的操作始终返回 NaN（如 NaN/10），连续多步计算时这可能是个问题
- NaN 不等于包括 NaN 在内的任何值

ECMAScript 提供了一个 isNaN()函数，该函数接收一个参数，可以是任意数据类型，判断是否“不是数值”  
把一个值传给 isNaN()后，该函数会尝试把它转换为数值  
某些非数值的值可以直接转换成数值，如字符串"10"或布尔值  
任何不能转换成数值的值都会导致这个函数返回 true

```js
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false，10是数值
console.log(isNaN("10")); // false，可以转换成数值10
console.log(isNaN("blue")); // true，不可以转换为数值
console.log(isNaN(true)); // false，可以转换为数值1
```

4.数制转换

有三个函数可以将非数值转换为数值：Number()、paiseInt()和 parseFloat()

Number()是转型函数，可用于任何数据类型，后两个函数主要用来将字符串转换为数值

Number()函数基于如下规则执行转换

- 布尔值，true 转换为 1，false 转换为 0；

- 数值，直接返回；

- null，返回 0；

- undefined，返回 NaN；

- 字符串，应用以下规则：

  - 如果字符串包含数值字符，包括数值字符前面加、减号情况，则转换为一个十进制数值（转换后符号消失，同时忽略前面的零）；

  - 如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（忽略前面的零）；

    - 如果字符串包含有效的十六进制格式"0xf"，则会转换为与该十六进制对应的十进制整数值；

  - 如果是空字符串（不包含字符），则返回 0；

    - 如果字符串包含除上述情况之外的其他字符，则返回 NaN；

- 对象，调用 valueOf()方法，并按照上述规则转换返回的值。如果结果是 NaN，则调用 toString()方法，再按照转换字符串的规则转换；

```js
console.log(Number("hello")); // NaN
console.log(Number("")); // 0
console.log(Number("000011")); // 11
console.log(Number(true)); // 1
```

Number()转换字符串时相对复杂且反常规，在需要得到整数时可以优先使用 parseInt()函数  
parseInt()函数更专注于字符串是否包含数值模式，字符串最前面的空格会被忽略，从第一个非空格字符开始转换  
如果第一个字符不是数值字符、加号或减号，parseInt()立即返回 NaN，意味着空字符串也会返回 NaN  
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

不同的数值格式很容易混淆，因此 parseInt()也接收第二个参数，用于指定底数（进制数）

```js
let num = parseInt("0xAF", 16); // 175
```

如果提供了十六进制参数，那么字符串前面的"0x"可以省略

```js
let num1 = parseInt("AF", 16); // 175
let num2 = parseInt("AF"); // NaN
```

因为不传底数参数相当于让 parseInt()自己决定如何解析，所以为避免解析出错，建议始终传给它第二个参数

parseFloat() 函数的工作方式跟 parseInt()函数类似，都是从位置 0 开始检测每个字符

也是解析到字符串末尾或解析到一个无效的浮点数值字符位置  
**这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被省略**

parseFloat()函数的另一个不同之处在于，始终忽略字符串开头的零  
这个函数能识别前面讨论的所有浮点格式，以及十进制格式（开头的零始终被忽略）  
十六进制始终会返回 0，因为 parseFloat()只解析**十进制值**，因此不能指定底数  
如果字符串表示整数（没有小数点或者小数点后面只有一个零），则返回整数

```js
console.log(parseInt("1234blue")); // 1234
console.log(parseInt("")); // NaN
console.log(parseInt("0xA")); // 10
console.log(parseInt(22.5)); // 22
console.log(parseInt("70")); // 70
console.log(parseInt("0xf")); // 15
```

#### String 类型

```js
let firstName = "John";
let lastName = "Jacob";
let lastName = "Jingleheimerschmidt'
```

ECMAScript 语法中表示字符串的引号没有区别，要注意的是，以某种引号作为字符串开头，必须仍然以该种引号作为字符串结尾

1. 字符字面量

字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符

String（字符串）数据类型表示零或多个 16 位 Unicode 字符序列

字符串可以使用双引号（"）、单引号（'）或反引号（`）标识

| 字面量 | 含义                                                                                           |
| ------ | ---------------------------------------------------------------------------------------------- |
| \n     | 换行                                                                                           |
| \t     | 制表                                                                                           |
| \b     | 退格                                                                                           |
| \r     | 回车                                                                                           |
| \f     | 换页                                                                                           |
| \\\    | 反斜杠（\）                                                                                    |
| \\'    | 单引号（\'），在字符串以单引号标示时使用，例如\'He said, \\'hey. \\' \'                        |
| \\"    | 双引号（\"），在字符串以双引号标示时使用，例如\"He said, \\"hey. \\" \"                        |
| \ \`   | 反引号（\`），在字符串以反引号标示时使用，例如\`He said, \ \`hey. \ \` \`                      |
| \xnn   | 以十六进制编码 nn 表示的字符（其中 n 是十六进制数字 0~F），如\x41 等于"A"                      |
| \unnnn | 以十六进制编码 nnnn 表示的 Unicode 字符（其中 n 是十六进制数字 0~F），如\u03a3 等于希腊字符"∑" |

2. 字符串的特点

ECMAScript 中的字符串是**不可变的**，一旦创建，值就不可变了  
要改变某个变量中的字符串值，必须先销毁原始的字符串值，将包含新值的另一个字符串保存到该变量中

```js
let lang = "java";
lang = lang + "script";
```

3. 转换为字符串

- 几乎所有值都有的 toString()方法，唯一的用途就是返回当前值的字符串等价物

```js
let age = 11;
let ageAsString = age.toString();
console.log(ageAsString); // 字符串"11"

let found = true;
let foundAsString = found.toString();
console.log(foundAsString); // true
```

toString()方法可用于**数值、布尔值、对象、字符串值（返回自身的一个副本）**

unll 和 undefined 没有 toString()方法

多数情况下 toString()不接收任何参数，在对数值调用这个方法时，toString()可以接收一个底数参数（以什么底数来输出数值的字符串表示）

默认情况下 toString()返回数值的十进制字符串表示，通过传参，可以得到数值的二进制、八进制、十六进制，或任何其他有效基数的字符串表示

```js
let num = 10;

console.log(num.toString()); // 10
console.log(num.toString(2)); // 1010
console.log(num.toString(8)); // 12
console.log(num.toString(10)); // 10
console.log(num.toString(16)); /
```

如果不确定一个值是不是 null 或 undefined，可以使用 String()转型函数，始终会返回表示响应类型值的字符串

遵循以下规则：

- 如果值有 toString()方法，则调用该方法（不传参数）并返回结果；
- 如果值是 null，则返回 null；
- 如果值是 undefined，则返回 undefined；

4. 模板字面量

ECMAScript6 新增了使用模板字面量定义字符串的能力  
与使用单引号或双引号不同，模板字面量保留换行符，可以跨行定义字符串

```js
const muMultiLineString = 'first line\nsecond line';

const muMultiLineTemplateLiteral = `first line
second line`;

console.log(muMultiLineString);

console.log(muMultiLineTemplateLiteral);

console.log(muMultiLineTemplateLiteral === muMultiLineString);

//  输出

first line
second line
first line
second line
true
```

模板字面量会保持反引号内部的空格，因此在使用时要格外注意

5. 字符串插值

模板字面量最常用的一个特性是支持字符串插值，就是可以在一个连续定义中插入一个或多个值

技术上讲，模板字面量不是字符串，而是一种特殊的 js 句法表达式，不过求值后得到的是字符串

模板字面量在定义时立即求值并转换为字符串实例，任何插入的变量也会从他们最接近的作用域中取值

> 字符串插值通过在${}中使用一个 js 表达式实现

```js
const value = 5;
const exponent = 'second';

const interpolatedString = value + ' to the ' + exponent + ' power is ' + (value * value);

const interpolatedTemplateLiteral = `${value} to the ${exponent} power is ${value * value}`;

console.log(interpolatedString);
console.log(interpolatedTemplateLiteral);

// 输出

5 to the second power is 25
5 to the second power is 25
```

所有插入的值都会使用 toString() 强制转型为字符串，而且任何 js 表达式都可以用于插值

- 嵌套的模板字符串无需转义；
- 将表达式转换为字符串时会调用 toString();
- 在插值表达式中可以调用函数和方法；
- 模板也可以插入自己之前的值；

6. 模板字面量标签函数

模板字面量也支持定义**标签函数**，通过标签函数可以自定义插值行为

标签函数接收到的参数依次是原始字符串数组和对每个表达式求值的结果  
这个函数的返回值是对模板字面量求值得到的字符串

```js
const a = 6;
const b = 9;
function simpleTag(strings, aValExpression, bValExpression, sumExpression){
    console.log(strings);
    console.log(aValExpression);
    console.log(bValExpression);
    console.log(sumExpression);

    return 'foobar';
}

const untaggedResult = `${ a } + ${ b } = ${ a + b }`;

const taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;

console.log(untaggedResult);
console.log(taggedResult);

// 输出
[ '', ' + ', ' = ', '' ]
6
9
15
6 + 9 = 15
foobar
```

因为表达式参数的数量是可变的，通常应该使用**剩余操作符**将他们收集到一个数组中

```js
const a = 6;
const b = 9;

function simpleTag(strings, ...expressions) {
  console.log(strings);
  for (const expression of expressions) {
    console.log(expression);
  }

  return "foobar";
}

const taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

console.log(taggedResult);

// 输出
["", " + ", " = ", ""];
6;
9;
15;
foobar;
```

对于有 n 个插值的模板自变量，传给标签函数的表达式参数的个数始终是 n

传给标签函数的第一个参数所包含的字符串个数则始终是 n+1

如果想将字符串和对表达式求值的结果拼接起来作为默认返回的字符串，可以见课本 43 页，嘤嘤嘤~~

7. 原始字符串

使用模板字面量也可以直接获取原始的字面量内容（如换行符或 Unicode 字符），而不是被转换后的字符表示

可以使用默认的 String.raw 标签函数

```js
console.log(`\u00A9`); // ©
console.log(String.raw`\u00A9`); // \u00A9
```

也可以使用标签函数的第一个参数，字符串数组的.raw 属性获取每个字符串的原始内容

详见 44 页，~~~嘤

#### Symbol 类型

Symbol（符号）是 ECMAScript6 新增的数据类型

符号是原始值，符号**实例是唯一、不可变的**

符号的用途是**确保对象属性使用唯一标识符，不会发生属性冲突的危险**

1. 符号的基本用法

符号需要使用 Symbol()函数初始化

符号本身是原始类型，所以 typeof 操作符返回 symbol

```js
const sym = Symbol();
console.log(typeof sym); // symbol
```

调用 Symbol()函数时，可以传入一个字符串参数作为对符号的描述  
将来可以通过这个字符串来调试代码。但是这个字符串参数与符号定义或标识完全无关

```js
const genericSymbol = Symbol();
const otherGenericSymbol = Symbol();

const fooSymbol = Symbol("foo");
const otherSymbol = Symbol("foo");

console.log(genericSymbol === otherGenericSymbol); // false
console.log(fooSymbol === otherSymbol); // false
```

符号没有字面量语法，这也是他们发挥作用的关键

只要创建 Symbol()实例并将其用作对象的新属性，就可以保证它不会覆盖已有的对象属性，无论是符号属性还是字符串属性

```js
const genericSymbol = Symbol();
console.log(genericSymbol); // Symboll()

const fooSymbol = Symbol("foo");
console.log(fooSymbol); // Symbol(foo)
```

最重要的是，Symbol()函数不能与 new 关键字以其作为构造函数使用，为了避免创建符号包装对象

2. 使用全局符号注册表

如果运行时的不同部分需要共享和重用符号实例，那么可以使用一个字符串作为键，在全局符号注册表中创建并重用符号

为此需要使用 Symbol.for()方法

```js
const fooGlobalSymbol = Symbol.for("foo");
console.log(fooGlobalSymbol); // Symbol(foo)
```

Symbol.for()对每个字符串键都执行幂等操作

第一次使用某个字符串调用时，会检查全局运行时注册表，发现不存在对应的符号，就会生成一个新符号实例并添加到注册表中。后续使用相同字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，然后就会返回该符号实例

```js
const fooGlobalSymbol = Symbol.for("foo"); // 创建新符号
const otherFooGlobalSymbol = Symbol.for("foo"); // 重用已有符号

console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true
```

即使采用相同的符号描述，在全局注册表中定义的符号跟使用 Symbol()定义的符号也并不等同

```js
const localSymbol = Symbol("foo");
const globalSymbol = Symbol.for("foo");

console.log(localSymbol === globalSymbol); // false
```

全局注册表中的符号必须使用字符串键来创建，因此作为参数传给 Symbol.for()的任何值都会被转换为字符串

注册表中使用的键同时会被用作符号描述

```js
const emptyGlobalSymbol = Symbol.for();
console.log(emptyGlobalSymbol); // Symbol(undefined)
```

还可以使用 Symbol.keyFor()来查询全局注册表，这个方法接收符号，返回该全局符号对应的字符串键

如果查询的不是全局符号，则返回 undefined，如果传给 Symbol.keyFor()不是符号则抛出 TypeError;

```js
//  全局
const s = Symbol.for("foo");
console.log(Symbol.keyFor(s)); // foo

// 普通
const s2 = Symbol("bar");
console.log(Symbol.keyFor(s2)); // undefined
```

3. 使用符号作为属性

凡是可以使用字符串或数值作为属性的地方，都可以使用符号

包括了对象字面量属性和 Object.defineProperty()/Object.definProperties()定义的属性

- Object.defineProperty()：直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
- Object.definProperties()：直接在一个对象上定义新的属性或修改现有属性，并返回该对象

对象字面量只能在计算属性语法中使用符号作为属性

```js
let s1 = Symbol("foo"),
  s2 = Symbol("bar"),
  s3 = Symbol("baz"),
  s4 = Symbol("qux");

const o = {
  [s1]: "foo val",
};

console.log(o);
// {Symbol(foo): 'foo val'}

Object.defineProperty(o, s2, { value: "bar val" });

console.log(o);
// {Symbol(foo): 'foo val', Symbol(bar): 'bar val'}

Object.defineProperties(o, {
  [s3]: { value: "baz val" },
  [s4]: { value: "qux val" },
});

console.log(o);
// {Symbol(foo): 'foo val', Symbol(bar): 'bar val', Symbol(baz): 'baz val', Symbol(qux): 'qux val'}
```

类似于 Object.getOwnPropertyNames()返回对象实例的常规属性数组，Object.getOwnPropertySymbols()返回对象实例的符号属性数组。这两个方法的返回值彼此互斥

Object.getOwnPropertyDescriptors()会返回同时包含常规和符号属性描述符的对象

Reflect.ownKeys()会返回两种类型的键

```js
const s1 = Symbol("foo"),
  s2 = Symbol("bar");

const o = {
  [s1]: "foo val",
  [s2]: "bar val",
  baz: "baz val",
  qux: "qux val",
};

console.log(Object.getOwnPropertySymbols(o));
// [ Symbol(foo), Symbol(bar) ]

console.log(Object.getOwnPropertyNames(o));
// [ 'baz', 'qux' ]

console.log(Object.getOwnPropertyDescriptors(o));
/*
{
  baz: {
    value: 'baz val',
    writable: true,
    enumerable: true,
    configurable: true
  },
  qux: {
    value: 'qux val',
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol(foo)]: {
    value: 'foo val',
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol(bar)]: {
    value: 'bar val',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
 */

console.log(Reflect.ownKeys(o));
// [ 'baz', 'qux', Symbol(foo), Symbol(bar) ]
```

因为符号属性是对内存中符号的一个引用，所以直接创建并用作属性的符号不会丢失

如果没有显式地保存对这些属性的引用，那么必须遍历对象的所有符号属性才能找到对应的属性键

- Array.prototype.find()：返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
- String.prototype.match()：检索返回一个字符串匹配**正则表达式**的结果

```js
const o = {
  [Symbol("foo")]: "foo val",
  [Symbol("bar")]: "bar val",
};

console.log(o);

console.log(Object.getOwnPropertySymbols(o));

const barSymbol = Object.getOwnPropertySymbols(o).find((symbol) =>
  symbol.toString().match(/bar/)
);

console.log(barSymbol);
// Symbol(bar)
```

4. 常用内置符号

ECMAScript6 也引入了一批**常用内置符号**，用于暴露语言内部行为  
开发者可以直接访问、重写或模拟这些行为  
这些符号都是以 Symbol 工厂函数字串属性的形式存在

这些符号最重要的用途之一就是重新定义它们，改变原生结构的行为  
这些内置符号没有什么特别之处，就是全局函数 Symbol 的普通字符串属性，指向一个符号的实例

> 所有的内置符号属性都是不可写、不可枚举、不可配置
> ECMAScript 规范中，经常会引用符号在规范中的名称，前缀为@@
> 如@@iterator 指的就是 Symbol.iterator

5.Symbol.asyncIterator

根据 ECMAScript 规范，这个符号作为一个属性表示“一个方法，该方法返回对象默认的 AsyncIterator。由 for-await-of 语句使用”。换句话说，这个符号表示实现异步迭代器 API 的函数

for-await-of 循环会利用这个函数执行异步迭代操作

循环时，会调用以 Symbol.asyncIterator 为键的函数，并期望这个函数会返回一个实现迭代器 API 的对象  
很多时候，返回的对象是实现该 API 的 AsyncIterator

我选择先跳过了，我是废物，嘤嘤嘤~~

#### Object 类型

EDMAScript 中的对象其实就是一组数据和功能的集合

对象通过 new 操作符后跟对象类型的名称来创建

开发者可以通过创建 Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法

```js
const o = new Object();
```

这个语法类似 java，但 ECMAScript 只要求在构造函数提供参数时使用括号

如没有参数，可以省略括号（不推荐）

Object 类型的所有属性和方法在派生的对象上同样存在

每个 Object 实例都有如下属性和方法

- constructor：用于创建当前对象的函数，前面的例子中，这个属性就是 Object()函数；
- hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如 o.hasOwnProperty("name")）或符号；
- isPrototypeOf(object)：用于判断当前对象是否为另一个对象的原型；
- propertyIsEnumerable(propertyName)：用于判断给定的属性是否可以使用 for-in 语句枚举。与 hasOwnProperty()一样，属性名必须是字符串；
- toLocaleString()：返回对象的字符串表示，该字符串反应对象所在的本地化执行环境；
- toString()：返回对象的字符串表示；
- valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与 toString()返回值相同；

因为 Object 是所有对象的基类，所以任何对象都有这种属性和方法

### 操作符

ECMA-262 描述了一组可用于操作数据的操作符，包括数学操作符、位操作符、关系操作符、相等操作符

ECMAScript 中的操作符是独特的，因为它们可用于各种值，包括字符串、数值、布尔值，甚至对象。

应用给对象时，通常会调用 valueOf()、toString()方法取得可以计算的值

#### 一元操作符

只操作一个只的操作符叫**一元操作符**

1. 递增/递减操作符

递增和递减操作符直接照搬 C 语音，但有两个版本：前缀版、后缀版

```js
const age = 29;
++age; // 前缀版
--age;

age++; // 后缀版
age--;
```

无论使用前缀递增还是前缀递减操作符，变量的值都会在语句被求值之前改变（副作用）

这四个操作符可以作用于任何值，意思是不限于整数——字符串、布尔值、浮点值，甚至对象都可以，遵循以下规则：

- 对于字符串，如果是有效的数值形式，则转换为数值再应用改变，变量类型从字符串变成数值；

- 对于字符串，如果不是有效的数值形式，则将变量的值设置为 NaN，变量类型从字符串变成数值；

- 对于布尔值，如果是 false，则转换为 0 再应用改变，变量类型从布尔值变成数值；

- 对于布尔值，如果是 true，则转换为 1 再应用改变，变量类型从布尔值变成数值；

- 对于浮点值，加一或减一；

- 如果是对象，则调用 valueOf()方法取得可以操作的值，对得到的值应用上述规则。如果是 NaN，调用 toString()并再次应用其他规则，变量类型从对象变成数值；

```js
let s1 = "2";
let s2 = "z";
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  },
};

console.log(++s1); // 3
console.log(++s2); // NaN
console.log(++b); // 1
console.log(--f); // 0.10000000000000009
console.log(--o); // -2
```

2. 一元加和减

如果将一元加应用到非数值，则会执行与使用 Number()转型函数一样的类型转换，详见 Number()函数；

对数值使用一元减会将其变成相应的负值  
在应用到非数值时，会遵循与一元加同样的规则，先对它们进行转换，然后在取负值；

#### 位操作符

ECMAScript 中的所有数值都以 IEEE 754 64 位格式存储，但位操作并不直接应用到 64 位表示  
而是先把值转换为 32 位整数，再进行位操作，之后再把结果转换为 64 位

对于开发者而言只需要考虑 32 位整数即可

有符号整数使用 32 位的前 31 位表示整数。第 32 位表示数值的符号，如 0 表示正，1 表示负
这一位称为符号位，它的值决定了数值其余部分的格式。正直以真正的二进制格式存储，即 31 位中的每一位都代表 2 的幂

第一位表示 2^0，第二位表示 2^1，以此类推。如果一个位是空的，则以 0 填充，相当于忽略不计

负值以一种称为二补数（或补码）的二进制编码存储  
一个数值的二补数通过如下 3 个步骤计算得到：

- 确定绝对值的二进制表示；
- 找到一个数值的一补数（或反码），就是每个 0 都变成一，每个一变成零；
- 给结果加一；

> 特殊值 NaN 和 Infinity 在位操作中都会被当成 0 处理；

如果将位操作符应用到非数值，那么首先会使用 Number()函数将该数值转换为数值（这个过程是自动的），然后再应用位操作。结果是数值

1.按位非

按位非操作符用波浪符（~）表示，她的作用是返回数值的一补数（反码）  
是 ES 中为数不多的几个二进制数学操作符之一

```js
const num1 = 25;
const num2 = ~num1;
console.log(num2); // -26
```

按位非操作符作用用到了 25 得到的结果是-26  
由此可见，按位非的最终结果是对数值取反并减一

2. 按位与

按位与操作符用和符号（&）表示，有两个操作数  
本质上就是将两个数的每一个位对齐，然后基于真值表中的规则，对每一位执行相应操作

| 第一个数值的位 | 第二个数值的位 | 结果 |
| :------------: | :------------: | :--: |
|       1        |       1        |  1   |
|       1        |       0        |  0   |
|       0        |       1        |  0   |
|       0        |       0        |  0   |

> 按位与操作在两个位都是 1 时返回 1，在任何一位是 0 时返回 0

3. 按位或

按位或操作符用管道符（|）表示，同样有两个操作数，遵循如下真值表

| 第一个数值的位 | 第二个数值的位 | 结果 |
| :------------: | :------------: | :--: |
|       1        |       1        |  0   |
|       1        |       0        |  1   |
|       0        |       1        |  1   |
|       0        |       0        |  0   |

> 按位或操作在至少一位是 1 时返回，两位都是 0 时返回 0

4. 按位异或

按位异或用脱字符（^）表示，同样有两个操作数，遵循如下真值表

| 第一个数值的位 | 第二个数值的位 | 结果 |
| :------------: | :------------: | :--: |
|       1        |       1        |  1   |
|       1        |       0        |  1   |
|       0        |       1        |  1   |
|       0        |       0        |  0   |

> 按位异或与按位或的区别是，它只在一位上是 1 的时候返回 1（两位都是 1 或 0，则返回 0）

5. 左移

左移操作符用两个小于号（<<）表示，按照指定的位数将数值的所有位向左移动

```js
const oldValue = 2;
const newValue = oldValue << 5;

console.log(newValue.toString(2)); // 1000000即十进制64
```

> 左移后，数值右端会空出 5 位，左移会以 0 填充这些空位，让结果是完整的 32 位数值
> 左移会保留它所操作数值的符号。即如果-2 左移 5 位，得到-64，而不是正 64

6. 有符号右移

有符号右移由两个大于号（>>）表示，会将数值的所有 32 位都向右移，同时保留符号（正或负）  
有符号右移实际上是左移的逆运算

```js
const oldValue = 64;
const newValue = oldValue >> 5;

console.log(newValue.toString(2)); // 二进制10即十进制2
```

同样，位移后就会出现空位，不过右移后空位会出现在左侧，且在符号位之后

ES 会用符号位的值来填充这些空位，得到完整的整数

7. 无符号右移

无符号右移用三个大于号表示（>>>），会将数值的所有 32 位都向右移  
对于正数，无符号右移与有符号右移结果相同

```js
const oldValue = 64;
const newValue = oldValue >> 5;

console.log(newValue.toString(2)); // 二进制10即十进制2
```

对于负数，有时候差异会非常大

> 与有符号右移不同，无符号右移会给空位补 0，而不管符号位是什么。对于正数来说，这跟有符号右移效果相同。但对于负数来说，结果就差太多了
> 无符号右移操作符将负数的二进制表示当成正整数的二进制表示来处理，因为负数是其绝对值的二补数（补码），所以右移之后结果变得非常大

#### 布尔操作符

布尔操作符一共有三个：逻辑非、逻辑与和逻辑或

1. 逻辑非

逻辑非操作符由一个（!）表示，可应用给 ES 中的任何值  
它始终返回布尔值，无论应用的是什么数据类型

逻辑非首先将操作数转换为布尔值，然后再对其取反，遵循如下规则：

- 操作数是对象，返回 false；
- 操作数是空字符串，返回 true；
- 操作数是非空字符串，返回 false；
- 操作数是数值 0，返回 true；
- 操作数是非零数值（包括 Infinity），返回 false；
- 操作数是 null，返回 true；
- 操作数是 NaN，返回 true；
- 操作数是 undefined，返回 true

> 逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个叹号（!!），相当于调用了转型函数 Boolean()。无论操作数是什么类型，第一个叹号总会返回布尔值。第二个叹号对该布尔值取反，从而给出变量真正对应的布尔值。

**结果与对同一个值使用 Boolean()函数是一样的**

2. 逻辑与

逻辑与操作符由两个和号（&&）表示，应用到**两个值**

逻辑与操作符遵循如下真值表

| 第一个操作数 | 第二个操作数 | 结果  |
| :----------: | :----------: | :---: |
|     true     |     true     | true  |
|     true     |    false     | false |
|    false     |     true     | false |
|    false     |    false     | false |

> 逻辑与操作符可用于**任何类型的操作数**，不限于布尔值。

如果有操作数不是布尔值，则逻辑与并不一定会返回布尔值

- 第一个操作数是对象，返回第二个操作数；
- 第二个操作数是对象，只有第一个操作数求值为 true 才返回该对象；
- 两个操作数都是对象，返回第二个操作数；
- 有一个操作数是 null，返回 null；
- 有一个操作数是 NaN，返回 NaN；
- 有一个操作数是 undefined，则返回 undefined；

> 逻辑与操作符是一种短路操作符，意识是如果第一个操作数决定了结果，那么久不会对第二个操作数求值。  
> 第一个操作数是 false，那么无论第二个操作数是什么值，结论也不可能等于 true

```js
const found = false;

const result = found && someUndeclaredVariable;

console.log(result); // false
```

3.逻辑或

逻辑或操作符由两个管道符（||）表示

逻辑或操作符遵循如下真值表

| 第一个操作数 | 第二个操作数 | 结果  |
| :----------: | :----------: | :---: |
|     true     |     true     | true  |
|     true     |    false     | true  |
|    false     |     true     | true  |
|    false     |    false     | false |

与逻辑与类似，如果有一个操作数不是布尔值，那么逻辑或操作符也不一定返回布尔值

- 第一个操作数是对象，返回第一个操作数；
- 第一个操作数求值为 false，则返回第二个操作数；
- 两个操作数都是对象，返回第一个操作数；
- 两个操作数是 null，返回 null；
- 两个操作数是 NaN，返回 NaN；
- 两个操作数是 undefined，则返回 undefined；

> 同样与逻辑与类似，逻辑或操作符也具有短路的特性。只不过对逻辑或而言，第一个操作数求值为 true，第二个操作数就不会再被求值了

```js
const found = true;

const result = found || someUndeclaredVariable;

console.log(result); // true
```

> 利用这个行为可以避免给变量赋值 null 或 undefined

```js
let myObject = preferredObject || backupObject;
```

如果 preferredObject 不是 null，则它的值就会赋给 myObject；如果它是 null，则 backupObject 的值就会赋给 myObject

这种模式在 ES 代码中经常用于变量赋值

#### 乘性操作符

> ES 定义了三个乘性操作符：乘法、除法、取模。在处理非数值时，他们会包含一些自动的类型转换  
> 如果乘性操作符有不是数值的操作数，则该操作数会在后台被使用 Number()转型函数转换为数值，意味着空字符串会当成 0，布尔值 true 当成 1

1. 乘法操作符

乘法操作符由一个星号（\*）表示，用于计算两个数值的乘积

乘法操作符在处理特殊值时也有一些特殊的行为

- 操作数都是数值，执行常规的乘法运算。如 ES 不能表示乘积，返回 Infinity 或-Infinity；
- 有任一操作数 NaN，返回 NaN；
- Infinity 乘以 0，返回 NaN；
- Infinity 乘以非 0 的有限数值，根据第二个操作数的符号返回 Infinity 或-Infinity；
- Infinity 乘 Infinity，返回 Infinity；
- 有不是数值的操作数，先在后台用 Number()将其转换为数值，然后再应用如上规则；

2. 除法操作符

除法操作符由一个斜杠（/）表示，计算第一个操作数除以第二个操作数的商

跟乘法操作符一样，除法操作符针对特殊值也有一些特殊的行为

- 操作数都是数值，执行常规的除法运算。如 ES 不能表示商，返回 Infinity 或-Infinity；
- 有任一操作数 NaN，返回 NaN；
- Infinity 除以 Infinity，返回 NaN；
- 0 除以 0，返回 NaN；
- 非零的有限值除以零，根据第一个操作数的符号返回 Infinity 或-Infinity；
- Infinity 除以任何数值，根据第二个操作数的符号返回 Infinity 或-Infinity；
- 有不是数值的操作数，先在后台用 Number()将其转换为数值，然后再应用如上规则；

3. 取模操作数

取模（余数）操作符由一个百分比符号（%）表示

跟其他乘性操作符一样，取模操作符对特殊值也有一些特殊的行为

- 操作数都是数值，执行常规的除法运算，返回余数；
- 被除数是无限值，除数是有限值，返回 NaN；
- 被除数是有限值，除数是 0，返回 NaN；
- Infinity 除以 Infinity，返回 NaN；
- 被除数是有限值，除数是无限值，返回被除数；
- 被除数是 0，除数不是 0，返回 0；
- 有不是数值的操作数，先在后台用 Number()将其转换为数值，然后再应用如上规则；

#### 指数操作

ES7 新增了指数操作符，Math.pow()现在有了自己的操作符\*\*

```js
console.log(Math.pow(3, 2)); // 9
console.log(3 ** 2); // 9
```

不仅如此，指数操作符也有自己的指数赋值操作符\*\*=，该操作符执行指数运算和结果的赋值操作

```js
let squared = 3;
squared **= 2;

console.log(squared); // 9
```

#### 加性操作符

即加法和减法操作符，在 ES 中，这两个操作符拥有一些特殊的行为

与乘性操作符在后台会发生不同数据类型的转换，只不过对这两个操作符来说，转换规则不是那么直观

1. 加法操作符

加法操作符（+）用于求两个数的和

如果两个操作数都是数值，加法操作符执行加法运算并根据如下规则返回结果

- 有任一操作数是 NaN，返回 NaN；
- 有 Infinity 加 Infinity，返回 Infinity；
- 是-Infinity 加-Infinity，返回-Infinity；
- 是 Infinity 加-Infinity，返回 NaN；
- 是+0 加+0，返回 0；
- 是-0 加+0，返回+0；
- 是-0 加-0，返回-0；

如果有一个操作数是字符串，要应用如下规则

- 两个操作数都是字符串，则将第二个字符串拼接到第一个字符串后面；
- 只有一个操作数是字符串，将另一个操作数转换为字符串，将两个字符串拼接在一起

> 如果有任一操作数是对象、数值、布尔值，调用它们的 toString()方法以获取字符串，再应用前面的关于字符串的规则  
> 对于 undefined 和 null，调用 String()函数，分别获取"undefined"和"null"

```js
const result1 = 5 + 5;

console.log(result1); // 10

const result2 = 5 + "5";

console.log(result2); // 55
```

ES 中最常犯的一个错误就是忽略加法操作中涉及的数据类型

```js
const num1 = 5;
const num2 = 10;

let message1 = "The sum of 5 and 10 is " + num1 + num2;
// The sum of 5 and 10 is 510

let message2 = "The sum of 5 and 10 is " + (num1 + num2);
// The sum of 5 and 10 is 15
```

用括号将两个数值变量括了起来，让解释器先执行两个数值的加法，然后再把结果追加给字符串

2. 减法操作符

减法操作符（-）也是使用很频繁的一种操作符

与加法操作符一样，减法操作符也有一组规则用于处理 ECMAScript 中不同类型的转换

- 两个操作数都是数值，则执行数学减法运算并返回结果；
- 如果有任一操作数是 NaN，返回 NaN；
- 如果是 Infinity 减 Infinity，返回 NaN；
- 如果是-Infinity 减-Infinity，返回 NaN；
- 如果是 Infinity 减-Infinity，返回 Infinity；
- 如果是-Infinity 减 Infinity，返回-Infinity；
- 如果是+0 减+0，返回+0；
- 如果是+0 减-0，返回-0；
- 如果是-0 减-0，返回+0；
- 如果有任一操作数是字符串、布尔值、null、undefined，则先在后台使用 Number()将其转换为数值，然后根据前面的规则执行数学运算。如果转换结果是 NaN，减法计算的结果是 NaN；
- 如果有任一操作数是对象，则调用其 valueOf()方法取得表示它的数值。如果该值是 NaN，则减去计算的结果是 NaN。如果对象没有 valueOf()方法，则调用 toString()方法，然后再将得到的字符串转换成数值。

#### 关系操作符

关系操作符执行比较两个值的操作，包括小于（<）、大于（>）、小于等于（<=）、大于等于（>=），都返回布尔值

与 ES 中的其他操作符一样，在将他们应用到不同数据类型时也会发生类型转换和其他行为

- 操作数都是数值，执行数值比较；
- 操作数都是字符串，逐个比较字符串中对应字符的编码；
- 有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较；
- 有任一操作数是对象，则调用其 valueOf()方法，取得结果后再根据前面的规则执行比较，如果没有 valueOf()操作符，则调用 toString()方法，取得结果后再根据前面的规则执行比较；
- 有任一操作数是布尔值，则将其转换为数值再执行比较；

祥见 70 页，嘤嘤嘤~

#### 相等操作符

判断两个变量是否相等是编程中最重要的操作之一

ES 提供了两组操作符，第一组是**等于和不等于**，他们在比较之前执行转换。第二组是**全等和全不等**，他们在比较之前不执行转换

1. 等于和不等于

等于用两个等于号（==）表示，如果操作数相等，会返回 true  
不等于操作符用叹号和等于号（!=）表示，如果两个操作符不想等，会返回 true

这两个操作符都会先进行类型转换（强制类型转换）再确定操作数是否相等

转换操作数的类型时，相等和不相等操作符遵循如下规则

- 任一操作数是布尔值，将其转换为数值再比较是否相等。f 转换为 0，t 转换为 1；
- 一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，在比较是否相等；
- 一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再根据前面的规则比较；

比较时，会遵循如下规则

- null 和 undefined 相等；
- null 和 undefined 不能转换为其他类型的值再进行比较；
- 有任一操作符是 NaN，则相等操作符返回 false，不相等操作符返回 true。两个操作符都是 NaN 相等操作符返回 false，按照规则 NaN 不等于 NaN；
- 两个操作数都是对象，则比较他们是不是同一个对象，如果两个操作数都指向同一个对象，则相等操作符返回 true，否则两者不相等

|      表达式       | 结果  |
| :---------------: | :---: |
| null == undefined | true  |
|   "NaN" == NaN    | false |
|     5 == NaN      | false |
|    NaN == NaN     | false |
|    NaN != NaN     | true  |
|    false == 0     | true  |
|     true == 1     | true  |
|     true == 2     | false |
|  undefined == 0   | false |
|     null == 0     | false |
|     "5" == 5      | true  |

2. 全等和不全等

他们在比较时不转换操作数，全等操作符由三个等于号（===），只有两个操作数在不转换的前提下相等才返回 true

不全等操作符用一个叹号和两个等于号（!==）表示，只有两个操作数在不转换的前提下不相等才返回 true

虽然 null == undefined 是 true（因为两个值类似），但 null === undefined 是 false，因为它们不是相同的数据类型

> 由于相等和不相等操作符存在类型转换问题，因此推荐使用全等和不全等操作符，有助于在代码中保持数据类型的完整性

#### 条件操作符

条件操作符是 ES 中用途最为广泛的操作符之一

```js
varibale = boolean_expression ? true_value : false_value;
```

如果 boolean_expression 是 true，则赋值 true_value，否则赋值 false_value

```js
const max = num1 > num2 ? num1 : num2;
```

如果 num1 大于 num2（条件表达式为 true），则将 num1 赋值给 max，否则将 num2 赋值给 max

#### 赋值操作符

简单赋值用等于号（=）表示，将右边的值赋值给左边

复合赋值使用乘性、加性或位操作符后跟等于号（=）表示。

```js
let num = 10;
num = num + 10;
```

第二行可以通过复合赋值来完成

```js
let num = 10;
num += 10;
```

每个数学操作符以及其他一些操作符都有对应的复合赋值操作符

- 乘后赋值（\*=）；
- 除后赋值（/=）；
- 取模后赋值（%=）；
- 加后赋值（+=）；
- 减后赋值（-=）；
- 左移后赋值（<<=）；
- 右移后赋值（>>=）；
- 无符号右移后赋值（>>>=）；

#### 逗号操作符

逗号操作符可以用来在一条语句中执行多个操作

```js
const num1 = 1,
  num2 = 2,
  num3 = 3;
```

在一条语句中同时声明多个变量只在逗号操作符最常用的场景

也可以使用逗号操作符来辅助赋值，在赋值时使用逗号操作符分隔值，最终会返回表达式中最后一个值

```js
const num = (5, 1, 4, 8, 0); // num = 0；
```

num 将被赋值 0，因为 0 是表达式中最后一项

### 语句

ES-262 描述了一些语句（流控制语句），大部分语法都体现在语句中

#### if 语句

if 语句是使用最频繁的语句之一

```js
if (condition) statement1 else statement2
```

这里的条件（condition）可以是任何表达式，并且求值结果不一定是布尔值

ES 会自动调用 Boolean()函数将这个表达式的值转换为布尔值。如果求值为 true，则执行语句 statement1；如果为 false，则执行语句 statement2；这里的语句可以是一行代码，亦可以是一个代码块

#### do-while 语句

de-while 语句是一种后测试循环语句，即循环体中的代码块执行后才会对退出条件进行求值

换句话说，循环体内的代码至少执行一次

```js
do {
  statement
} whille (expression);
```

> 后测试循环经常用于这种情形：循环体内代码在退出前至少要执行一次

#### while 语句

while 语句是一种先测是循环，即先检测退出条件，再执行循环体内的代码  
因此，while 循环体内的代码有可能不会执行

```js
while (expression) statement;
```

#### for 语句

for 语句也是先测试语句，只不过增加了进入循环之前的初始化代码，以及循环执行后要执行的表达式

```js
for (initialization; expression; post - loop - expression) statement;
```

无法通过 while 循环实现的逻辑，同样也无法使用 for 循环实现  
for 循环只是将循环相关的代码封装在了一起而已

for 循环的初始化代码中，可以不使用变量声明关键字。不过，初始化定义的迭代器变量在循环执行完成后几乎不可能再用到了  
最清晰的写法是使用 let 声明迭代器变量，这样就可以将这个变量的作用域限定在循环中

初始化、条件表达式和循环后表达式都不是必须的，如果只包含条件表达式，那么 for 循环实际上就变成了 while 循环，这种多功能性使得 for 语句在这门语言中使用非常广泛

```js
let count = 10;
let i = 0;
for (; i < count; ) {
  console.log(i);
  i++;
}
```

#### for-in 语句

for-in 语句是一种严格的迭代语句，用于**枚举对象中的非符号键**属性

```js
for (prorerty in expression) statement;
```

#### for-of 语句

for-of 语句是一种严格的迭代语句，用于**遍历可迭代对象的元素**

```js
for (const el of [2, 4, 6, 8]) {
  document.write(el);
}
```

使用 for-of 语句显示了一个包含四个元素的数组中的所有元素  
循环会一直持续到将所有元素都迭代完

与 for-in 循环一样，控制语句中的 const 也不是必须的，但为了确保局部变量不被修改，推荐使用 const

- 如尝试迭代的变量不支持迭代，则 for-of 会抛出错误

ES2018 对 for-of 语句进行扩展，增加了 for-await-of 循环，用于支持生成期约的异步可迭代对象，详见附录 A

#### 标签语句

标签语句用于给语句加标签，如：

label: statement

例子：

```js
start: for (let i = 0; i < count; i++) {
  console.log(i);
}
```

start 是一个标签，可以在后面通过 break 或 continue 语句引用  
**标签语句的典型应用场景是循环嵌套**

#### break 和 continue 语句

break 和 continue 语句为执行循环代码提供了更严格的控制手段

- break 语句用于立即退出循环，强制执行循环后的下一条语句

- continue 语句也用于立即退出循环，但会再次从循环顶部开始执行

例子详见课本 77 页

#### with 语句

with 语句的用途是将代码**作用域设置为特定的对象**

with (expression) statement;

with 使用场景是针对一个对象反复操作，将代码作用于设置为该对象能提供便利

```js
let qs = location.search.substring(1);
let hostName = location.hostname;
let url = location.href;
```

上面代码都用到了 location 对象，如果使用 with 语句，就可以少写一写代码

```js
with (location) {
  let qs = search.substring(1);
  let hostName = hostname;
  let url = href;
}
```

with 语句用于连接 location 对象，意味着在这个语句内部，每个变量首先会被认为是一个局部变量

**严格模式不允许使用 with 语句，否则抛出错误。同时因为 with 语句影响性能且难于调试其中的代码，通常不推荐在产品代码中使用 with 语句**

#### switch 语句

switch 语句是与 if 语句紧密相关的一种流控制语句，从其他语音借鉴而来

```js
switch (key) {
    case value:

        break;
    ...
    default:
        break;
}
```

详见课本 79 页

### 函数

函数对任何语言来说都是**核心组件**，它们可以封装语句，然后在任何地方、任何时间执行

ES 中函数使用 function 关键字声明

```js
function name(arg0,...,argN){
    statements
}
```

通过函数名来调用函数，要传给函数的参数放在括号中（多个参数用逗号隔开）

- ES 中函数不需要指定是否返回值，任何函数都可以使用 return 语句来返回函数的值，用法是后跟返回的值

- 除了 return 语句之外没有任何特殊声明表明该函数有返回值

- 只要碰到 ruturn 语句，函数会立即停止执行并退出，return 后面代码不会被执行

- 一个函数里也可以有多个 return 语句

```js
function diff(num1, num2) {
  if (num1 < num2) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }
}
```

- return 语句也可以不带返回值，函数会立即停止执行并返回 undefined。**常用于提前终止函数执行，并不是为了返回值**。
