 //keywords and examples
/* var, let, const, for, while, object, function, if, class, exrtends,import, export, else, default, delete, in, with
of, do*/

//variable decleration keyword i.e var, let, const
//SYNTAX => keyword should proceed the variable name e.g 
// var username ='randy';
// var forUsername = 89;
// variable naming conversion
/*
cannot beggin with special symbols e.g @, #, *
variable names spaced cannot be accepted e.g var user name = 78;x
var max-age = 78;x
var #gender = 'male';xvar if = 'man'; x
var 'good man' =  56;
*/

//DATA TYPE
//PRIMITIVE data type
//example string, number, boolean, undifined, null
//sting e.g: var school = '7 Academy';
//number e.g var phoneNumber = '65449538';
//boolean e.g var isOpen = true;
//null e.g var location = null;
//undifined e.g var address = undifined:
//username = 'randy';
var age = 90;
var amount = 8700

//OPERATOR PRECEDENCE to check if specific conditions are satisfied i.e if they result to True or False

//ARITHMETIC OPERATORS
console.log('Addition is ', age + amount);
console.log('Subtraction is ', age - amount);
console.log('Division is ', age / amount);
console.log('Multiplication is ', age * amount);
console.log('Modulo is ', age % amount);

//OPERATOR PRECEDENCE to check if specific conditions are satisfied i.e if they result to True or False
//The outcome of a LOGICAL(condition) EXPRESSION resolves to either TRUE oR FALSE but 
//for an ARITHMETIC EXPRESSION it can resolve to anything

//LOGICAL OPERATORS
//(?, ??, ||, &&) LOGICA OR (||)
//LOGICAL AND(&&)\
///NULL COALESCING OPERATOR (??)
//(?) => TENARY OPERATOR TO CHECK IF THE VALUE IS UNDEFINED 


var isPresent = true || false;

//T10ENARY OPERATORS 
//(SYN0TAX variable = condition ? 'i will return if true' : 'i will not return if false')
var puffpuff = true;
var isAlive = puffpuff ? 'he is alive' : 'He is Dead!';
//var isAlive = puffpuff = true? 'He is alive' : 'He is Dead'
 