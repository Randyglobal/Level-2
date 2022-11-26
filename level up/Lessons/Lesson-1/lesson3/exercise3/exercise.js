/**
 * Write a program that does the following
 * Gets th followinginfo from different user;
 * age
 * height
 * weight
 * 
 * After comparing the different inputs recieved from the user,
 * print output;
 * The oldest and youngest user
 * the tallest user
 * the heaviest user 
 * 
 */
var firstUserage = prompt('Please Enter first Age');
var firstHeight = prompt('Please Enter first Height');
var firstWeight = prompt('Please Enter first weight');


var secondUserage = prompt('Please Enter second Age');
var secondHeight = prompt('Please Enter second Height');
var secondWeight = prompt('Please Enter second weight');

var thirdUserage = prompt('Please Enter third Age');
var thirdHeight = prompt('Please Enter third Height');
var thirdWeight = prompt('Please Enter third weight');

if (firstUserage > secondUserage){
    alert('firstUserage is greater');
}if (secondUserage > thirdUserage) {
    alert('secondUserage is greater');
} else {
    alert('thirdUserage is greater');
}

if (firstUserage < secondUserage){
    alert('firstUserage is lowest');
}else {
    alert('secondUserage is lowest');
}

if (firstHeight > secondHeight){
    alert('first Height is greater');
}if (secondHeight > thirdHeight) {
    alert('second height is greater');
} else {
    alert('third Height is greater');
}

if (firstWeight > secondWeight){
    alert('first weight is greater');
}if (secondWeight > thirdWeight) {
    alert('second weight is greater');
} else {
    alert('third weight is greater');
}
// {
//     alert('secondUserage is greater');
// }

// if (secondUserage > thirdUserage ){
//     alert('secondUserage is greater');
// }else {
//     alert('thirdUserage is greater');
// }

// if (firstHeight > secondHeight ){
//     alert('firstHeight is greater');
// }else{
//     alert('secondHeight is greater')
// }

// if (firstWeight > secondWeight ){
//     alert('firstWeight is greater');
// }else{
//     alert('secondWeight is greater')
// }
