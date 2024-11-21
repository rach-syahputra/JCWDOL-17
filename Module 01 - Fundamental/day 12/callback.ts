/** @format */

//callback merupakan sebuah function yang dikirim ke dalam sebuah argument function lain

const numbers = [1, 2, 3, 4, 5];

numbers.map((value) => {
  console.log(value, "ini merupakan callback function");
});

const fn = (str: string) => str;

console.log(fn("hello"), "ini bukan callback"); // bukan callback

const log = (cb: (str: string) => string) => {
  console.log(cb("world"), "ini callback");
};

log(fn);

console.log(fn); //[Function: fn]
console.log(fn("hello")); //hello

function a() {}
// () => void
