//truthy atau falsy merupakan mengecekan boolean terhadap suatu value

//falsy
console.log(Boolean(""), '""');//false
console.log(Boolean(0), 0);//false
console.log(Boolean(null), null);//false
console.log(Boolean(undefined),undefined); //false
console.log(Boolean(NaN),NaN); // false
console.log(Boolean(false),false); // false

console.log(Number("13z")); // mencoba mengkonversi "13z" kedalam number. hasilnya NaN

//truthy
console.log(Boolean(" "), '" "');//true
console.log(Boolean([]), []);//true
console.log(Boolean({}), {});//true
console.log(Boolean(1), 1); //true
console.log(Boolean(-1), -1); //true
console.log(Boolean("0"), "0"); //true
console.log(Boolean("false"), "false");//true

let n:number = 0 // false
let n2:number = 3 //true


if(n || n2 ) console.log("bukan 0");
else console.log("nilai 0");

// konversi n kedalam boolean
// Boolean(30) => true
// if(true) => jalankan task







