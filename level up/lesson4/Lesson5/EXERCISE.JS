//Exercise 1: write a program that displays all the the properties keys 
//of the object that are multiples of 5
// var exercie1 = {
//     a: 25,
//     b: 3,
//     c: 4,
//     j: 73,
//     z: 60
// }

var multipleVa = {
    a: 16,
    b: 45,
    c: 4,
    j: 15,
    z: 3
};
var multiple5 = Object.entries(multipleVa);
for(var i = 0;  i < multiple5.length; i++){
if(multiple5[i][1] % 5 == 0){
    alert(multiple5[i][0] + ',This is a multiple of 5');
    }else{
        alert(multiple5[i][0] + ', This is not a multiple');
    }
}
// alert('This are multiples of 5, ' + multipleObj);

// var multipleKeys = Object.keys(multipleObj);
// console.log('The multiples are', multipleKeys);