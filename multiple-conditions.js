var isGraduated = true;
var salary = 31000;
var car = 1;
// if(isGraduated == true && salary > 50000 && car >= 1){
//     console.log("Eso biye kore feli");
// }
// else{
//     console.log("tor kopale biye nai");
// }

if(isGraduated === true || salary > 50000 || car >=1){
    console.log("eso prem kori");
}
else{
    console.log("tomar friend er number dao");
}

if(isGraduated === true && (salary > 50000 || car >=1)){
    console.log("lets biye");
}
else{
    console.log("forget it");
}