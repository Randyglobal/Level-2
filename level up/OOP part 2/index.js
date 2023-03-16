//function is more generic and specific
//while framework is more wider
//a module is less wider

//A Module - It only provides a single piece of function
//Libary - A group of functions or collection of functions used for a specific purpose

//Factory Functions

// object defines size of the program (OOP)
//class defines blue print(pictoral design) of an object
//prototype
//model

//class property/attribute(access modifier(public, $ private))

//Class Method: Constructor(Used to create an instance of a class(function that runs when a class is about to be created)), Distructor
//getters $ setters
//method - Action taken by the class
//Abstract class is a class that does not need initialisation


//creating a class student, begin with a Capital letter
import { Student } from "./Student.js";


//creating an instance of  the class
// To create an instance of a class, we use the new Keyword
//e.g

const Randy = new Student('King',12,'F');
Randy.genderStudent();
//If we want to change the name, we use the constructor method

Randy.setName('Billy');
const getOtherName = Randy.getName()
console.log('name is ', getOtherName);


