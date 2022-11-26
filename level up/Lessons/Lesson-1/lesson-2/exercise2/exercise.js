/**
 * Write a program allows user log into a system only if they are eligible 
 * Eligibility condition is based on their age.
 * age > 16 but less than 35 is eligible. Anything else is Not eligible.
 * 
 * input = User's year of birth.
 * output = {
 * if eligible = 'Welcome to UTHC'
 * not eligible = 'Access denied'
 * }
 */
var userName = prompt('Year of Birth');
var age = 2022-userName;
if (age> 16 && age<35){
    alert('Welcome to UTHC');
}else{
    alert('Access denied')
}
if(age == null || age == undefined || age == ''){
    alert('Entry does not match');
}else{  
    alert('Entry does not Match to expectation')
}

// if (16<= age>= 35){
//     alert('Welcome to UTHC');
// }else{
//     alert('Access denied');
// }

// var userName = prompt('Year of Birth');
// var age = 2022-userName; 
// if(age !== Number){
//     alert('Entry does not match')
// }
// if(age> 16 && age<35){
//     alert('Welcome to UTHC');
// }else{
//     alert('Access denied')
// }

// if(){
//     alert('Entry does not match');
// }else{  
//     alert('Entry does not Match to expectation')
// }

// if(age> 16 && age<35){
//     alert('Welcome to UTHC');
// }else{
//     alert('Access denied')
//     if(age == null || age == undefined || age == ''){
//         alert('Entry does not match');
//     }
// }0