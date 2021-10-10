import { PersonInterface, UserInterface } from "./interfaces"

class Person{
    gender: string

    constructor(gender: string){
        this.gender = gender
    }
}

class User extends Person {
    constructor(userData: UserInterface & PersonInterface, gender: string) {
        super(gender)
    }
}

export{User}