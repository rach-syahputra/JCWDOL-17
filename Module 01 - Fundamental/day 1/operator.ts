// + = penjumlahan
// - = pengurangan
// * = perkalian
// / = pembagian
// % = sisa bagi (modulo)
// ** = pemangkatan

console.log(5 + 5); // number+number= number => 10
console.log("5" + "5"); //string+string=string  => "55"
console.log(5-3); //2 
console.log(15*2); //30 
console.log(10%3); // 3 dikalikan dengan angka yg hasilnya mendekati 10 yaitu 9. 10-9 = 1
console.log(5**2); //25
console.log(5*5);




// npm i ts-node -g
//npm adalah package manager dari node 
//npm install ts-node 


//operand merupakan bilangan yg terlibat didalam sebuah operasi bilangan
console.log(5*2); // operandnya merupakan 5 dan 2

let bilangan1:number = 3
bilangan1 = -bilangan1; //-3. karena operandnya hanya 1, maka disebut unary

let bilangan2:number = 5
let result:number = bilangan1 * bilangan2 // -3 * 5 = -15
//apabila terdapat 2 buah operand. maka operatornya disebut dengan binary
console.log(result);

// bilangan2 = bilangan2 + 10 // reassign nilai 5 dengan 5 + 10 = 15
//modify in place
bilangan2 += 30; 
console.log(bilangan2, "ini adalah hasil dari bilangan2");

//increment dan decrement
// increment menambah value number dengan 1
//decrement mengurangi value number dengan 1
bilangan2++ //contoh increment
console.log(bilangan2, "bilangan2 sudah ditambah 1");
bilangan2-- //contoh decrement
console.log(bilangan2, "bilangan2 sudah dikurangi 1");

//prefix => sebelum
let bilangan3:number = 10
let bilangan4:number = 20
console.log(++bilangan3); //11. yaitu penjumlahan antara 10 dan 1
console.log(bilangan4++);//20. memunculkan hasil sebelum nilai bilangan4 dijumlahkan
console.log(bilangan4); //21. nilai bilangan sudah bertambah1 akibat increment

// prefix => menyelesaikan operasi bilangan. setelah selesai hasilnya akan ditampilkan
// postfix => tampilkan value lamanya. baru jalankan operasi bilangannya
//prefix/postfix sama2 berfungsi untuk melakukan increment/decrement terhadap sebuah bilangan




 



