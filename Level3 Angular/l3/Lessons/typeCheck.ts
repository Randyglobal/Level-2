import { AppConfig } from "./types/constants.Enum";
import { User } from "./types/user.class";
import { IUser } from "./types/user.interface";
import { UserType } from "./types/user.type";

//We shall be testing all our custom types here
const user: IUser = {
    name: '',
    age: 0,
    gender: '',
    address: '',
}

//Array of user object
const arrUsers: IUser[] = [
    {
        name: '',
        age: 0,
        gender: '',
        // address: '', we made it optional
    }
]

const userOfClassType: User = {
    name: '',
    age: 2,
    gender: '',
    matricule: 344556,
    countryOfOrigin: '',
}

const arrayClassUser: User[] = [
    {
        name: '',
        age: 2,
        gender: '',
        matricule: 344556,
        countryOfOrigin: '',
    }
]

// const PI: AppConfig.PI
const areaOfCircle = 7 * 7 * AppConfig.PI 

const emailDomain = AppConfig.EMAIL_DOMAIN


const randy: UserType = {
    username: '',
    email: '',
    age: '',
}