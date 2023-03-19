import { Ivehicle } from "./vehicle.interface";

export class Vehicle implements Ivehicle{
    brakes(position: string): string {
        //Write our logic
        return 'Car Stops'
    }
    pompom(position: string): boolean {
        //Write our logic
        return true
    }
    accelerator(level: number): string | number {
        //Write our logic
        return 'Increase speed'
    }
    
}

const schoolBus = new Vehicle();

schoolBus.accelerator(5)