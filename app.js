//A. Data types
//String
let name = "Sander";

//Integer
let number = 15;

//boolean
let inCorrect = true;

//undefined 
let surname;

//null
let firstname = null;

//B. Arithmetic and logical operators
// Arithmetic
let x = 5;
let y = 10;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let qou = x / y;
let mod = x % y;

console.log("the sum is " + sum );
console.log("the difference is " + diff );
console.log("the product is " + prod );
console.log("the qoutient is " + qou );
console.log("the modulo is " + mod );

// logical
let num1 = 2;
let num2 = 4;

let result1 = num1 += 10;
let result2 = num1 -= 10;
let result3 = num1 *= 10;
let result4 = num1 /= 10;
let result5 = num1 %= 10;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

//C. Conditional statements

// if statement
let today = new Date().getDate();
 let greetings, greet, impression;

if(today < 15){
    greetings = "HI goodmorning";
}
 console.log(greetings);

//if else statement 
if (today > 10) {
    greet = "Hi how are you";
}
 else {
    greet = "Im fine thankyou";
}
console.log(greet);

// else if statement

if (today > 10) {
    impresstion = "hello madlang people";
} else if (today < 9){
    impression = "mabuhaaaay";
} else {
    impression = "mini miss youuu";
}
console.log(impression);

 //switch statement

 let day = 2;
 let todaysGreeting;

  switch (day){
    case 1:
        todaysGreeting = "Hiii its Day 1 being a js coder beginner";
        break;
    
    case 2:
        todaysGreeting = "Hellooo its Day 2 being a js coder beginner";
        break;
    
    case 3:
        todaysGreeting = "Goodmorning its Day 3 being a js coder beginner";
        break; 
    
    case 4:
        todaysGreeting = "Good Afternoon its Day 4 being a js coder beginner";
        break;
  } 
    console.log(todaysGreeting);