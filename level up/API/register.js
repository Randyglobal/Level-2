let Username = document.querySelector('.Username');

let Password = document.querySelector('.Password');

let email = document.querySelector('.Email')

let btn = document.querySelector('.submit');

// const reset = document.querySelector('.login')

// arrayObject=[];

btn.addEventListener('click', function(){
    let putItem ={
        username: Username.value,
        Password: Password.value,
        email: email.value
    }

    let objectArray =localStorage.getItem('user', Username.value);
    if(objectArray){
        objectArray = JSON.parse(objectArray)
    }else{
        objectArray = []
    }

    objectArray.push(putItem);
    storedItem = localStorage.setItem('user',JSON.stringify(objectArray));
    // reset.reset();
    console.log(objectArray);
    // for(var i = 0; i=objectArray.length; i++){
        // let {Username: userName, Password: passWord, email: Email} = putItem;

        let getElemet = localStorage.getItem('user', Password.value)
        if(getElemet == Password.value){
            alert('Account already exist');
            // break;
        }else{
            
        // storedItem = localStorage.setItem('user',JSON.stringify(objectArray));
        
        }
   // }
    
    // arrayObject.push(putItem);
    // localStorage.setItem(Username.value,JSON.stringify(arrayObject));
})
//     localStorage.setItem('username', Username.value);
//     localStorage.setItem('password', Password.value);

//     function check(){
//         let useArr = localStorage.getItem(Username.value);
//         let passArr = localStorage.getItem(Password.value);

//         let stored = document.getElementById('user');
//         let storedPass = document.getElementById('pass');

//         if(stored == useArr[0] && storedPass == passArr[0]){
//             console.log('User already exists')
//         }else{
//             console.log('Welcome New User')
//     localStorage.setItem('user',JSON.stringify(arrayObject));
//          }
//     }
// console.log(check())
// })
// if(localStorage.key([]) == Username.value){
//     console.log('This account already exist')
// }else{
//     localStorage.setItem(Username.value,JSON.stringify(arrayObject));
  
// }

// console.log(localStorage.key([0]))

// Username.forEach(user => {
//     for(var i = 0; i=username.lenght; i++){
//         user.cla
//     }
    
// });
