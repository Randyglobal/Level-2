
//creating a class student, begin with a Capital letter
export class Student {
    //creating attribute
    name = 'Randy';
    age = 0;
    gender = 'M';

    scores=[];
    books = {};

    addBook(bookData = {name: '', course: ''}){
        this.books[bookData.name] = bookInfo;
    }
    addScore(score){
        this.score.push(addBook)
    }

    getBook

    // can take more than one parameter
    constructor(nameGiven,age,gender){
        this.name = nameGiven;
        this.age = age;
        this.gender = gender;
    }


    //getter
    getName(){
        return this.name
    }
    setName(nameGiven){
        //here you must not return
        this.name = nameGiven
    }

    genderStudent(){
        // alert('Hello' + '' + this.name)
        console.log('Hello', this.name + this.age + this.gender);
    }

    checkTransript(){
        //performing some activities here
    }
   
}

//creating an instance of  the class
// To create an instance of a class, we use the new Keyword
//e.g

const Randy = new Student('King');
Randy.genderStudent();
//If we want to change the name, we use the constructor method




