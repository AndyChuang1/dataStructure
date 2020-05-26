## Explain how this works in JavaScript

    - Answer :

## Explain how prototypal inheritance works

    - Answer :

## What’s the difference between a variable that is: null, undefined or undeclared?

    -  Answer :

## What is a closure, and how/why would you use one?

    -  Answer :

## What’s the difference between .call and .apply

    -  Answer :

## Explain “hoisting”.

    - Answer :

## What is "use strict";? what are the advantages and disadvantages to using it?

    - Answer :

## What is event loop? What is the difference between call stack and task queue??

    - Answer : JS 為單線程,為了讓使用者操作不會因為要等待結果而block住所產生的解決方案。
    event loop為 ：
    1. 所有同步任務會在 main thread執行形成一個 execution context stack , call stack 依序執行。
    2. main thread 還有一個task queue,當異步任務執行完就會放到task queue
    3. main thread 裡的stack 任務依序做完後，就會去讀取task queue 執行，不斷重複就是event loop

![eventLoop](./eventloop.png)

## What are the differences between variables created using let, var or const?

    - Answer :
