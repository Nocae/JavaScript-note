# Date

在不给 Date 构造函数传参的情况下，对象将保存当前日期和时间。要基于其他日期和时间创建日期对象，必须传入其毫秒表示。

两个辅助方法：Date.parse()、Date.UTC()

- Date.parse()接收一个表示日期的字符串参数，将这个字符串转换为表示日期的毫秒数

  - “月/日/年”，如"5/23/2019"；

  - “月名 日, 年”，如"May 23, 2019"；

  - “周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；

  - ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00;（只适用于兼容 ES5 的实现）

如果传给 Date.parse()的字符串并不表示日期，则该方法会返回 NaN。如果直接把表示日期的字符串传给 Date 构造函数，那么 Date 会在后台调用 Date.parse()

```js
let someDate = new Date("May 23, 2019");
```

- Date.UTC()方法也返回日期的毫秒表示，但使用的是跟 Date.parse()不同的信息来生成这个值。

传给 Date.UTC()的参数是年、零起点月数（1 月是 0，2 月是 1，以此类推）、日（1~31）、时（0~23）、分、秒和毫秒。这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为 1 日。其他参数的默认值都是 0。

与 Date.parse()一样，Date.UTC()也会被 Date 构造函数隐式调用，但有一个区别：这种情况下创建的是本地日期，不是 GMT 日期。不过 Date 构造函数跟 Date.UTC()接收的参数是一样的。

- ECMAScript 还提供了 Date.now()方法，返回表示方法**执行时日期和时间**的毫秒数。

## 继承的方法

Date 类型重写了 toLocaleString()、toString()和 valueOf()方法。

但与其他类型不同，重写后这些方法的返回值不一样。Date 类型的 toLocaleString()方法返回与浏览器运行的本地环境一致的日期和时间。这通常意味着格式中包含针对时间的 AM（上午）或 PM（下午），但不包含时区信息（具体格式可能因浏览器而不同）

toString()方法通常返回带时区信息的日期和时间，而时间也是以 24 小时制（0~23）表示的

```js
let date = new Date();

console.log(date.toLocaleString()); // 2021/10/11 上午9:11:05
console.log(date.toString()); // Mon Oct 11 2021 09:11:05 GMT+0800 (中国标准时间)
```

在比较老的浏览器上，每个方法返回的结果可能在每个浏览器上都是不同的。这些差异意味着 toLocaleString()和 toString()可能只对调试有用，不能用于显示

Date 类型的 valueOf()方法根本就不返回字符串，这个方法被重写后返回的是日期的毫秒表示。因此，操作符（如小于号和大于号）可以直接使用它返回的值

## 日期格式化方法

Date 类型有几个专门用于格式化日期的方法，它们都会返回字符串：

- toDateString()显示日期中的周几、月、日、年（格式特定于实现）；

- toTimeString()显示日期中的时、分、秒和时区（格式特定于实现）；

- toLocaleDateString()显示日期中的周几、月、日、年（格式特定于实现和地区）；

- toLocaleTimeString()显示日期中的时、分、秒（格式特定于实现和地区）；

- toUTCString()显示完整的 UTC 日期（格式特定于实现）。

这些方法的输出与 toLocaleString()和 toString()一样，会因浏览器而异。因此不能用于在用户界面上一致地显示日期

```js
let date = new Date();

console.log(date.toDateString()); // Mon Oct 11 2021

console.log(date.toTimeString()); // 09:24:01 GMT+0800 (中国标准时间)

console.log(date.toLocaleDateString()); // 2021/10/11

console.log(date.toLocaleTimeString()); // 上午9:24:01

console.log(date.toUTCString()); // Mon, 11 Oct 2021 01:24:01 GMT
```

## 日期/时间组件方法

Date 类型剩下的方法（见下表）直接涉及取得或设置日期值的特定部分。注意表中“UTC 日期”，指的是没有时区偏移（将日期转换为 GMT）时的日期

![日期/时间组件方法](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011092732066.png)

![日期/时间组件方法](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011092814528.png)

# RegExp

ECMAScript 通过 RegExp 类型支持正则表达式。正则表达式使用类似 Perl 的简洁语法来创建

```js
let expression = /pattern/flags;
```

这个正则表达式的 pattern（模式）可以是任何简单或复杂的正则表达式，包括字符类、限定符、分组、向前查找和反向引用。每个正则表达式可以带零个或多个 flags（标记），用于控制正则表达式的行为。下面给出了表示匹配模式的标记

- g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。

- i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。

- m：多行模式，表示查找到一行文本末尾时会继续查找。

- y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。

- u：Unicode 模式，启用 Unicode 匹配。

- s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。

```js
// 匹配字符串中的所有"at"
let pattern1 = /at/g;

// 匹配第一个"bat"或"cat"，忽略大小写
let pattern2 = /[bc]at/i;

// 匹配所有以"at"结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi;
```

所有元字符在模式中必须转义,包括：( [ { \ ^ $ | ) ] } ? \* + .

元字符在正则表达式中都有一种或多种特殊功能，所以要匹配上面这些字符本身，就必须使用反斜杠来转义。下面是几个例子

```js
// 匹配第一个"bat"或"cat"，忽略大小写
let pattern1 = /[bc]at/i;

// 匹配第一个"[bc]at"，忽略大小写
let pattern2 = /\[bc\]at/i;

// 匹配所有以"at"结尾的三字符组合，忽略大小写
let pattern3 = /.at/gi;

// 匹配所有".at"，忽略大小写
let pattern4 = /\.at/gi;
```

前面例子中的正则表达式都是使用字面量形式定义的。正则表达式也可以使用 RegExp 构造函数来创建，它接收两个参数：模式字符串和（可选的）标记字符串。任何使用字面量定义的正则表达式也可以通过构造函数来创建

```js
// 匹配第一个"bat"或"cat"，忽略大小写
let pattern1 = /[bc]at/i;

// 跟pattern1 一样，只不过是用构造函数创建的
let pattern2 = new RegExp("[bc]at", "i");
```

因为 RegExp 的模式参数是字符串，所以在某些情况下需要二次转义。所有元字符都必须二次转义，包括转义字符序列，如\n（\转义后的字符串是\\，在正则表达式字符串中则要写成\\\\）

![正则表达式的字面量](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011095810822.png)

使用 RegExp 也可以基于已有的正则表达式实例，并可选择性地修改它们的标记

```js
const re1 = /cat/g;
console.log(re1); // "/cat/g"

const re2 = new RegExp(re1);
console.log(re2); // "/cat/g"

const re3 = new RegExp(re1, "i");
console.log(re3); // "/cat/i"
```

### RegExp 实例属性

每个 RegExp 实例都有下列属性，提供有关模式的各方面信息。

- global：布尔值，表示是否设置了 g 标记。

- ignoreCase：布尔值，表示是否设置了 i 标记。

- unicode：布尔值，表示是否设置了 u 标记。

- sticky：布尔值，表示是否设置了 y 标记。

- lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从 0 开始。

- multiline：布尔值，表示是否设置了 m 标记。

- dotAll：布尔值，表示是否设置了 s 标记。

- source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有开头和结尾的斜杠。
- flags：正则表达式的标记字符串。始终以字面量而非传入构造函数的字符串模式形式返回（没有前后斜杠）。

通过这些属性可以全面了解正则表达式的信息，不过实际开发中用得并不多，因为模式声明中包含这些信息

```js
let pattern1 = /\[bc\]at/i;

console.log(pattern1.global); // false
console.log(pattern1.ignoreCase); // true
console.log(pattern1.multiline); // false
console.log(pattern1.lastIndex); // 0
console.log(pattern1.source); // "\[bc\]at"
console.log(pattern1.flags); // "i"

let pattern2 = new RegExp("\\[bc\\]at", "i");

console.log(pattern2.global); // false
console.log(pattern2.ignoreCase); // true
console.log(pattern2.multiline); // false
console.log(pattern2.lastIndex); // 0
console.log(pattern2.source); // "\[bc\]at"
console.log(pattern2.flags); // "i"
```

虽然第一个模式是通过字面量创建的，第二个模式是通过 RegExp 构造函数创建的，但两个模式的 source 和 flags 属性是相同的

source 和 flags 属性返回的是规范化之后可以在字面量中使用的形式

## RegExp 实例方法

RegExp 实例的主要方法是 exec()，主要用于配合捕获组使用。这个方法只接收一个参数，即要应用模式的字符串。如果找到了匹配项，则返回包含第一个匹配信息的数组；如果没找到匹配项，则返回 null

返回的数组虽然是 Array 的实例，但包含两个额外的属性：index 和 input

**index 是字符串中匹配模式的起始位置，input 是要查找的字符串**

这个数组的第一个元素是匹配整个模式的字符串，其他元素是与表达式中的捕获组匹配的字符串。如果模式中没有捕获组，则数组只包含一个元素

```js
let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;
let matches = pattern.exec(text);

console.log(matches.index); // 0
console.log(matches.input); // "mom and dad and baby"
console.log(matches[0]); // "mom and dad and baby"
console.log(matches[1]); // " and dad and baby"
console.log(matches[2]); // " and baby"
```

在这个例子中，模式包含两个捕获组：最内部的匹配项" and baby"，以及外部的匹配项" and dad"或" and dad and baby"。调用 exec()后找到了一个匹配项。因为整个字符串匹配模式，所以 matchs 数组的 index 属性就是 0。数组的第一个元素是匹配的整个字符串，第二个元素是匹配第一个捕获组的字符串，第三个元素是匹配第二个捕获组的字符串。

如果模式设置了全局标记，则每次调用 exec()方法会返回一个匹配的信息。如果没有设置全局标记，则无论对同一个字符串调用多少次 exec()，也只会返回第一个匹配的信息

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = pattern.exec(text);

console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern.lastIndex); // 0
matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern.lastIndex); // 0
```

上面例子中的模式没有设置全局标记，因此调用 exec()只返回第一个匹配项（"cat"）。lastIndex 在非全局模式下始终不变。

如果在这个模式上设置了 g 标记，则每次调用 exec()都会在字符串中向前搜索下一个匹配项

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/g;
let matches = pattern.exec(text);

console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern.lastIndex); // 3
matches = pattern.exec(text);
console.log(matches.index); // 5
console.log(matches[0]); // bat
console.log(pattern.lastIndex); // 8
matches = pattern.exec(text);
console.log(matches.index); // 10
console.log(matches[0]); // sat
console.log(pattern.lastIndex); // 13
```

这次模式设置了全局标记，因此每次调用 exec()都会返回字符串中的下一个匹配项，直到搜索到字符串末尾。注意模式的 lastIndex 属性每次都会变化。

在全局匹配模式下，每次调用 exec()都会更新 lastIndex 值，以反映上次匹配的最后一个字符的索引

如果模式设置了粘附标记 y，则每次调用 exec()就只会在 lastIndex 的位置上寻找匹配项。粘附标记覆盖全局标记

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/y;
let matches = pattern.exec(text);

console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern.lastIndex); // 3

// 以索引3 对应的字符开头找不到匹配项，因此exec()返回null
// exec()没找到匹配项，于是将lastIndex 设置为0
matches = pattern.exec(text);
console.log(matches); // null
console.log(pattern.lastIndex); // 0

// 向前设置lastIndex 可以让粘附的模式通过exec()找到下一个匹配项：
pattern.lastIndex = 5;
matches = pattern.exec(text);
console.log(matches.index); // 5
console.log(matches[0]); // bat
console.log(pattern.lastIndex); // 8
```

正则表达式的另一个方法是 test()，接收一个字符串参数。如果输入的文本与模式匹配，则参数返回 true，否则返回 false。这个方法适用于只想测试模式是否匹配，而不需要实际匹配内容的情况。test()经常用在 if 语句中

```js
let text = "000-00-0000";
let pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)) {
  console.log("The pattern was matched.");
}
```

在这个例子中，正则表达式用于测试特定的数值序列。如果输入的文本与模式匹配，则显示匹配成功的消息。这个用法常用于验证用户输入，此时我们只在乎输入是否有效，不关心为什么无效。

无论正则表达式是怎么创建的，继承的方法 toLocaleString()和 toString()都返回正则表达式的字面量表示

```js
let pattern = new RegExp("\\[bc\\]at", "gi");

console.log(pattern.toString()); // /\[bc\]at/gi
console.log(pattern.toLocaleString()); // /\[bc\]at/gi
```

这里的模式是通过 RegExp 构造函数创建的，但 toLocaleString()和 toString()返回的都是其字面量的形式

> 正则表达式的 valueOf()方法返回正则表达式本身

## RegExp 构造函数属性

RegExp 构造函数本身也有几个属性。（在其他语言中，这种属性被称为静态属性。）这些属性适用于作用域中的所有正则表达式，而且会根据最后执行的正则表达式操作而变化。这些属性还有一个特点，就是可以通过两种不同的方式访问它们。换句话说，每个属性都有一个全名和一个简写

![RegExp 构造函数的属性](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011102929145.png)

属性名也可以替换成简写形式，只不过要使用中括号语法来访问，如下面的例子所示，因为大多数简写形式都不是合法的 ECMAScript 标识符

```js
let text = "this has been a short summer";
let pattern = /(.)hort/g;
/*
 * 注意：Opera 不支持简写属性名
 * IE 不支持多行匹配
 */
if (pattern.test(text)) {
  console.log(RegExp.$_); // this has been a short summer
  console.log(RegExp["$`"]); // this has been a
  console.log(RegExp["$'"]); // summer
  console.log(RegExp["$&"]); // short
  console.log(RegExp["$+"]); // s
}
```

RegExp 还有其他几个构造函数属性，可以存储最多 9 个捕获组的匹配项。这些属性通过 RegExp.$1~RegExp.$9 来访问，分别包含第 1~9 个捕获组的匹配项。在调用 exec()或 test()时，这些属性就会被填充

```js
let text = "this has been a short summer";
let pattern = /(..)or(.)/g;
if (pattern.test(text)) {
  console.log(RegExp.$1); // sh
  console.log(RegExp.$2); // t
}
```

在这个例子中，模式包含两个捕获组。调用 test()搜索字符串之后，因为找到了匹配项所以返回 true，而且可以打印出通过 RegExp 构造函数的$1 和$2 属性取得的两个捕获组匹配的内容。

> RegExp 构造函数的所有属性都没有任何 Web 标准出处，因此不要在生产环境中使
> 用它们

## 模式局限

虽然 ECMAScript 对正则表达式的支持有了长足的进步，但仍然缺少 Perl 语言中的一些高级特性。

下列特性目前还没有得到 ECMAScript 的支持（想要了解更多信息，可以参考 Regular-Expressions.info 网站）：

- \A 和\Z 锚（分别匹配字符串的开始和末尾）
- 联合及交叉类
- 原子组
- x（忽略空格）匹配模式
- 条件式匹配
- 正则表达式注释

> 虽然还有这些局限，但 ECMAScript 的正则表达式已经非常强大，可以用于大多数模式匹配任务

# 原始值包装类型

为了方便操作原始值，ECMAScript 提供了 3 种特殊的引用类型：Boolean、Number 和 String。这些类型具有本章介绍的其他引用类型一样的特点，但也具有与各自原始类型对应的特殊行为。

每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象，从而暴露出操作原始值的各种方法

```js
let s1 = "some text";
let s2 = s1.substring(2); // me text
```

，s1 是一个包含字符串的变量，它是一个原始值。第二行紧接着在 s1 上调用了 substring()方法，并把结果保存在 s2 中，原始值本身不是对象，因此逻辑上不应该有方法。而实际上这个例子又确实按照预期运行了。第二行访问 s1 时，是以读模式访问的，也就是要从内存中读取变量保存的值

- 创建一个 String 类型的实例；

- 调用实例上的特定方法；

- 销毁实例;

```js
let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;
```

这种行为可以让原始值拥有对象的行为。对布尔值和数值而言，以上 3 步也会在后台发生，只不过使用的是 Boolean 和 Number 包装类型而已。

引用类型与原始值包装类型的主要区别在于对象的生命周期。在通过 new 实例化引用类型后，得到的实例会在离开作用域时被销毁，而自动创建的原始值包装对象则只存在于访问它的那行代码执行期间。这意味着不能在运行时给原始值添加属性和方法。

```js
let s1 = "some text";
s1.color = "red";
console.log(s1.color); // undefined
```

这里的第二行代码尝试给字符串 s1 添加了一个 color 属性。可是，第三行代码访问 color 属性时，它却不见了。原因就是第二行代码运行时会临时创建一个 String 对象，而当第三行代码执行时，这个对象已经被销毁了。实际上，第三行代码在这里创建了自己的 String 对象，但这个对象没有 color 属性。

可以显式地使用 Boolean、Number 和 String 构造函数创建原始值包装对象。不过应该在确实必要时再这么做，否则容易让开发者疑惑，分不清它们到底是原始值还是引用值。在原始值包装类型的实例上调用 typeof 会返回"object"，所有原始值包装对象都会转换为布尔值 true。

另外，Object 构造函数作为一个工厂方法，能够根据传入值的类型返回相应原始值包装类型的实例

```js
let obj = new Object("some text");
console.log(obj instanceof String); // true
```

如果传给 Object 的是字符串，则会创建一个 String 的实例。如果是数值，则会创建 Number 的实例。布尔值则会得到 Boolean 的实例。

注意，使用 new 调用原始值包装类型的构造函数，与调用同名的转型函数并不一样。

```js
let value = "25";
let number = Number(value); // 转型函数
console.log(typeof number); // "number"
let obj = new Number(value); // 构造函数
console.log(typeof obj); // "object"
```

在这个例子中，变量 number 中保存的是一个值为 25 的原始数值，而变量 obj 中保存的是一个 Number 的实例。

虽然不推荐显式创建原始值包装类型的实例，但它们对于操作原始值的功能是很重要的。每个原始值包装类型都有相应的一套方法来方便数据操作

## Boolean

Boolean 是对应布尔值的引用类型。要创建一个 Boolean 对象，就使用 Boolean 构造函数并传入 true 或 false

```js
let booleanObject = new Boolean(true);
```

Boolean 的实例会重写 valueOf()方法，返回一个原始值 true 或 false。toString()方法被调用时也会被覆盖，返回字符串"true"或"false"。不过，Boolean 对象在 ECMAScript 中用得很少。不仅如此，它们还容易引起误会，尤其是在布尔表达式中使用 Boolean 对象时

```js
let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); // true

let falseValue = false;
result = falseValue && true;
console.log(result); // false
```

在这段代码中，我们创建一个值为 false 的 Boolean 对象。然后，在一个布尔表达式中通过&&操作将这个对象与一个原始值 true 组合起来。在布尔算术中，false && true 等于 false。可是，这个表达式是对 falseObject 对象而不是对它表示的值（false）求值。前面刚刚说过，所有对象在布尔表达式中都会自动转换为 true，因此 falseObject 在这个表达式里实际上表示一个 true 值。那么 true && true 当然是 true

除此之外，原始值和引用值（Boolean 对象）还有几个区别。首先，typeof 操作符对原始值返回"boolean"，但对引用值返回"object"。同样，Boolean 对象是 Boolean 类型的实例，在使用 instaceof 操作符时返回 true，但对原始值则返回 false

```js
console.log(typeof falseObject); // object
console.log(typeof falseValue); // boolean
console.log(falseObject instanceof Boolean); // true
console.log(falseValue instanceof Boolean); // false
```

> 理解原始布尔值和 Boolean 对象之间的区别非常重要，强烈建议永远不要使用后者

## Number

Number 是对应数值的引用类型。要创建一个 Number 对象，就使用 Number 构造函数并传入一个数值

```js
let numberObject = new Number(10);
```

Number 类型重写了 valueOf()、toLocaleString()和 toString()方法。valueOf()方法返回 Number 对象表示的原始数值，另外两个方法返回数值字符串

toString()方法可选地接收一个表示基数的参数，并返回相应基数形式的数值字符串

```js
let num = 10;

console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
```

除了继承的方法，Number 类型还提供了几个用于将数值格式化为字符串的方法。

- toFixed()方法返回包含指定小数点位数的数值字符串

```js
let num = 10;
console.log(num.toFixed(2)); // "10.00"
```

toFixed()方法接收了参数 2，表示返回的数值字符串要包含两位小数。结果返回值为"10.00"，小数位填充了 0。如果数值本身的小数位超过了参数指定的位数，则四舍五入到最接近的小数位

```js
let num = 10.005;
console.log(num.toFixed(2)); // "10.01"
```

toFixed()自动舍入的特点可以用于处理货币。不过要注意的是，多个浮点数值的数学计算不一定得到精确的结果

> toFixed()方法可以表示有 0~20 个小数位的数值。某些浏览器可能支持更大的范
> 围，但这是通常被支持的范围

- 另一个用于格式化数值的方法是 toExponential()，返回以科学记数法（也称为指数记数法）表示的数值字符串

toExponential()接收一个参数，表示结果中小数的位数

```js
let num = 10;
console.log(num.toExponential(1)); // "1.0e+1"
```

这段代码的输出为"1.0e+1"。一般来说，这么小的数不用表示为科学记数法形式。如果想得到数值最适当的形式，那么可以使用 toPrecision()

- toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式

toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式。这个方法接收一个参数，表示结果中数字的总位数（不包含指数）

```js
let num = 99;
console.log(num.toPrecision(1)); // "1e+2"
console.log(num.toPrecision(2)); // "99"
console.log(num.toPrecision(3)); // "99.0"
```

在这个例子中，首先要用 1 位数字表示数值 99，得到"1e+2"，也就是 100。因为 99 不能只用 1 位数字来精确表示，所以这个方法就将它舍入为 100，这样就可以只用 1 位数字（及其科学记数法形式）来表示了

用 2 位数字表示 99 得到"99"，用 3 位数字则是"99.0"。本质上，toPrecision()方法会根据数值和精度来决定调用 toFixed()还是 toExponential()

为了以正确的小数位精确表示数值，这 3 个方法都会向上或向下舍入

> toPrecision()方法可以表示带 1~21 个小数位的数值。某些浏览器可能支持更大
> 的范围，但这是通常被支持的范围

与 Boolean 对象类似，Number 对象也为数值提供了重要能力。但是，考虑到两者存在同样的潜在问题，因此并不建议直接实例化 Number 对象。在处理原始数值和引用数值时，typeof 和 instacnceof 操作符会返回不同的结果

```js
let numberObject = new Number(10);
let numberValue = 10;

console.log(typeof numberObject); // "object"
console.log(typeof numberValue); // "number"
console.log(numberObject instanceof Number); // true
console.log(numberValue instanceof Number); // false
```

原始数值在调用 typeof 时始终返回"number"，而 Number 对象则返回"object"。类似地，Number 对象是 Number 类型的实例，而原始数值不是

- isInteger()方法与安全整数

ES6 新增了 Number.isInteger()方法，用于辨别一个数值是否保存为整数。有时候，小数位的 0。可能会让人误以为数值是一个浮点值

```js
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(1.01)); // false
```

IEEE 754 数值格式有一个特殊的数值范围，在这个范围内二进制值可以表示一个整数值。这个数值范围从 Number.MIN_SAFE_INTEGER（-2^53 + 1）到 Number.MAX_SAFE_INTEGER（2^53 - 1）。对超出这个范围的数值，即使尝试保存为整数，IEEE 754 编码格式也意味着二进制值可能会表示一个完全不同的数值。

为了鉴别整数是否在这个范围内，可以使用 Number.isSafeInteger()

```js
console.log(Number.isSafeInteger(-1 * 2 ** 53)); // false
console.log(Number.isSafeInteger(-1 * 2 ** 53 + 1)); // true

console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
```

## String

String 是对应字符串的引用类型。要创建一个 String 对象，使用 String 构造函数并传入一个数值

```js
let stringObject = new String("hello world");
```

String 对象的方法可以在所有字符串原始值上调用。3 个继承的方法 valueOf()、toLocaleString()和 toString()都返回对象的原始字符串值。

每个 String 对象都有一个 length 属性，表示字符串中字符的数量

```js
let stringValue = "hello world";
console.log(stringValue.length); // "11"
```

这个例子输出了字符串"hello world"中包含的字符数量：11。注意，即使字符串中包含双字节字符（而不是单字节的 ASCII 字符），也仍然会按单字符来计数

String 类型提供了很多方法来解析和操作字符串

### JavaScript 字符

JavaScript 字符串由 16 位码元（code unit）组成。对多数字符来说，每 16 位码元对应一个字符。换句话说，字符串的 length 属性表示字符串包含多少 16 位码元

```js
let message = "abcde";
console.log(message.length); // 5
```

**charAt()方法返回给定索引位置的字符**，由传给方法的整数参数指定。具体来说，这个方法查找指定索引位置的 16 位码元，并返回该码元对应的字符

```js
let message = "abcde";
console.log(message.charAt(2)); // "c"
```

JavaScript 字符串使用了两种 Unicode 编码混合的策略：UCS-2 和 UTF-16。对于可以采用 16 位编码的字符（U+0000~U+FFFF），这两种编码实际上是一样的

使用**charCodeAt()方法可以查看指定码元的字符编码**。这个方法返回指定索引位置的码元值，索引以整数指定

```JS
let message = "abcde";
// Unicode "Latin small letter C"的编码是U+0063
console.log(message.charCodeAt(2)); // 99
// 十进制99 等于十六进制63
console.log(99 === 0x63); // true
```

fromCharCode()方法用于根据给定的 UTF-16 码元创建字符串中的字符。这个方法可以接受任意多个数值，并返回将所有数值对应的字符拼接起来的字符串

```js
// Unicode "Latin small letter A"的编码是U+0061
// Unicode "Latin small letter B"的编码是U+0062
// Unicode "Latin small letter C"的编码是U+0063
// Unicode "Latin small letter D"的编码是U+0064
// Unicode "Latin small letter E"的编码是U+0065
console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // "abcde"
// 0x0061 === 97
// 0x0062 === 98
// 0x0063 === 99
// 0x0064 === 100
// 0x0065 === 101
console.log(String.fromCharCode(97, 98, 99, 100, 101)); // "abcde"
```

对于 U+0000~U+FFFF 范围内的字符，length、charAt()、charCodeAt()和 fromCharCode()返回的结果都跟预期是一样的。这是因为在这个范围内，每个字符都是用 16 位表示的，而这几个方法也都基于 16 位码元完成操作。只要字符编码大小与码元大小一一对应，这些方法就能如期工作。

这个对应关系在扩展到 Unicode 增补字符平面时就不成立了。问题很简单，即 16 位只能唯一表示 65 536 个字符。这对于大多数语言字符集是足够了，在 Unicode 中称为基本多语言平面（BMP）。为了表示更多的字符，Unicode 采用了一个策略，即每个字符使用另外 16 位去选择一个增补平面。这种每个字符使用两个 16 位码元的策略称为代理对。

在涉及增补平面的字符时，前面讨论的字符串方法就会出问题。比如，下面的例子中使用了一个笑脸表情符号，也就是一个使用代理对编码的字符

```js
// "smiling face with smiling eyes" 表情符号的编码是U+1F60A
// 0x1F60A === 128522
let message = "ab☺de";
console.log(message.length); // 6
console.log(message.charAt(1)); // b
console.log(message.charAt(2)); // <?>
console.log(message.charAt(3)); // <?>
console.log(message.charAt(4)); // d
console.log(message.charCodeAt(1)); // 98
console.log(message.charCodeAt(2)); // 55357
console.log(message.charCodeAt(3)); // 56842
console.log(message.charCodeAt(4)); // 100
console.log(String.fromCodePoint(0x1f60a)); // ☺
console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab☺de
```

这些方法仍然将 16 位码元当作一个字符，事实上索引 2 和索引 3 对应的码元应该被看成一个代理对，只对应一个字符。fromCharCode()方法仍然返回正确的结果，因为它实际上是基于提供的二进制表示直接组合成字符串。浏览器可以正确解析代理对（由两个码元构成），并正确地将其识别为一个 Unicode 笑脸字符

为正确解析既包含单码元字符又包含代理对字符的字符串，可以使用 codePointAt()来代替 charCodeAt()。跟使用 charCodeAt()时类似，codePointAt()接收 16 位码元的索引并返回该索引位置上的码点（code point）。码点是 Unicode 中一个字符的完整标识。比如，"c"的码点是 0x0063，而"☺"的码点是 0x1F60A。码点可能是 16 位，也可能是 32 位，而 codePointAt()方法可以从指定码元位置识别完整的码点

```js
let message = "ab☺de";
console.log(message.codePointAt(1)); // 98
console.log(message.codePointAt(2)); // 128522
console.log(message.codePointAt(3)); // 56842
console.log(message.codePointAt(4)); // 100
```

注意，如果传入的码元索引并非代理对的开头，就会返回错误的码点。这种错误只有检测单个字符的时候才会出现，可以通过从左到右按正确的码元数遍历字符串来规避。迭代字符串可以智能地识别代理对的码点

```js
console.log([..."ab☺de"]); // ["a", "b", "☺", "d", "e"]
```

与 charCodeAt()有对应的 codePointAt()一样，fromCharCode()也有一个对应的 fromCodePoint()。这个方法接收任意数量的码点，返回对应字符拼接起来的字符串

```js
console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab☺de
console.log(String.fromCodePoint(97, 98, 128522, 100, 101)); // ab☺de
```

### 字符串操作方法

- concat()，用于将一个或多个字符串拼接成一个新字符串;

concat()方法可以接收任意多个参数，因此可以一次性拼接多个字符串

```js
let stringValue = "hello ";
let result = stringValue.concat("world", "!");
console.log(result); // "hello world!"
console.log(stringValue); // "hello"
```

虽然 concat()方法可以拼接字符串，但更常用的方式是使用加号操作符（+）。而且多数情况下，对于拼接多个字符串来说，使用加号更方便。

- ECMAScript 提供了 3 个从字符串中提取子字符串的方法：slice()、substr()和 substring()

对 slice()和 substring()而言，第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）。对 substr()而言，第二个参数表示返回的子字符串数量。

任何情况下，省略第二个参数都意味着提取到字符串末尾。与 concat()方法一样，slice()、substr()和 substring()也不会修改调用它们的字符串，而只会返回提取到的原始新字符串值

当某个参数是负值时，这 3 个方法的行为又有不同。比如，slice()方法将所有负值参数都当成字符串长度加上负参数值。

而 substr()方法将第一个负参数值当成字符串长度加上该值，将第二个负参数值转换为 0。substring()方法会将所有负参数值都转换为 0

见课本 121 页

### 字符串位置方法

有两个方法用于在字符串中定位子字符串：indexOf()和 lastIndexOf()。这两个方法从字符串中搜索传入的字符串，并返回位置（如果没找到，则返回-1）

两者的区别在于，indexOf()方法从字符串开头开始查找子字符串，而 lastIndexOf()方法从字符串末尾开始查找子字符串

```js
let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7
```

这两个方法都可以接收可选的第二个参数，表示开始搜索的位置。这意味着，indexOf()会从这个参数指定的位置开始向字符串末尾搜索，忽略该位置之前的字符；lastIndexOf()则会从这个参数指定的位置开始向字符串开头搜索，忽略该位置之后直到字符串末尾的字符

```js
let stringValue = "hello world";
console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4
```

像这样使用第二个参数并循环调用 indexOf()或 lastIndexOf()，就可以在字符串中找到所有的目标子字符串

```js
let stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let positions = new Array();
let pos = stringValue.indexOf("e");

while (pos > -1) {
  positions.push(pos);
  pos = stringValue.indexOf("e", pos + 1);
}

console.log(positions); // 写的太好了
```

### 字符串包含方法

ECMAScript 6 增加了 3 个用于判断字符串中是否包含另一个字符串的方法：startsWith()、endsWith()和 includes()。这些方法都会从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值。它们的区别在于，startsWith()检查开始于索引 0 的匹配项，endsWith()检查开始于索引(string.length - substring.length)的匹配项，而 includes()检查整个字符串

```js
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false
console.log(message.endsWith("baz")); // true
console.log(message.endsWith("bar")); // false
console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false
```

startsWith()和 includes()方法**接收可选的第二个参数，表示开始搜索的位置**。如果传入第二个参数，则意味着这两个方法会从**指定位置向着字符串末尾搜索**，忽略该位置之前的所有字符

```js
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("foo", 1)); // false
console.log(message.includes("bar")); // true
console.log(message.includes("bar", 4)); // false
```

endsWith()方法接收可选的第二个参数，表示应该**当作字符串末尾的位置**。如果不提供这个参数，那么默认就是字符串长度。如果提供这个参数，那么就好像字符串只有那么多字符一样

```js
let message = "foobarbaz";
console.log(message.endsWith("bar")); // false
console.log(message.endsWith("bar", 6)); // true
```

### trim()方法

ECMAScript 在所有字符串上都提供了 trim()方法。这个方法会**创建字符串的一个副本，删除前、后所有空格符**，再返回结果

```js
let stringValue = " hello world ";
let trimmedStringValue = stringValue.trim();
console.log(stringValue); // " hello world "
console.log(trimmedStringValue); // "hello world"
```

由于 trim()返回的是字符串的副本，因此原始字符串不受影响，即原本的前、后空格符都会保留

另外，**trimLeft()和 trimRight()方法分别用于从字符串开始和末尾清理空格符**

### repeat()方法

ECMAScript 在所有字符串上都提供了 repeat()方法。这个方法**接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果**

```js
let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman
```

### padStart()和 padEnd()方法

padStart()和 padEnd()方法会**复制字符串，如果小于指定长度，则在相应一边填充字符**，直至满足长度条件。这两个方法的**第一个参数是长度，第二个参数是可选的填充字符串**，默认为空格（U+0020）

```js
let stringValue = "foo";
console.log(stringValue.padStart(6)); // " foo"
console.log(stringValue.padStart(9, ".")); // "......foo"
console.log(stringValue.padEnd(6)); // "foo "
console.log(stringValue.padEnd(9, ".")); // "foo......"
```

可选的**第二个参数并不限于一个字符**。如果提供了多个字符的字符串，则会将其拼接并截断以匹配指定长度。此外，如果长度小于或等于字符串长度，则会返回原始字符串

```js
let stringValue = "foo";
console.log(stringValue.padStart(8, "bar")); // "barbafoo"
console.log(stringValue.padStart(2)); // "foo"
console.log(stringValue.padEnd(8, "bar")); // "foobarba"
console.log(stringValue.padEnd(2)); // "foo"
```

### 字符串迭代与解构

字符串的原型上暴露了一个@@iterator 方法，表示可以迭代字符串的每个字符

可以像下面这样手动使用迭代器：

```js
let message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next()); // {value: "a", done: false}
console.log(stringIterator.next()); // {value: "b", done: false}
console.log(stringIterator.next()); // {value: "c", done: false}
console.log(stringIterator.next()); // {value: undefined, done: true}
```

在 for-of 循环中可以通过这个迭代器按序访问每个字符：

```js
for (const c of "abcde") {
  console.log(c);
}
// a
// b
// c
// d
// e
```

有了这个迭代器之后，字符串就可以通过解构操作符来解构了。比如，可以更方便地把字符串分割为字符数组:

```js
let message = "abcde";
console.log([...message]); // ["a", "b", "c", "d", "e"]
```

### 字符串大小写转换

下一组方法涉及大小写转换，包括 4 个方法：toLowerCase()、toLocaleLowerCase()、toUpperCase()和 toLocaleUpperCase()。toLowerCase()和 toUpperCase()方法是原来就有的方法，与 java.lang.String 中的方法同名。toLocaleLowerCase()和 toLocaleUpperCase()方法旨在基于特定地区实现。在很多地区，地区特定的方法与通用的方法是一样的。但在少数语言中（如土耳其语），Unicode 大小写转换需应用特殊规则，要使用地区特定的方法才能实现正确转换

```js
let stringValue = "hello world";
console.log(stringValue.toLocaleUpperCase()); // "HELLO WORLD"
console.log(stringValue.toUpperCase()); // "HELLO WORLD"
console.log(stringValue.toLocaleLowerCase()); // "hello world"
console.log(stringValue.toLowerCase()); // "hello world"
```

这里，toLowerCase()和 toLocaleLowerCase()都返回 hello world，而 toUpperCase()和 toLocaleUpperCase()都返回 HELLO WORLD。通常，如果不知道代码涉及什么语言，则最好使用地区特定的转换方法。

### 字符串模式匹配方法

String 类型专门为在字符串中实现模式匹配设计了几个方法。第一个就是 match()方法，这个方法本质上跟 RegExp 对象的 exec()方法相同。match()方法接收一个参数，可以是一个正则表达式字符串，也可以是一个 RegExp 对象

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/;
// 等价于pattern.exec(text)
let matches = text.match(pattern);
console.log(matches.index); // 0
console.log(matches[0]); // "cat"
console.log(pattern.lastIndex); // 0
```

match()方法返回的数组与 RegExp 对象的 exec()方法返回的数组是一样的：第一个元素是与整个模式匹配的字符串，其余元素则是与表达式中的捕获组匹配的字符串（如果有的话）
另一个查找模式的字符串方法是 search()。这个方法唯一的参数与 match()方法一样：正则表达式字符串或 RegExp 对象。这个方法返回模式第一个匹配的位置索引，如果没找到则返回-1。search()始终从字符串开头向后匹配模式

```js
let text = "cat, bat, sat, fat";
let pos = text.search(/at/);
console.log(pos); // 1
```

这里，search(/at/)返回 1，即"at"的第一个字符在字符串中的位置

为简化子字符串替换操作，ECMAScript 提供了 replace()方法。这个方法接收两个参数，第一个参数可以是一个 RegExp 对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数。如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记

```js
let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"
result = text.replace(/at/g, "ond");
console.log(result); // "cond, bond, sond, fond"
```

在这个例子中，字符串"at"先传给 replace()函数，而替换文本是"ond"。结果是"cat"被修改为"cond"，而字符串的剩余部分保持不变。通过将第一个参数改为带全局标记的正则表达式，字符串中的所有"at"都被替换成了"ond"

第二个参数是字符串的情况下，有几个特殊的字符序列，可以用来插入正则表达式操作的值。ECMA-262 中规定了下表中的值

![ECMA-262中规定了下表中的值](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011172732562.png)

使用这些特殊的序列，可以在替换文本中使用之前匹配的内容

```js
let text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
console.log(result); // word (cat), word (bat), word (sat), word (fat)
```

这里，每个以"at"结尾的词都会被替换成"word"后跟一对小括号，其中包含捕获组匹配的内容$1。replace()的第二个参数可以是一个函数。在只有一个匹配项时，这个函数会收到 3 个参数：与整个模式匹配的字符串、匹配项在字符串中的开始位置，以及整个字符串。在有多个捕获组的情况下，每个匹配捕获组的字符串也会作为参数传给这个函数，但最后两个参数还是与整个模式匹配的开始位置和原始字符串。这个函数应该返回一个字符串，表示应该把匹配项替换成什么。使用函数作为第二个参数可以更细致地控制替换过程

```js
function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function (match, pos, originalText) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
    }
  });
}
console.log(htmlEscape('<p class="greeting">Hello world!</p>'));
// "&lt;p class=&quot;greeting&quot;&gt;Hello world!</p>"
```

这里，函数 htmlEscape()用于将一段 HTML 中的 4 个字符替换成对应的实体：小于号、大于号、和号，还有双引号（都必须经过转义）。实现这个任务最简单的办法就是用一个正则表达式查找这些字符，然后定义一个函数，根据匹配的每个字符分别返回特定的 HTML 实体。最后一个与模式匹配相关的字符串方法是 split()。这个方法会根据传入的分隔符将字符串拆分成数组。作为分隔符的参数可以是字符串，也可以是 RegExp 对象。（字符串分隔符不会被这个方法当成正则表达式。）还可以传入第二个参数，即数组大小，确保返回的数组不会超过指定大小。

```js
let colorText = "red,blue,green,yellow";
let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"]
let colors2 = colorText.split(",", 2); // ["red", "blue"]
let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""]
```

在这里，字符串 colorText 是一个逗号分隔的颜色名称符串。调用 split(",")会得到包含这些颜色名的数组，基于逗号进行拆分。要把数组元素限制为 2 个，传入第二个参数 2 即可。最后，使用正则表达式可以得到一个包含逗号的数组。注意在最后一次调用 split()时，返回的数组前后包含两个空字符串。这是因为正则表达式指定的分隔符出现在了字符串开头（"red"）和末尾（"yellow"）。

### localeCompare()方法

最后一个方法是 localeCompare()，这个方法比较两个字符串，返回如下 3 个值中的一个

- 如果按照字母表顺序，字符串应该排在字符串参数前头，则返回负值。（通常是-1，具体还要看
  与实际值相关的实现。）
- 如果字符串与字符串参数相等，则返回 0。
- 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。（通常是 1，具体还要看
  与实际值相关的实现。）

```js
let stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); // 1
console.log(stringValue.localeCompare("yellow")); // 0
console.log(stringValue.localeCompare("zoo")); // -1
```

在这里，字符串"yellow"与 3 个不同的值进行了比较："brick"、"yellow"和"zoo"。"brick"按字母表顺序应该排在"yellow"前头，因此 localeCompare()返回 1。"yellow"等于"yellow"，因此"localeCompare()"返回 0。最后，"zoo"在"yellow"后面，因此 localeCompare()返回-1。强调一下，因为返回的具体值可能因具体实现而异，所以最好像下面的示例中一样使用 localeCompare()：

```js
function determineOrder(value) {
  let result = stringValue.localeCompare(value);
  if (result < 0) {
    console.log(`The string 'yellow' comes before the string '${value}'.`);
  } else if (result > 0) {
    console.log(`The string 'yellow' comes after the string '${value}'.`);
  } else {
    console.log(`The string 'yellow' is equal to the string '${value}'.`);
  }
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");
```

这样一来，就可以保证在所有实现中都能正确判断字符串的顺序了

localeCompare()的独特之处在于，实现所在的地区（国家和语言）决定了这个方法如何比较字符串。在美国，英语是 ECMAScript 实现的标准语言，localeCompare()区分大小写，大写字母排在小写字母前面。但其他地区未必是这种情况

# 单例内置对象

ECMA-262 对内置对象的定义是“任何由 ECMAScript 实现提供、与宿主环境无关，并在 ECMAScript 程序开始执行时就存在的对象”

前面我们已经接触了大部分内置对象，包括 Object、Array 和 String。本节介绍 ECMA-262 定义的另外两个单例内置对象：Global 和 Math

## Global

Global 对象是 ECMAScript 中最特别的对象，因为代码不会显式地访问它。

ECMA-262 规定 Global 对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成 Global 对象的属性

### URL 编码方法

encodeURI()和encodeURIComponent()方法用于编码统一资源标识符（URI），以便传给浏览器。有效的URI 不能包含某些字符，比如空格。

使用URI 编码方法来编码URI 可以让浏览器能够理解它们，同时又以特殊的UTF-8 编码替换掉所有无效字符

ecnodeURI()方法用于对整个URI 进行编码，比如"www.wrox.com/illegalvalue.js"。而encodeURIComponent()方法用于编码URI 中单独的组件，比如前面URL 中的"illegal value.js"

这两个方法的主要区别是，encodeURI()不会编码属于URL 组件的特殊字符，比如冒号、斜杠、问号、井号，而encodeURIComponent()会编码它发现的所有非标准字符

```js
let uri = "http://www.wrox.com/illegal value.js#start";
// "http://www.wrox.com/illegal%20value.js#start"
console.log(encodeURI(uri));
// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"
console.log(encodeURIComponent(uri));
```

这里使用encodeURI()编码后，除空格被替换为%20 之外，没有任何变化。而encodeURIComponent()方法将所有非字母字符都替换成了相应的编码形式。这就是使用encodeURI()编码整个URI，但只使用encodeURIComponent()编码那些会追加到已有URI 后面的字符串的原因

> ，使用encodeURIComponent()应该比使用encodeURI()的频率更高，
这是因为编码查询字符串参数比编码基准URI 的次数更多

与encodeURI()和encodeURIComponent()相对的是decodeURI()和decodeURIComponent()。decodeURI()只对使用encodeURI()编码过的字符解码  
，decodeURIComponent()解码所有
被encodeURIComponent()编码的字符，基本上就是解码所有特殊值

```js
let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
// http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start
console.log(decodeURI(uri));
// http:// www.wrox.com/illegal value.js#start
console.log(decodeURIComponent(uri));
```

> URI 方法始终是首选方法，因为它们对所有Unicode 字符进行编码，而原来的方
法只能正确编码ASCII 字符。不要在生产环境中使用escape()和unescape()

### eval()方法

最后一个方法可能是整个ECMAScript 语言中最强大的了，它就是eval()。这个方法就是一个完整的ECMAScript 解释器，它接收一个参数，即一个要执行的ECMAScript（JavaScript）字符串

```js
eval("console.log('hi')");

// 上面这行代码的功能与下一行等价：

console.log("hi");
```

当解释器发现eval()调用时，会将参数解释为实际的ECMAScript 语句，然后将其插入到该位置。通过eval()执行的代码属于该调用所在上下文，被执行的代码与该上下文拥有相同的作用域链

这意味着定义在包含上下文中的变量可以在eval()调用内部被引用

```js
let msg = "hello world";
eval("console.log(msg)"); // "hello world"
```

通过eval()定义的任何变量和函数都不会被提升，这是因为在解析代码的时候，它们是被包含在一个字符串中的。它们只是在eval()执行的时候才会被创建。
在严格模式下，在eval()内部创建的变量和函数无法被外部访问。同样，在严格模式下，赋值给eval 也会导致错误

```js
"use strict";
eval = "hi"; // 导致错误
```

> 在使用eval()的时候必须极为慎重，特别是在解释用户输入的内容时。因为这个方法会对XSS 利用暴露出很大的攻击面。恶意用户可能插入会导致你网站或应用崩溃的代码

### Global 对象属性

Global 对象有很多属性，其中一些前面已经提到过了。像undefined、NaN 和Infinity 等特殊值都是Global 对象的属性。此外，所有原生引用类型构造函数，比如Object 和Function，也都是Global 对象的属性

![Global 对象属性](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011174628822.png)

![Global 对象属性](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011174705639.png)

### window对象

虽然ECMA-262 没有规定直接访问Global 对象的方式，但浏览器将window 对象实现为Global对象的代理。因此，所有全局作用域中声明的变量和函数都变成了window 的属性

```js
var color = "red";
function sayColor() {
console.log(window.color);
}
window.sayColor(); // "red"
```

另一种获取Global 对象的方式是使用如下的代码

```js
let global = function() {
return this;
}();
```

这段代码创建一个立即调用的函数表达式，返回了this 的值。如前所述，当一个函数在没有明确（通过成为某个对象的方法，或者通过call()/apply()）指定this 值的情况下执行时，this 值等于Global 对象。因此，调用一个简单返回this 的函数是在任何执行上下文中获取Global 对象的通用方式。

## Math

ECMAScript 提供了Math 对象作为保存数学公式、信息和计算的地方。Math 对象提供了一些辅助计算的属性和方法。

>Math 对象上提供的计算要比直接在JavaScript 实现的快得多，因为Math 对象上的计算使用了JavaScript 引擎中更高效的实现和处理器指令

### Math 对象属性

Math 对象有一些属性，主要用于保存数学中的一些特殊值

![Math 对象属性](C:\Users\leoec\AppData\Roaming\Typora\typora-user-images\image-20211011190740388.png)

### Math 对象也提供了很多辅助执行简单或复杂数学计算的方法。

min()和max()方法用于确定一组数值中的最小值和最大值。这两个方法都接收任意多个参数

```js
let max = Math.max(3, 54, 32, 16);
console.log(max); // 54
let min = Math.min(3, 54, 32, 16);
console.log(min); // 3
```

使用这两个方法可以避免使用额外的循环和if 语句来确定一组数值的最大最小值

使用这两个方法可以避免使用额外的循环和if 语句来确定一组数值的最大最小值。

要知道数组中的最大值和最小值，可以像下面这样使用扩展操作符

```js
let values = [1, 2, 3, 4, 5, 6, 7, 8];
let max = Math.max(...val);
```

舍入方法
接下来是用于把小数值舍入为整数的4 个方法：Math.ceil()、Math.floor()、Math.round()和Math.fround()。这几个方法处理舍入的方式如下所述

- Math.ceil()方法始终向上舍入为最接近的整数。

Math.floor()方法始终向下舍入为最接近的整数。

- Math.round()方法执行四舍五入。

- Math.fround()方法返回数值最接近的单精度（32 位）浮点值表示。

```js
console.log(Math.ceil(25.9)); // 26
console.log(Math.ceil(25.5)); // 26
console.log(Math.ceil(25.1)); // 26
console.log(Math.round(25.9)); // 26
console.log(Math.round(25.5)); // 26
console.log(Math.round(25.1)); // 25
console.log(Math.fround(0.4)); // 0.4000000059604645
console.log(Math.fround(0.5)); // 0.5
console.log(Math.fround(25.9)); // 25.899999618530273
console.log(Math.floor(25.9)); // 25
console.log(Math.floor(25.5)); // 25
console.log(Math.floor(25.1)); // 25
```

### random()方法

Math.random()方法返回一个0~1 范围内的随机数，其中包含0 但不包含1。对于希望显示随机名言或随机新闻的网页，这个方法是非常方便的。可以基于如下公式使用Math.random()从一组整数中随机选择一个数：

```js
number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)
```
- 可选总数（total_number_of_choices）

- 最小可能的值（first_possible_value）

这里使用了Math.floor()方法，因为Math.random()始终返回小数，即便乘以一个数再加上一个数也是小数。因此，如果想从1~10 范围内随机选择一个数

```js
let num = Math.floor(Math.random() * 10 + 1);
```

```js
function selectFrom(lowerValue, upperValue) {
let choices = upperValue - lowerValue + 1;
return Math.floor(Math.random() * choices + lowerValue);
}
let num = selectFrom(2,10);
console.log(num); // 2~10 范围内的值，其中包含2 和10
```

这里的函数selectFrom()接收两个参数：应该返回的最小值和最大值。通过将这两个值相减再加1 得到可选总数，然后再套用上面的公式。于是，调用selectFrom(2,10)就可以从2~10（包含）范围内选择一个值了。使用这个函数，从一个数组中随机选择一个元素就很容易

```js
let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
let color = colors[selectFrom(0, colors.length-1)];
```

在这个例子中，传给selecFrom()的第二个参数是数组长度减1，即数组最大的索引值

> Math.random()方法在这里出于演示目的是没有问题的。如果是为了加密而需要
生成随机数（传给生成器的输入需要较高的不确定性），那么建议使用window.crypto.getRandomValues()
