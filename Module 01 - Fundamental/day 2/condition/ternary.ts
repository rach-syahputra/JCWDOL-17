const str:string = "script"

if (str == "TypeScript") console.log("TypeScript")
else console.log("Not TypeScript");

//ternary merupakan sebuah cara penulisan if statement dengan cara yg lebih singkat

console.log(str == "TypeScript"? "TypeScript" : "Not TypeScript");

console.log(str == "TypeScript"? "TypeScript" : str == "JavaScript" ? "JavaScript" : "Not Typescript/javascript");

