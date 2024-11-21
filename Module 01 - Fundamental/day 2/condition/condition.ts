let age:number = 16
if (age >= 17){ 
    //di dalam curly brackets, kita dapat menuliskan banyak statement
    console.log("you can now create an ID card");
    console.log("you can now create an ID card");
    console.log("you can now create an ID card");
    console.log("you can now create an ID card");
} 
// dengan menggunakan curly brackets kita bisa mengisi berbagai macam statement

if (age >= 17) 
    console.log("sekarang bisa buat KTP");
    console.log("sekarang bisa buat KTP"); // berada diluar if
    console.log("sekarang bisa buat KTP"); // berada diluar if
    console.log("sekarang bisa buat KTP"); // berada diluar if
    console.log("sekarang bisa buat KTP"); // berada diluar if

//apabila kita menuliskan if tanpa curly brackets. maka statement setelah if, akan menjadi task yg dijalankan apabila kondisi terpenuhi

// single statement vs multi-statement

let umur:number= 15

if(umur >= 17) console.log("sudah bisa buat KTP");
else console.log("umur belum cukup untuk buat KTP");

// rangkaian if dengan else. hanya akan dijalankan 1x saja, sesuai dengan kondisi yg terpenuhi
// else akan berjalan apabila rangkaian kondisi if diatasnya tidak terpenuhi
// else tidak bisa berdiri sendiri. untuk menggunakan else, maka kita harus membuat sebuah if condition

let grade:string = "A"

if(grade == "A") console.log("Excellent result");
else if(grade == "B") console.log("Great result");
else if(grade == "C") console.log("Good result");
else if(grade == "E") console.log("OK result");
else if(grade == "F") console.log("Bad result");
else console.log("invalid grade");
// line 33 - 38 merupakan sebuah rangkaian kondisi if
//apabila di line 35. kondisi terpenuhi. maka sisa rangkaian ifnya tidak dicek

if(grade == "A") console.log("Excellent result");
if(grade == "B") console.log("Great result");
if(grade == "C") console.log("Good result");
if(grade == "E") console.log("OK result");
if(grade == "F") console.log("Bad result");
else console.log("invalid grade");
// rangkaian line 42
// rangkaian line 43
// rangkaian line 44
// rangkaian line 45
// rangkaian line 46

// coba cari tentang nested if


let fName:string = "jordan"
let lName:string = "sumardi"
// && (and) menggabungkan 2 buah kondisi. dimana kedua/lebih kondisi yg dibuat wajib true semua
if(fName == "jordan" && lName == "sumardi") console.log("jordan sumardi");
else console.log("nama lengkap bukan jordan sumardi");

// || (or) menggabungkan 2/lebih kondisi. dimana salah 1 dari kondisi wajib true
if(fName == "jordan" || lName == "sumardi") console.log("namanya antara jordan atau sumardi");
else console.log("nama bukan jordan atau sumardi");

if(!(lName == "sumardi")) console.log("last name bukan sumardi");
// ! (not) digunakan untuk memutar balikan hasil boolean dari komparasi.
// not false = true
// not true = false
