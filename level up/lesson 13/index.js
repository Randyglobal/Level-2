//Spread Operators (...)introduced in ES6
//when you want to copy a content into another
//you can either spread it in an object or in an array

let marks = [2,3,4,6,90,54,55,21,34]

let people = {
   Billy: 'Tata',
   Randy: 9,
   ismael: 10
}

let user = {
    name: ['randy', 'kambang','billy', 'Ismael'],
    Totalmark:[...marks],
    people:{...people}
}
console.log(user);

/**
 * REST PARAMETERS
 */
  const getActualNumber = score => score * 4;
  console.log('This is it', getActualNumber(5));

//   const getNumber = score => score.map(val => val * 4)

   const getNumber = (...score) => score.map(val => val * 4)//here we use the rest parameter
   //we could also use the rest parameter and spread operator stating precisely where they are stored
   //e.g
   const getNumberOne= (...score) => {
    let internalNumber = [...score]
    return internalNumber.map(val => val * 4)
   }

   console.log(getNumberOne(20,10,22,9,2));

  console.log(getNumber(20,10,22,9,2));

  /**
   * Destructuring
   * - Object Destructuring
   * -Array Destructuring
   */

  //object Distructuring

  let userData = {
    name: ['randy', 'kambang','billy', 'Ismael'],
    Totalmark:[...marks],
    people:{...people}
}
//if u want to call for each name and total mark and people,
//u can normally say
// let names = userData.name //etc

// since this will be long, we do distructuring

let{ name, Totalmark, people:Randy 
} = userData;
console.log(userData);
console.log('This is People',people)



let array = [{user1:3},{user2:6,married:12},{user9:0}]
//getting each object from the array
let [user1, user2, user3] = array;
console.log(array)
console.log(user1)