//In Js , A string can be written with a single or double quote '' or ""

let userName = 'Juice';
let fruite = "Apple";

//He's a good guy
let complement = "He's a good guy";

//he said "Go home"

let instruction = 'He said "Go home"';

//Strings have methods and properties
//1)Length Property
//Strings have a length property
console.log('This will give you the length of the string : ', instruction.length);
//2)Split Method
//This method splits a string based on the condition specified).
//It returns an array of the splitted character of the string

let result = instruction.split('[0]') + "\n" + complement.split('[0]') + '\n' + userName.split('[0]');
console.log('Splitted result', result)


//3) StartWith/endsWith (These methods is used to check if the string starts and ends with
// a particular character)
let starts = instruction.startsWith('J');

let end = instruction.endsWith('J');

console.log("This starts with", starts);

console.log("This ends with", end);

//Includes: Checks if a character stream exist in a string

let character = "Hello World";

let includes = character.includes("Hello");

console.log("Does it exist?", includes);

//Exercise
//Write a function that can be used to reverse a string
//e.g Hello => olleH

let firstName = "Randy";

let splitName = firstName.split('');

let reverse = splitName.reverse('');
let answer = reverse.join('');


console.log("This is the spit", splitName);
console.log("This is the Reverse",reverse);
console.log("This is the answer", answer)

// let nameF = "John Randy";
// let nameSplit = nameF.split('[0]');

// let reverseName = nameSplit.reverse('[0]');
// console.log("This is the result" , nameSplit);

// console.log("This is the reverse", reverseName);

function reverseName(Randy){
    let splitName = Randy.split('');
    let reverse = splitName.reverse('');
    return reverse.join('');
}
console.log("This is the reverse",reverseName("'Randy'") );



//   function revers(str){
//   return str.split('').reverse().join('');
//  }
//  console.log(revers("Randy") );
 

//Assignment
//Write a function that counts the frequency of characters in a string
//and displays the results
//e.g charFrequency('hello') => {
// h:1, e:1, l:2, 0:1
//}

var charFrequency = "Hello";
count = 0;
function anyString(){
for(var i = 0; i < charFrequency.length; i++){
  if(charFrequency.charAt(i) === 'H'){
  }
  console.log('H:',count);
}
}
anyString("Hello")

// function charFrequency(Hello){
//   var character = "Hello";
//   count = 0;
//   for(let i = 0; i < character.length; i++ ){
//     count++;
//   }
// }
//   console.log(character.charAt(i) === 'H');
//   console.log(character.charAt(i) === 'e');
//   console.log(character.charAt(i) === 'l');
//   console.log(character.charAt(i) === 'o');
var nothing = "randy"
console.log(nothing.split('').reverse('').join(''))