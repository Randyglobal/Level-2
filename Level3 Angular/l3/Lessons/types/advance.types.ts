//Create new types from custom types using built-in advance types

import { UserType } from "./user.type";

const loginUser: Omit<UserType, 'DOB' | 'age'> = {
    username: '',
    email: ''
}

const emailUser: Pick<UserType, 'email'> = {
    email:''
}

const optionalUser: Partial<UserType> = {}