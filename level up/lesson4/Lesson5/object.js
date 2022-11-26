var obj1 = {};
var obj2 = {
    name: 'Randy',
    age: 12,
    isMarried:true,
    language:['en','fr'],
    schools:{
        highSchool:'Douala'
    }
};
//Keys in an object needs to be unique
//Versatile: this means they are very dynamic || rapidly changing
//they are mutable: This means you can change their values in real time
//Objects are reference types: This means if you creat 2 variables v1 and v2
// if you store the first v1 in v2, and if you change the value, v2 changes the reference and not the value
obj1 = obj2;
// alert('This is object 1, ' + obj1)
console.log('This is object1', obj1);
console.log('This is object2', obj2);

////Accessing properties of an object:
//The Dot Notation(.) => obj.name
//e.g
obj2.name;
alert('This is the name of object 2,' + obj2.name);
console.log('This is the name property of object 2', obj2.name);
//The Square bracket notation can be used to concatinate now e.g => obj[]
alert('this ids the age property of object2,' + obj2['age']);
console.log('This is the age property of object2', obj2['age']);
///some cases may false you to use the square bracket notation:Cases goes as follows:
var obj3 = {
    'first-name' : 'Randy',
    'Place of Birth' : 'Somewhere',
    'Max height' : 10,
}
//This will not run because its not a one wor like in camel case rather its seperated
// obj3.first-name
// alert('This is object3 firstname,' + obj3.first-name);

var obj4 = {
    man2: 'Billy',
    2: 'Billy',
    1: 'Man',
    3: 'Randy',
}
//Here it can not go and you will be forced to use the square bracket
// console.log('This is a unique key',obj4. 4 - 5 + 3);
// console.log('This is the unique key test', obj4[4 - 5 + 3]);
// console.log('This is the unique key test', obj4['man' + (2)]);

alert('This is the unique key test,' + obj4[4 - 5 + 2]);
alert('This is the unique key test,' + obj4['man' + (2)]);

//Objects - refence types
var obj5 = {name:'Billy',age:12};
var obj6 = obj5;
obj6.name = 'Randy';

alert('This is object5,' + obj5);
alert('This is object6,' + obj6);

console.log('THis is object5', obj5);
console.log('This is object6', obj6);


//memory location


//Object Methods: Things we can use to do very important things with objects

// They are mutable
var staticObj = {
    name: 'Randy',
    age: 34,
}
staticObj.name = 'New person';

alert('This is saticObj,' + staticObj);
console.log('This is staticObj ', staticObj);
Object.freeze(staticObj);  //this stops you or anyother person from changing anything in the object
staticObj.age = 90;
console.log('This is staticObj ', staticObj);


Object.keys(staticObj)// returns the keys of an object as an array of strings
let staticKeys = Object.keys(staticObj);
console.log('staticKeys => ', staticKeys);

//returns the value of an object
let staticValues = Object.values(staticObj);
console.log('staticValues => ', staticValues);

//Object.entries. Returns an Array of the key and the values of each single property which we can see through to get the key and values
let staticEntries = Object.entries(staticObj); // can be used in loops