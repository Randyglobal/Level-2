class Student{
    //In every Js class, there are atleast 2 methods that get executed under-the-hood

    //constructor() -> This methos is responsible for instantiating a class

    //This simply means that, its responsible for creating objects of a class
    
    //destruction() -> This method is responsible for destroying instances of a class
    //after usage (GARBAGE COLLECTION)

    //creating a constructure
    // Dependency injection frame work is is based on the notion that some classes(objects) depend on others for them to work correctly
    //Example if  a student wants to be pay school fee, he/ she should be part of the class before paying the fee

    //class names
    myFee: number;
    ourSchoolTimeTable: object;
    vacation?: Date | string;
    myCourse: string[];
    name: string = 'Randy'
    age: number
    gender: string
    hasSucceeded: boolean;    
    constructor(
        //dependency
        schoolFee:number, 
        schoolTimeTable: object, 
        vacation?: Date | string,
        courses?: string[]
        ){
            //let class names = dependency
            this.myFee = schoolFee;
            this.myCourse = courses ?? [];
            this.vacation = vacation;
            this.ourSchoolTimeTable = schoolTimeTable

        }
}

//when instantiating, you must include what is in the constructor

const Randy  = new Student(1,{ts: 'tuesday'}, 'December', ['Js' , 'ts' , 'Angular'])
Randy.age = 12;
console.log('The student Romaric is ', Randy);


const Billy = new Student(3,{oop: 'Tutor'});

Billy .gender = 'male'
Billy.name = 'Billy';
console.log('Thi is all about Billy', Billy)

