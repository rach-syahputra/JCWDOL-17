/** @format */

let result: string = ""; //menyimpan variable di dalam memory

function greet(str: string) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou(); //jalankan di memory
hello(); //jalankan di memory

console.log(result); //jalankan di memory

// call fn1 => simpan
// call fn2  => simpan
// call fn3  => simpan
// ...

//first way

function calculator(a: number, b: number) {
  return a + b;
}

function displayer(something: number) {
  return console.log(something);
}

let res: number = calculator(5, 5); //10
let res2: number = calculator(3, 4); //7
displayer(res); // menampilkan angka 10
displayer(res + res2);

//second way
function cal2(a: number, b: number) {
  let result = a + b; // 7+8 = 15
  displayer(result); // 15
}

cal2(7, 8); //15

//calculator with callback
function cal3(a: number, b: number, cb: (something: number) => void) {
  cb(a + b); //displayer(3+5) => displayer(8)
}

cal3(3, 5, displayer);
