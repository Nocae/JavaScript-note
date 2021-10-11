// console.log(age);

// let age = 22;

// if(true){
//     let age = 12;
// }

// console.log(age);

// {

//     let name;
// }

// console.log(name);

// let age;
// let age;

// for (let index = 0; index < 5; index++) {

// }

// console.log(index);

// for (var index = 0; index < 5; index++) {
//     setTimeout(()=>console.log(index),0)

// }

// for (let index = 0; index < 5; index++) {
//     setTimeout(()=>console.log(index),0)
// }

// const age = 26;
// age = 36;

// const name = '123';
// const name = '234';

// const name = 'matt'

// if(true){
//     const name = 'nich'
// }

// console.log(name);

// let i = 0;

// for (const j = 7; i < 5; i++){
//     console.log(j);
// }

// for (const key in {a: 1, b: 2}){
//     console.log(key);
// }

// for (const value of [1,2,3,4,5]){
//     console.log(value);
// }

// let message = "some string";

// console.log(typeof message);
// console.log(typeof(message));
// console.log(typeof 95);
// console.log(typeof null);

// let msg = undefined;

// console.log(msg === undefined);

// let msg;

// console.log(msg);
// console.log(age);

// let car  = null;

// if (car != null){
//     // car 是一个对象的引用
// }

// console.log(undefined == null);

// let msg = 'Hello World!'
// let msgAsBoolean = Boolean(msg);

// console.log(msgAsBoolean);

// let octalNum1 = 070;
// let octalNum2 = 079;
// let octalNum3 = 08;

// console.log(octalNum1);
// console.log(octalNum2);
// console.log(octalNum3);

// let hexNum1 = 0xA;
// let hexNum2 = 0x1f;

// console.log(hexNum1);
// console.log(hexNum2);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// const result = Number.MAX_VALUE +Number.MIN_VALUE;

// console.log(isFinite(result));
// console.log(result);

// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);

// console.log(0/0);
// console.log(-0/+0);

// console.log(5/0);
// console.log(5/-0);

// console.log(isNaN(NaN));
// console.log(isNaN(10));
// console.log(isNaN("10"));
// console.log(isNaN("blue"));
// console.log(isNaN(true));

// console.log(Number("+123"));

// console.log(Number("hello"));
// console.log(Number(""));
// console.log(Number("000011"));
// console.log(Number(true));

// console.log(parseInt("123abc234"));

// console.log(parseInt("1234blue"));
// console.log(parseInt(""));
// console.log(parseInt("0xA"));
// console.log(parseInt(22.5));
// console.log(parseInt("70"));
// console.log(parseInt("0xf"));

// console.log(parseFloat("1234blue"));
// console.log(parseFloat("0xA"));
// console.log(parseFloat("22.5"));
// console.log(parseFloat("22.34.5"));
// console.log(parseFloat("0908.5"));
// console.log(parseFloat("3.125e7"));

// let found = true;
// let foundAsString = found.toString()
// console.log(foundAsString);

// let num = 10;

// console.log(num.toString());
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(10));
// console.log(num.toString(16));

// const muMultiLineString = 'first line\nsecond line';

// const muMultiLineTemplateLiteral = `first line
// second line`;

// console.log(muMultiLineString);

// console.log(muMultiLineTemplateLiteral);

// console.log(muMultiLineTemplateLiteral === muMultiLineString);

// const value = 5;
// const exponent = 'second';

// const interpolatedString = value + ' to the ' + exponent + ' power is ' + (value * value);

// const interpolatedTemplateLiteral = `${value} to the ${exponent} power is ${value * value}`;

// console.log(interpolatedString);
// console.log(interpolatedTemplateLiteral);

// const a = (toString: ()=>'World');

// const a = {
//     // toString: ()=>'World'
// }

// console.log(a.toString);
// console.log(`${a}`);

// const a = 6;
// const b = 9;

// function simpleTag(strings, ...expressions){
//     console.log(strings);
//     for(const expression of expressions){
//         console.log(expression);
//     }

//     return 'foobar';
// }
// function simpleTag(strings, aValExpression, bValExpression, sumExpression){
//     console.log(strings);
//     console.log(aValExpression);
//     console.log(bValExpression);
//     console.log(sumExpression);

//     return 'foobar';
// }

// const untaggedResult = `${ a } + ${ b } = ${ a + b }`;

// const taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;

// console.log(untaggedResult);
// console.log(taggedResult);

// console.log(`\u00A9`);
// console.log(String.raw`\u00A9`);

// const sym = Symbol()
// console.log(typeof sym);

// const genericSymbol = Symbol();
// const otherGenericSymbol = Symbol();

// const fooSymbol = Symbol('foo');
// const otherSymbol = Symbol('foo');

// console.log(genericSymbol === otherGenericSymbol);
// console.log(fooSymbol === otherSymbol);

// const genericSymbol = Symbol();
// console.log(genericSymbol);

// const fooSymbol = Symbol('foo');
// console.log(fooSymbol);

// const fooGlobalSymbol = Symbol.for('foo');
// console.log(fooGlobalSymbol);

// const fooGlobalSymbol = Symbol.for('foo');
// const otherFooGlobalSymbol = Symbol.for('foo');

// console.log(fooGlobalSymbol === otherFooGlobalSymbol);

// const localSymbol = Symbol('foo');
// const globalSymbol = Symbol.for('foo');

// console.log(localSymbol === globalSymbol);

// const emptyGlobalSymbol = Symbol.for();
// console.log(emptyGlobalSymbol);

// const s = Symbol.for('foo');
// console.log(Symbol.keyFor(s));

// const s2 = Symbol('bar');
// console.log(Symbol.keyFor(s2));

// let s1 = Symbol("foo"),
//   s2 = Symbol("bar"),
//   s3 = Symbol("baz"),
//   s4 = Symbol("qux");

// const o = {
//   [s1]: "foo val",
// };

// // console.log(o);

// Object.defineProperty(o, s2, { value: "bar val" });

// // Object.defineProperty(o, s2,{
// //     value: 'bar val'
// // });

// console.log(o);

// Object.defineProperties(o, {
//   [s3]: { value: "baz val" },
//   [s4]: { value: "qux val" },
// });

// console.log(o);

// Object.getOwnPropertyDescriptors

// const s1 = Symbol('foo'),
//       s2 = Symbol('bar');

// const o = {
//     [s1]: 'foo val',
//     [s2]: 'bar val',
//     baz: 'baz val',
//     qux: 'qux val'
// };

// console.log(Object.getOwnPropertySymbols(o));

// console.log(Object.getOwnPropertyNames(o));

// console.log(Object.getOwnPropertyDescriptors(o));

// console.log(Reflect.ownKeys(o));

// const o = {
//   [Symbol("foo")]: "foo val",
//   [Symbol("bar")]: "bar val",
// };

// console.log(o);

// console.log(Object.getOwnPropertySymbols(o));

// const barSymbol = Object.getOwnPropertySymbols(o).find((symbol) => symbol.toString().match(/bar/));

// console.log(barSymbol);

// let s1 = "2";
// let s2 = "z";
// let b = false;
// let f = 1.1;
// let o = {
//     valueOf(){
//         return -1;
//     }
// };

// console.log(++s1);
// console.log(++s2);
// console.log(++b);
// console.log(--f);
// console.log(--o);

// const num1 = 25;
// const num2 = ~num1;

// console.log(num1.toString(2));
// console.log(num2);

// const result = 25 & 4;

// const num2 = 4;
// const num1 = 25;

// console.log(num2.toString(2));
// console.log(num1.toString(2));

// console.log(result);

// const oldValue = 2;
// const newValue = oldValue << 5;
// console.log(newValue.toString(2));

// const oldValue = 64;
// const newValue = oldValue >> 5;

// console.log(newValue.toString(2));

// const oldValue = -64;
// console.log(oldValue.toString(2));

// const newValue = oldValue >>> 5;
// console.log(newValue);

// const found = true;

// const result = found || someUndeclaredVariable;

// console.log(result);

// console.log(Math.pow(3,2));
// console.log(3 ** 2);

// let squared = 3;
// squared **= 2;

// console.log(squared);

// const result1 = 5 + 5;

// console.log(result1);

// const result2 = 5 + '5';

// console.log(result2);

// const num1 = 5;
// const num2 = 10;
// let message1 = "The sum of 5 and 10 is " + num1 + num2;
// let message2 = "The sum of 5 and 10 is " + (num1 + num2);

// console.log(message1);
// console.log(message2);
// const count = 10;
// start: for (let i = 0; i < count; i++){
//     console.log(i);
//   }

// function addTen(num) {
//     num += 10;
//     return num;
// }

// const  count = 20;
// let result = addTen(count);
// console.log(count);
// console.log(result);

// function setName(obj) {
//     obj.name = "Nicholas";

// }

// let person = new Object();
// setName(person);
// console.log(person.name);

// function setName(obj) {
//     obj.name = "NIcholas";
//     obj = new Object();
//     obj.name = "Greg";
// }

// let person = new Object();
// setName(person);
// console.log(person.name);

// let s = "Nicholas";
// let b = true;
// let i = 22;
// let u;
// let n = null;
// let o = new Object();

// console.log(typeof s);
// console.log(typeof i);
// console.log(typeof b);
// console.log(typeof u);
// console.log(typeof n);
// console.log(typeof o);

// console.log(person instanceof Object);
// console.log(colors instanceof Array);
// console.log(pattern instanceof RegExp);

// var color = "blue";

// console.log();

// function add(num1, num2) {
//     var sum = num2 + num1;
//     return sum;
// }

// let result = add(10, 20);
// console.log(sum);

// const o1 = {};
// // o1 = {};

// const o2 = {};
// o2.name = 'Jake';
// console.log(o2.name);

// const o3 = Object.freeze({});
// o3.name = 'Jake';
// console.log(o3.name);

// function Article() {
//     this.title = 'INaug';
//     this.author = 'Jake';
// }

// let a1 = new Article();
// let a2 = new Article();

// console.log(a2);

// delete a1.author;

// console.log(a2);

// function Article(opt_author) {
//   this.title = "INaug";
//   this.author = opt_author;
// }

// let a1 = new Article();
// let a2 = new Article("Jake");

// var name = "The Window";

// var object = {
//   name: "My Object",

//   getNameFunc: function () {
//     return function () {
//       return this.name;
//     };
//   },
// };

// console.log(object.getNameFunc()());

// var ab = function() {
//     var aa = 0;
//     function b() {
//       aa++;
//       console.log(aa);
//     }
//     return b;
//   }

// console.log(typeof ab);

// console.log(Date.toLocaleString());
// console.log(Date.toString());

// let date = new Date();

// console.log(date.toLocaleString());
// console.log(date.toString());

// let date = new Date();

// console.log(date);
// console.log(date.valueOf());

// let date = new Date();

// // console.log(date.now());

// console.log(date.toDateString());

// console.log(date.toTimeString());

// console.log(date.toLocaleDateString());

// console.log(date.toLocaleTimeString());

// console.log(date.toUTCString());

// let pattern1 = /at/g;

// let pattern2 = /[bc]at/i;

// let pattern3 = /.at/gi;

// let s1 = "some text";
// let s2 = s1.substring(2);
// console.log(s2);

// let stringValue = "hello ";
// let result = stringValue.concat("world");
// let result = stringValue.concat("world", "!");
// console.log(result);

// let stringValue = "hello World!";

// console.log(stringValue.slice(3));
// console.log(stringValue.slice(3,8));
// console.log(stringValue.substring(5));
// console.log(stringValue.substring(5,8));
// console.log(stringValue.substr(4));
// console.log(stringValue.substr(4,9));

// let stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
// let positions = new Array();
// let pos = stringValue.indexOf("e");

// while (pos > -1) {
//   positions.push(pos);
//   pos = stringValue.indexOf("e", pos + 1);
// }

// console.log(positions);