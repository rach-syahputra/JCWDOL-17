//string = menyimpan huruf symbol angka (karakter/teks) 
    let str = 'ini tipe data string' 
    let str2 = "ini tipe data string"
    let str3 = `ini tipe data string`
    let str4 = "4" // 4 disini tidak akan bisa digunakan untuk berhitung
//number = menyimpan sebuah angka yg bisa dihitung
    let number = 123
//bigint = menyimpan sebuah angka yg memiliki value besar & cirinya memiliki n diakhir
    let bigint = 123n
//boolean = tipe data yang menyimpan value true atau false
    let bool = true
//null = merupakan tipe data yang memiliki value. tetapi valuenya belum diisi
    let n = null
//undefined = merupakan sebuah value yang tidak memiliki tipe atau belum diassign
    let u;

    console.log(typeof str); //string
    console.log(typeof number); //number
    console.log(typeof bigint); //bigint
    console.log(typeof bool); //boolean
    console.log(typeof n); //object
    console.log(typeof u); //undefined

    const result = str4+number
    console.log(result); //str = "4", number = 123, result = "4123"
    console.log(typeof result); //string + number => string
    console.log(typeof str4, str4);
    str4 = 5 // reassign str4 valuenya menjadi 5
    console.log(typeof str4,str4);
    


    
