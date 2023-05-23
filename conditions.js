// //cinema full price 10, reduced 8
// //This algorithm will output the conditions for a reduced cinema tariff's price

// //Exercise 1

// let age= 25

// if (age <= 18 || age >= 65) {
//     console.log ("reduced price")
// } else {
//     console.log ("full price")
// }

// //Exercise 2: maximum among 3 numbers

// num1= 23
// num2= 6
// num3= 12

// if (num1 > num2) {
//     console.log ("num1 = Maximum")
// }
// else if (num2 > num3) {
//     console.log ("num2 = Maximum")
// }

// else if ( num3 > num1) {
//     console.log ("num3 = Maximum")
// }

//Exercise 3: Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.

let x = Math.floor(Math.random() * 6) + 1; {
console.log (x)
}
let y = Math.floor(Math.random() * 6) + 1; {
    console.log (y)
}
let z = Math.floor(Math.random() * 6) + 1; {
    console.log (z)
}

if ((x!= y) && (y!= z) && (z!=x)) {
    console.log (0)
}
else if (x == y || y == z || z == x) {
    console.log (2)
}
else {
    console.log (3)
}

//Exercise 4: Write an algorithm which given the number of a day returns its name.

daysoftheweek = 5

if (daysoftheweek == 1) {
    console.log ("Monday")
}
else if (daysoftheweek == 2) {
    console.log ("Tuesday")
}
else if (daysoftheweek == 3) {
    console.log ("Wednesday")
}
else if (daysoftheweek == 4) {
    console.log ("Thursday")
}
else if (daysoftheweek == 5) {
    console.log ("Friday")
}
else if (daysoftheweek == 6) {
    console.log ("Saturday")
}
else if (daysoftheweek == 7) {
    console.log ("Sunday")
}


//Exercise 5: A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.

let numberofcopies= 8

let final_price= numberofcopies*0.12
let final_price2= numberofcopies*0.10

if (numberofcopies <= 10) {
    //let price= numberofcopies*0.12
    console.log (final_price)
}else if(numberofcopies > 10) {
   //let price2= numberofcopies*0.10
    console.log(final_price2)
}

