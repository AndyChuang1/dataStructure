## Explain how this works in JavaScript

    - Answer :

## Explain how prototypal inheritance works

    - Answer :

## What’s the difference between a variable that is: null, undefined or undeclared?

    -  Answer :

## What is a closure, and how/why would you use one?

    -  Answer :

## What’s the difference between .call and .apply

    -  Answer : 最大的差別就是 call 參數是一個一個傳入apply 使用陣列

```
    fn.call(this,arg1,arg2....)
    fn.apply(this,[...arg])
```

## Explain “hoisting”.

    - Answer : JS 在執行前，會把宣告var ,let ,const 與function 提升到最上面，但不賦值

## What is "use strict";? what are the advantages and disadvantages to using it?

Answer :優點是比較嚴謹, 缺點是失去一些 JS 的靈活性

- 不宣告直接賦予變數
- 刪除已經宣告的錯誤
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
