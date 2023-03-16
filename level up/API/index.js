let Username = document.querySelector('.Username');

let Password = document.querySelector('.Password');

let btn = document.querySelector('.submit');

// arrayObject=[];

btn.addEventListener('click', function(){
    let password= Password.value;
    let username= Username.value;
    userInList = localStorage.getItem('user');

    if(userInList){
        userInList = JSON.parse(userInList);
    }else{
        alert('account does not exist')
    }
    for(const user of userInList){
        let valueValues = Object.values(user);
        if(valueValues.includes(username)&& valueValues.includes(password)){
            alert(` Welcome ${user.username}`);
            return;
        }else{
            alert('Invalid details')
        }
        // return
    }
})
