//Write a program to calsulate the area of a rectangle
//Optional parameters or default parameters
function calculateArea (PI = 3.14,r){
    let randy = PI*r*r;
    return randy;
}
console.log("This is the result", calculateArea(3.14,2))
//default parameter