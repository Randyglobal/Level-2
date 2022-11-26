//WHAT IS ES6 this is simply the modified version of javascript which was brought in 2015
// which is called the Ecma script 2015 (version 6).the versions behind it is ES5,ES4
//Ecma


//Variable declaration
// var is dead
let userName = "Randy";
// userName = "Kandy";
const age = 34;

//TEMPLATE Strings
alert(userName + ' is ' + age + ' years old');
// let display = userName+ ' is ' + age+ ' years old';
//TS 
let display = `${userName} is ${age} years old in ${2022 - 1}`;
alert(display);
console.log(display);


//Functions
//To declare a function, we can use the following methods

//1)Function literal notation
//2)Function expressions
//Types of functions
//-Named Function : they are functions without a name
function sayHi() {
    alert('Hello World');
    console.log('Hello World');
    prompt('what is your name');
}
//Function invocation
sayHi();
//-Anonymous functions: They are functions without a name
const SayHello = function () {
    alert('Hello World from Say hi');
    console.log('Hello World');
    prompt('what is your name');
}
//Function invocation
SayHello();
//differences between function expression and other functions:
//-Functions declared using the function literal notation can be invoked before the function decleration
//while those that are declared using the function expression cannot


//-Arrow functions: used when defining a callback function
//callback function is functon which is called during an operation. Some arrow functions are anonymous

const calculateAge = age => age * 2; //ask questions
alert('age is,' + calculateAge(40));


//this round brackets () help you to put parameters.
//if the block of code you want to execute is not much, u can exclude the curley function
//e.gconst calculateAge = age =>  age * 2


//{}this defines the blog of code each time the function is executed

//implement a function that can be used to determine if a number
//is true or false
//The function returns true if even otherwise false

function isEven(num) {
    if (typeof num !== 'number') {
        alert('this is wrong');
        throw ('This is inappropriet!!!');
    }
    if (num % 2 == 0) {
        return true;
 return false;
    }
   
}
alert(isEven("5h"));
// isEven()

const isMax = (a, b) => {
    if (a > b) return a;
    return b;
}

alert(isMax(6, 90));


//function that returns middle elements and its index in an array
// arra = [1,2,3,4,5,6,7] = 7;
// arra[4]=4

const getMiddle = (array) => {
    let oddMid = Math.floor(array.length / 2);// try tracy's method
    let evenMid = ((array.length) / 2);
if (isEven(array.length)) {
    return {
        element: array[evenMid],
        index: evenMid
    }
}
return {
    element: array[oddMid],
    index: oddMid
}

let myArr = [4,5,6,8,8,9,8,7,9,8,3];
console.log("The middle element is", getMiddle(myArr));
alert("The middle element is," + getMiddle(myArr));
}