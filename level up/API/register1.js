let Username = document.querySelector('.Username');

let Password = document.querySelector('.Password');

let email = document.querySelector('.Email')

let btn = document.querySelector('.submit');

// const reset = document.querySelector('.login')

// arrayObject=[];

btn.addEventListener('click', function(){
    let createdObjects ={
        username: Username.value,
        Password: Password.value,
        email: email.value
    }

    let objectArray =localStorage.getItem('user');
    let {username:userOfNames,Password:passwordOfNames,email:emailOfNames} = createdObjects;
    if(objectArray){
        objectArray = JSON.parse(objectArray)
    }else{
        objectArray = []
    }
    for (const object of objectArray){
    let {username:names,Password:passwordNames,email:emailNames} = object;
    if(object.username == Username.value){
        alert('Existing Account')
        return
    }

    }
    for (const object of objectArray){
        let {username:names,Password:passwordNames,email:emailNames} = object;
        if(object.email == email.value){
            alert('Email Exist')
            return
        }
    
        }


    
    objectArray.push(createdObjects);
    storedItem = localStorage.setItem('user',JSON.stringify(objectArray));
    alert(`${Username.value}Account Created successfully`);
    // reset.reset();
    // console.log(objectArray);
    // for(var i = 0; i=objectArray.length; i++){
        // let {Username: userName, Password: passWord, email: Email} = putItem;

        // let getElemet = localStorage.getItem('user', Password.value)
        // if(getElemet == Password.value){
        //     alert('Account already exist');
        //     // break;
        // }else{
            
        // // storedItem = localStorage.setItem('user',JSON.stringify(objectArray));
        
        // }
    });