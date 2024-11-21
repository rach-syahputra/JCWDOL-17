const fruit:string = "Orange"
// mirip dengan === karena dibandingkan dari sisi value dan tipedata
switch(fruit){
    case "Oranges": // apakah value dari fruit sama dengan Oranges ?
        console.log("oranges are $0.59 a pound");
        break;
    case "Mangoes": // apakah value dari fruit sama dengan Mangoes ?
        console.log("mangoes are $1.79 a pound");
        break;
    case "Papayas": // apakah value dari fruit sama dengan Papayas ?
        console.log("papayas are $1.00 a pound");
        break
    default: //else
        console.log(`Sorry, we're out of ${fruit}`);
}