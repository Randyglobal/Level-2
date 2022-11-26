/**
 * if( 1!= 2){
 * failcount++
 *   }
 * if(failcount >= 4){
 * alert('game over!')alert, prompt  in js is synchronous
 * }break; can be used to exit a block of code in a for loop or while
 * iteration(repetition)
 * 
 * 
 */
// var randy = true;
// var i = a;
// for(; 1 ;){
//  if(randy = true && i <1){
//     var m1 = prompt('Enter the number');
//     alert('You are correct');
//  }else{
//     alert('You are wrong')
//  }
//     a++
// }

//An array is a data structure that stores data sequencially
//Array in Js store multiple datas of different types in a sequencial order
//everything in js is an object
// an array can equally be defined as a special type of object
//link list(list of arrays that are linked)

var numSquare =['1', '2', '3', '4', '5'];
var i;
for (i = 0; i< numSquare.length; i++){
   numSquare[i] = numSquare[i] * numSquare[i];
}

alert(numSquare);
