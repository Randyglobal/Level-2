export class Animals{
    name: string;
    type: string;
    dateOfBirth: string | Date | number;
    //As it is protected, you can only access in the class and subclass
    //and it is based on inheritance
    protected gender: string;
    private color: string;

    constructor(animalName: string){
   this.name = animalName
    }

    //when you want to change the value of color
    // only within a class
    getRandy(){
        this.color
    }//accessing the private property within the class
    setRandy(itColor: string): void{
        this.color = itColor
    }
}



