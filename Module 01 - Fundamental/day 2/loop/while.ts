//while akan berjalan selama kondisi terpenuhi

let i:number = 0

while(i < 3) {
    //code-block
    console.log(i);
    console.log("hello");
    i++;
}
//3 <3 ? false. pada saat nilai false. code-block tidak akan dijalankan


//while menggunakan break

let j:number =0
while(true) {
    console.log("nilai j =",j);
    if(j == 5) break; // memberhentikan sebuah while loop dengan paksa
    console.log("while with break");
    j++;
}

//nested while

