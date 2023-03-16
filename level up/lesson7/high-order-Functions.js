/**
 * Array HIGHER-ORDER Functions: A functions that exist in a list of an array
 * -Function that takes other functions as a parameter for it to exist, this is called a Higher order functions
 * A call back function is a function that gets executed after an event has occured.
 * 
 * Higher-Order functions recieve other functions
 */

//EXAMPLE 
// let array = [2,3,4,1,0,6]
// array.forEach(function(item) {
//     alert("The item is," + item);
//     console.log("The item is", item);
// });
//Or you can write it like this
let kandy = ['3', '4', '2', '7', '6', '8', '10'];
 kandy.forEach(function(item){
   console.log("this is average", item * item)
   console.log(item, " is a very good something")
});


let randy = [2,3,4,1,0,7,6];
randy.forEach(item => 
    // alert("This is Item line," + item*2);
    console.log("This is item", item*item));//if you want t square the values just multiply
//The forEach higher-order function mutates on the original array!
//i.e it executes on the original Array
//This is dangerious when doing functional programming or when you don't want to mutate
// The content of the original array.

console.log("This is array", randy );//here you will have the content of line 16,
// this is because the forEach modifies the original array.

//Single Threaded or Async JS

//2) Map higher-order function  (Search for explanation)
//Map higher-order function gets a container, makes a copy and modifies then gives you, you are the one 
// to decide if you want to multiply or save. 
//It is different from forEach in the sense that it does not copy the content but rather modifies it.

//Just like the forEach, it executes  a callback Function on each item in the array. 
//How ever it doesn't mutate the state of the original array. it creates  copy of it and 
// uses the copy for its execution. Map returns the (transformed) copy of the array 
let array2 = [2,3,4,6,7,2,1];
//To convert an array to object
// squareArrays = [
//     {
//         9:49
//     },
//     {
//         2:56
//     }
// ]
// let squareArrays = array2.map(function(item){
//     return item*item;
// });
let squareArrays = array2.map(function(item){
    return {[item]: item*item};
});
console.log("The squareArrays is", squareArrays);
// alert("The squareArrays is," + squareArrays);


//FILTER HIGHER ORDER FUNCTION
//executes a callback function on each item in the array.
//This call back function is called a predicate function
//This means that the function executes on items that satisfy a particular condition set by
//the programmer.
//The filter function returns an array of all the items tht satisfy the defined condition.
//Filter does not mutate the state of the original array.

//we want to get all the even numbers from array3

let array3 = [3,2,4,5,6,7,8,9,1];
let newEvenArray = array3.filter(function(item){
    //condition
    if(item % 2 == 0){
        return item;
    }
});
// evenNum = array3.newEvenArray(item => item % 2 == 0 ? item:null)
console.log("Thses are the even Number", newEvenArray);
alert("These are the even numbers," + newEvenArray);

//FIND.
//Find executes a callback(predicate) function on each item in 
// an array and returns THE FIRST ITEM and stisfies the defined condition.

//return the first even number in the array
let array4 =  [2,3,6,4,7,8];
let evenNum = array4.find(function(item){
    if (item % 2 == 0){
        return item
    }
});
console.log("The first even number is", evenNum);
// evenNum = array4.find(item => item % 2 == 0 ? item:null)

let userName = ['N Billy', 'I Randy', 'A Tracy', 'Y Ismael', 'N Aimee'];
let transaction = [
    {jan:3555000,feb:3555000, date:25},
    {jan:7855000,mar:3555000, date:25},
    {jan:67555000,apr:3555000, date:15},
    {jan:2355000,may:3555000, date:55},
    {jan:9855000,jun:3555000, date:15}
];
/**
 * [
 * {userName,date,total}
 * ]
 */

// let userName1 = 'N Billy';
// let transactions = {
//     jan:3555000,feb:3555000, 
//     jan:7855000,mar:3555000, 
//     jan:67555000,apr:3555000, 
//     jan:2355000,may:3555000, 
//     jan:9855000,jun:3555000
// };
// let transaction1 = Object.entries(transactions);
// for (var i = 0; i< transaction1.length; i++){
//     total = transaction1[i][1] + transaction1[i][1]
//         console.log("This is the result", total);
//     };




/**
 * Correction of exercise
 */

let finalResult = userName.map((element, index) => {
     let userObj = transaction[index];
     const objValues = Object.values(userObj);//Changes the object to an Array
     return{
        userName: element,
        total: objValues[0] + objValues[1],
        date: userObj.date
     }
});
console.log('Result is', finalResult);

//ARRAY METHODS
//Array methods are different from higher-order functions in that they perform pre-defined
//operation on the array and may or may not require any extra parameters to get their 
//operations don whereas Higher-order functions always expects callbacck function and can
//perform custom operations defined by the programmer on the array element.

//Example 



