// variable merupakan sebuah nama penyimpanan untuk menyimpan data tertentu

// highscore => memperlihatkan score kita 
// semakin lama berjalan maka score akan makin bertambah
// apabila mendapatkan item x2, score akan dikali 2

let message; // declare variable message
message = "Hello" //assign variable message

console.log(message);// print value of variable message in terminal

// di dalam javascript, kita bisa declare variable dengan 3 cara
// menggunakan let => 
let replaceable = "hello world" // declare variable and assign value 
replaceable = "world" //re-assign value
// let replaceable = "hello world" tidak diperbolehkan untuk re-declare variable
console.log(replaceable);

// menggunakan var => 
var globalVariable = "this is global variable" //declare & assign
globalVariable = "this is global variable(re-assign)" // re-assign
var globalVariable = "this is global variable(redeclare)" //re-declare 
console.log(globalVariable);

// menggunakan const => 
const constant = "hello purwadhika"
// constant = "hello purwadhika(re-assign)" tidak bisa re-assign
// const constant = "hello purwadhika(redeclare)" tidak bisa re-declare

console.log(constant);

//declare artinya kita meminta kepada ram untuk menyediakan sebuah tempat 
//ram akan menyediakan sebuah alamat untuk bisa menampung variable kita
//re-assign artinya kita memanggil dmna variable ini disimpan 

//pada saat redeclare dia akan menghapus lokasi address di dalam ram
//dan akan menempatkan variable dengan nama yg sama dan valuenya di tempat yg baru

// tidak disarankan menggunakan var di dalam project javascript
// let dan const saja

// naming variable
// symbols = $ dan _
// nama variable dapat berisi huruf & angka
    // let 123 = "ini angka" tidak diperbolehkan membuat variable yg diawali angka
    let hello123 = "hello 123" //variable dengan awalan huruf ditambah angka diperbolehkan
    // let hello@ = "hello @" variable dengan symbol selain $ dan _ tidak diperbolehkan
    let _hello = "_hello" //variable diawali dengan symbol diperbolehkan
    let $hello = "$hello"
    let $123 = "$123"       
    
// case-sensitive => 
    let hello = "Hello" 
    let Hello = "olleh"
    //variable diatas merupakan variable yg berbeda
    console.log(hello);
    console.log(Hello);
// tidak bisa menggunakan reserved-word
    // let let = "abc"
    // let const = "abc"

    let helloWorld = "hello world"
    let hello_world = "hello world"
