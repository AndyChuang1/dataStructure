let i = null;
console.log(i);

let j = { a: { b: 1 } };
let k = { ...j };
k.a = 2;
console.log(j, k);

let time = {
  name: 'Andy',
  //普通function 因為setTimeout 是cb 把function 帶到window上執行了
  timeOut() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  },
  //arrow function 會指向在定義時所在的範圍
  timeOut2() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};

time.timeOut();
time.timeOut2();
