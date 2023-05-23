
console.log('Hello dear Johnson Junior, Welcome into the backend development wizarding world! ');

//Exercise 1

let a=9
let b=9

console.log (a+b);
console.log (a/b);
console.log (a-b);
console.log (a*b);
console.log (a%b);

//Exercise 2

let x="Javascript ";
let y="is very challenging"
let z= x+y;
console.log (z);

//Exercise 3

//let initialPrice = parseInt(prompt ("price before taxes"));

let initialPrice = 100

let VAT= (initialPrice* 21)/100

let initialPriceVAT = initialPrice + VAT

function calcVAT () {
    //let initialPrice = parseInt(prompt("Insert price before taxes"));
    let initialPrice = 100
    let VAT = (initialPrice * 21 ) / 100;
    let initialPriceVAT = initialPrice + VAT
    console.log (initialPriceVAT);
}

//Exercise 4

let radius = x
const PI= 3.14
let radiusSquare = (radius**2);
let Surface = radiusSquare * PI

function CalcSurface () {

    //let radius = parseInt(prompt("Insert radius"));
    let radiusSquare = (radius**2);
    const PI = 3.14;
    let Surface= radiusSquare * PI;
    console.log (Surface);
}

//Exercise 5 

let hours = x;
let minutes = y;
let seconds = z;
let hourstoseconds = x*3600;
let minutestoseconds = y*60;
let secondstoseconds = z*1

time = hourstoseconds+minutestoseconds+secondstoseconds

console.log (time);

