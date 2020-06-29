## Explain how this works in JavaScript

    - Answer : 通常this是指向 代表當前instance本身，但是只要脫離instance或所謂的物件通常會指向window全域

this 的值跟作用域跟程式碼的位置在哪裡完全無關，只跟「你如何呼叫」有關。
要看 this，就看這個函式『怎麽』被呼叫」，而你要看怎麼被呼叫的話，就轉成 call 的形式就行了。

```
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}

const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello()  === obj.inner.hello.call(obj.inner) //output : 2
obj2.hello() === obj.inner.hello.call(obj.inner)//output : 2
hello() === hello.call() // output : undefined
```

[Reference](https://blog.techbridge.cc/2019/02/23/javascript-this/)

## Explain how prototypal inheritance works

- Answer : JS 是透過 prototype chain 來實現繼承。簡單來說透過**原型**繼承，可以讓本來沒有某個屬性的物件去存取其他物件的屬性

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}

var nick = new Person('nick', 18);
var peter = new Person('peter', 20);

console.log(nick.log === peter.log) // true

// 功能依舊跟之前一樣
nick.log(); // nick, age:18
peter.log(); // peter, age:20
```

### 探究原理

不知道你會不會好奇一件事，以上面 var nick = new Person('nick', 18);的例子來說，當我在呼叫 nick.log()的時候，JavaScript 是怎麼找到這個 function 的？

因為 nick 這個 instance 本身並沒有 log 這個 function。但根據 JavaScript 的機制，nick 是 Person 的 instance，所以如果在 nick 本身找不到，它會試著從 Person.prototype 去找。

可是，JavaScript 怎麼知道要到這邊去找？所以一定是 nick 跟 Person.prototype 會透過某種方式連接起來，才知道說要往哪邊去找 log 這個 function。

而這個連接的方式，就是**proto**。
（附註：其實比較好的方式是用 Object.getPrototypeOf()，但這邊為了方便起見，還是使用比較常見的**proto**，更詳細的說明可參考：MDN: Object.prototype.proto）

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.log = function () {
  console.log(this.name + ', age:' + this.age);
}

var nick = new Person('nick', 18);

console.log(nick.__proto__ === Person.prototype) // true
```

而上面這一條透過**proto**不斷串起來的鍊，就叫做原型鍊。透過這一條原型鍊，就可以達成類似繼承的功能，可以呼叫自己 parent 的 method。
[Reference](https://blog.techbridge.cc/2017/04/22/javascript-prototype/)

前面說的都是「建構式」與「原型」的關係，那麼如果我們要透過「物件」來達到原型繼承的話可以怎麼做？

第一個是透過 Object.setPrototypeOf()。

像這樣，將 cutman 指定為 rockman 的原型物件：

```
Object.setPrototypeOf(rockman, cutman);
```

第二種，我們可以透過 Object.create()。

```
// Person 物件
var Person = {
  name: 'Default_Name',
  sayHello: function(){
    return "Hi, I'm " + this.name;
  }
};

// 透過 Object.create() 將 Person 作為原型物件來建立一個新的物件
var p = Object.create(Person);

p.sayHello();   // "Hi, I'm Default_Name"

p.name = 'Kuro';
p.sayHello();   // "Hi, I'm Kuro"
```

像這樣，我們可以先建立一個物件作為「原型」，然後透過 Object.create() 來產生一個新的物件，此時新物件的 [[prototype]] 就會是我們所指定的那個原型物件。

Object.create() 實作的原理簡單來說就像這樣：

```
Object.create = function (proto){
  function F() {}
  F.prototype = proto;
  return new F();
}
```

當我們把原型物件作為參數傳入 proto， Object.create() 會回傳一個 new F()，也就是透過一個封裝過的建構式建構出來的物件，並把 prototype 指向作為參數的 proto。
[Reference](https://ithelp.ithome.com.tw/articles/10194356)

## What’s the difference between a variable that is: null, undefined or undeclared?

null 代表有宣告但是給予空值

```
let i = null
console.log(i)
```

undefined 代表有宣告 但是沒有賦值

```
let i;
console.log(i)
```

undeclared 代表未宣告

```
console.log(i)
```

## What’s the difference between Arrow function and function?

function

- this 會指向運行時的環境
- 如果找不到運行時環境會找到 window
- 可以使用 call,apply,bind 綁定 obj

```
let time = {
  name: 'Andy',
  //普通function 因為setTimeout 是cb 把function 帶到window上執行了
  timeOut() {
    setTimeout(function () {
      console.log(this.name); // output: undefined
    }, 100);
  },
};
```

Arrow function

- this 會指向定義時的環境
- 沒有 prototype
- 不行做 construct function, new Function 會拋錯
- 無法可以使用 call,apply,bind 綁定 obj 環境

```
let time = {
  name: 'Andy',
  //arrow function 會指向在定義時所在的範圍
  timeOut2() {
    setTimeout(() => {
      console.log(this.name); // output : Andy
    }, 100);
  },
};
```

## What is a closure, and how/why would you use one?

    -  Answer :

## What’s the difference between .call and .apply

    -  Answer : 最大的差別就是 call 參數是一個一個傳入apply 使用陣列

```
    fn.call(this,arg1,arg2....)
    fn.apply(this,[...arg])
```

[Reference](https://medium.com/@realdennis/javascript-%E8%81%8A%E8%81%8Acall-apply-bind%E7%9A%84%E5%B7%AE%E7%95%B0%E8%88%87%E7%9B%B8%E4%BC%BC%E4%B9%8B%E8%99%95-2f82a4b4dd66)

## Explain “hoisting”.

    - Answer : JS 在執行前，會把宣告var ,let ,const 與function 提升到最上面，但不賦值

## What is "use strict";? what are the advantages and disadvantages to using it?

Answer :優點是比較嚴謹, 缺點是失去一些 JS 的靈活性

- 不宣告直接賦予變數
- this 脫離物件會是 undefined
- 物件內有重複屬性

```

'use strict';
auntie = '漂亮阿姨';
// Uncaught ReferenceError: auntie is not defined


```

## What is event loop? What is the difference between call stack and task queue??

    - Answer : JS 為單線程,為了讓使用者操作不會因為要等待結果而block住所產生的解決方案。
    event loop為 ：
    1. 所有同步任務會在 main thread執行形成一個 execution context stack , call stack 依序執行。
    2. main thread 還有一個task queue,當異步任務執行完就會放到task queue
    3. main thread 裡的stack 任務依序做完後，就會去讀取task queue 執行，不斷重複就是event loop

![eventLoop](./eventloop.png)

## What are the differences between variables created using let, var or const?

    - Answer : var 為function scope , let & const 為block scope , const 是常數宣告無法再更動
