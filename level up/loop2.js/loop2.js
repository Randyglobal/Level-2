/**
 * WHILE LOOP:
 * 
 * let loopCounter = 0; 
 * SYNTAX: while(5<10)this will take forever to run so you take this(loopCounter<10{
 * console.log(loopCounter);
 * loopCounter++ if u want to take only even numbers +=2;
 * }
 * to check a particular condition
 * let loopCounter = 0; 
 * while(loopCounter<10{
 * console.log(loopCounter);
 * if(loopCounter==8){
 * }break
 * loopCounter++;
 * }
 */
// let loopCounter = 0;
// while (loopCounter < 10){
//     console.log(loopCounter);
//     loopCounter++;
// }
// to reverse the elements of an array in the while loop
let arr = [2, 3, 9, 0, 6, 7];
let i = 0;//Question why dont you put one instead
let newArr= [];
while (i < arr.length){
    newArr[i] = arr[arr.length - (i+1)];//6-0 at this point it will show undefined because 
    // the answer will be 6 and the array 6 has not been defined, 6-1 then when u add 1 to the index, it the becomes clear
    // newArr[0] = arr[5]
    i++;
}
alert('The New array is,' + newArr);

//Do...while loop
//will operated atleast once
do {
    alert('Hello');
} while(false);

//for...in loop used in view js (ngfor)
//mostly used to go through object inferers
var user = {
    name : 'Randy',
    age: 23,
    gender: "M",
    address: "sadi",
    isStudent: true
}
for(randy in user){
    alert('this is randy,'+ randy);
    console.log("This is info", randy);
}

//for....of loop used in angular
var scores = [20, 90, 78, 80, 67];
for (var score of scores){
    alert('"score is....,' + score);
}