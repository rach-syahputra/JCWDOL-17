// loop merupakan sebuah intruksi yg dijalan berkali2 hingga sebuah kondisi terpenuhi
// for loop memiliki 3 statement dalam kondisinya

for (let i = 0; i < 3; i++) {
    //code-block/tasks
    console.log(`${i} < 3 = ${i<3}`);
    console.log("hello");
}
// let i = 0. merupakan statement pertama yg dijalankan sebelum code-block. tugasnya untuk menciptakan sebuah variable
// i < 3. statement kedua sebagai kondisi berapa kali code-block akan dijalankan
// i++. statement ketiga sebagai counter/ statement yg akan dijalankan setelah code-block dieksekusi

//pada saat selesai menjalankan statement ketiga, maka kita akan kembali ke statement kedua.
//3 < 3? false
//pada saat kondisi dari statement kedua tidak terpenuhi. maka loopingan selesai

for (let i = 0; i < 5; i++) {
  if(i === 3)continue; // skip code-block dibawah line 18
  console.log(i);
}

//cari nested for

for (let i = 0; i < 5; i++) {
    console.log("i", i);
    for (let j = 0; j < 5; j++) {
        console.log("j",j);
    }
}
// i akan berjalan sebanyak 5x 
// j akan berjalan sebanyakan 5x 
// j akan dijalankan setiap 1x kondisi dalam codeblock for i memenuhi kondisi


for (let i = 0; i < 5; i++) {
    console.log("i", i); // 1

    let j:number = 0;
    while(j<5) {
        console.log("j",j); // j 0
        j++; // j=1
    }
    
}

//modified