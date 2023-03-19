import { Animals } from "./Animals";

export class WildAnimals extends Animals{
    //we give it a category
    category: string[];
    name: string;
    constructor(animalName: string){
        //    this.name = animalName
               super(animalName);
            }

}

const lion = new WildAnimals('Lion - The King of the jungle');
lion.dateOfBirth = 43;
lion.setRandy('green')
lion.category = ['4 legs', 'Carnivorous']

console.log('The King is', lion)
//This shows a problem since color is private
// lion.color = 'white';
  