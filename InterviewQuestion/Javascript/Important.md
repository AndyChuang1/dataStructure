## Explain how this works in JavaScript

    - Answer : 通常this是指向 代表當前instance本身，但是只要脫離instance或所謂的物件通常會指向window全域

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

    - Answer :

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
