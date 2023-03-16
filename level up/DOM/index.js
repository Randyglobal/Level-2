/**
 * DOM (DOCUMENT OBJECT MODEL)
 */


//DOM-FUNCTION: accessed using the document object
//The document object is a property of the global window object : window.document.getElementById
//window is automatically created when you link the html document with js

//getElementById returns an HTMLElement

//getElementByClassName: Returns an HTMLCollection

//querrySelectorFunction: Returns a single DOM Node
//document.querrySelect('#-----') || ('.')

//querrySelectorAll: Returns a nodelist of all the elements that match with the name speified.
//document.querrySelectAll('#-----')

//Manipulating element text in js
//let textT = document.querySelector('h1#title-element').innerHTML = "Billy's GOAT SignUp Form";
//or
  let textTt = document.querySelector('h1#title-element');
  textTt.textContent = "Randy's latest form"; 

// Manipulating styles using the style attribute
let textT = document.querySelector('h1#title-element')
textT.style.background = "red"; 
textT.style.height = "50px"


//For the styles, you will notice that  the properties name will be in camelCase

//manipulating styles by adding the class names
textT.classList.add('active-class')//adds active class to an element(ask Mr mathieu)<h1 class = "active-class"></h1>
textT.setAttribute('id', 'hello-id')//targets the id and changes it to hello-id

// Dynamically create and add elements
//we have created the buttons but now we have to know where to put them
let startBtn = window.document.createElement('button');
startBtn.style.width = '50px'
startBtn.style.height = '50px'

let stopBtn = window.document.createElement('button');
stopBtn.style.width = '50px'
stopBtn.style.height = '50px'

let headStop = window.document.createElement('button')
headStop.style.width = '80px'
headStop.style.height = '20px'



//apply defined styles
startBtn.classList.add('controlBtn');
stopBtn.classList.add('controlBtn');
headStop.classList.add('controlBtn');

startBtn.setAttribute('id','startBtn');
stopBtn.setAttribute('id','stopBtn');
headStop.setAttribute('id', 'headStop');





startBtn.textContent = "start"
stopBtn.textContent = "Stop"
headStop.textContent = ""
//so we will use the querySelector

let form = document.querySelector("form.formContainer");
form.appendChild(startBtn);
form.appendChild(stopBtn);
form.appendChild(headStop)

//DOM EVENTS
//we can bind events to the global window object 
window.addEventListener('click', function(event){
    console.log("This is the event", event)
})

//Accessing inputs elemts

let textInput = document.querySelector("input#textInput");
let emailInput = document.querySelector("input#emailInput");
let passwordInput = document.querySelector("input#passwordInput");

//Some attributes
textInput.setAttribute('placeholder', 'Enter user name');
emailInput.setAttribute('placeholder', 'Enter user email');
passwordInput.setAttribute('placeholder', 'Enter user password');

///some events listiners
textInput.addEventListener('keyup', (event) =>{
    const inputValue = event.target.value 
    const getStatusFromStore = localStorage.getItem('start');
    if(getStatusFromStore == 'true'){
    if(inputValue == ""){ 
        textTt.textContent = "No data after change"
    }else{
        textTt.textContent = inputValue
    }
}
})

emailInput.addEventListener('keyup', (event) =>{
    const inputVal = event.target.value
    if(inputVal == ""){
        headStop.textContent = "No data after change"
    }else{
        headStop.textContent = inputVal
    }
})

// let heading = window.document.createElement('h2');
// heading.innerHTML = "Hello";

// heading.classList.add('header')
// heading.setAttribute('id', 'header');

// let former = document.querySelector('form.formContainer')
// former.appendChild()

startBtn.addEventListener('click', (event) =>{
  event.preventDefault();
  //localStorage => WEB APIs
  localStorage.setItem("start", true)
})

stopBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    //localStorage => WEB APIs
    localStorage.setItem("start", false)
  })

let allInputs = document.querySelectorAll("input.formControls");
allInputs.forEach(input =>{
    input.addEventListener('focus', (event) =>{
        input.style.border = "2px solid red";
    })

    input.addEventListener('blur', (event) =>{
        input.style.border = "";
    })
});

