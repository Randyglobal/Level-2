/**
 * SCOPING
 * -Global scop can be accessed anywhere in the code. good but bad(they are too harmful cuz
 * at any point in time can become something else)
 * -Block scope
 */
// Read on Recursion
 
//Global scope variables
let users = ['Kambang','Peter','Jude','Randy'];
let ageMen = ['Ben','Brian','Ezekiel','Samuel'];

//Block scope
for(let index = 0; index<10; index++){
    //user = {}
    //ageMen = false
    console.log('Index is =>', index);
}
//Block scope (in for brackets and if you do a console.log out of the bracket, it shows you undefined)
if(true){
    let players = ['Etoo','Dino','Mbappe']
console.log(players)
}

//function scope
const greetings = (salutation) =>{
    let name = 'Kambang';
    //users.map((user)) => console.log(user)
    alert(salutation+ ' '+ name)
};

let makers = (makrs) =>{
    let name ='Randy';
    let result = greet()();

    function greet(){
    console.log('name is =>',name);
     return () => {
            let age = '56'
            return age;
        }
    }
    // greet('Hello')
    console.log('Result is',result)
    // console.log('The actual result is',result())

}
makers(3);


//IIFEs => Immediately Invoked Function Expression(Gouping operator - ())
//used to create modules
let valueToken = 'Hello Guys'
(function tokenizer() {
    const tokenCreator = (token)=> Math.ceil(Math.random() * token * Date.now());
    console.log('This token is =>', tokenCreator(valueToken)) 

})(valueToken   )


