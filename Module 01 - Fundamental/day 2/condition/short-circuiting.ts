//operator &&
const value:number = 100
const result:number|string = value && 'Truthy Falsy' && "hore" 
//operator && akan mengambil nilai falsy pertama
//opertator && akan mengambil nilai terakhir apabila tidak ada value yg falsy
console.log(result);

//opertator ||
const name:string = ""
const displayName:string | boolean = name || 0 || false
//operator || akan mengambil nilai truthy pertama
//opertator || akan mengambil nilai paling terakhir
console.log(displayName);
