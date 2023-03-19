class School {
    //GETTERS AND SETTERS

    //Simple class methods used to get and set classes respectively

    name: string;
    age: Date | string | number;

    getName(){
        return this.name;
    }
    setName(inputName: string) : void{
      this.name = inputName
    }
    getAge(){
        return this.age;
    }
    setAge(inputAge: Date | string | number): void{
        this.age = inputAge
    }

    //Access modifiers(The need for getters and setters)
    //OOP in ts presents to us a number of access modifiers such as 
    //private, public, protected, readonly, static, abstract
    //access modifiers define the access level properties/methods of a class

    //public: accessible to the outside world, an this is the default behavoir of properties
    // and methods of a class 
    public readonly location: string = 'Bali';
    //private can be accessed only within the class

    private schoolAccountBalance: number;

    getSchoolAccountBalance(){
        return this.schoolAccountBalance;
    }
}
//This trows an error because it is private to solve this, we get it in the class first
// SAA.schoolAccountBalance



const SAA = new School ();

const ourLocation = SAA.location //reading

// SAA.location = '' //writing/change

SAA.getSchoolAccountBalance()

SAA.setAge(5);
SAA.setName('Seven Advanced Academy')

console.log('This is SAA age', SAA.getAge())
console.log('This is SAA name', SAA.getName())
