// di dalam bahasa pemrograman terdapat variable dan function
// varible berguna untuk menyimpan value
// function berguna untuk memproses sesuatu.
// function bisa mengembalikan/tidak mengembalikan sebuah nilai

//ciri2 function
//diakhiri dengan ()

console.log("hey");

// di dalam javascript, setiap tipedata memiliki function bawaannya masing

let firstName:string = "jordan"
console.log(firstName.length); // length disini menampilkan bnyk karakter dalam string
console.log(firstName.concat(" lecture purwadhika")); // "jordan" + " lecture purwadhika"
console.log(firstName); //origin tidak berubah
console.log(firstName.toUpperCase()); //fungsi untuk merubah value menjadi huruf besar
console.log("JHONNY".toLowerCase()); //fungsi untuk merubah value menjadi huruf kecil

let lastName:string = "sumardi"
console.log(firstName + " " + lastName);// jordan sumardi
console.log(`"" '' ${firstName} ${lastName}`); //jordan sumardi
console.log('"hello"');
// console.log(''hello''); tidak bisa 
// console.log(""hello""); tidak bisa
console.log("'hello'");


// npm i typescript -g 