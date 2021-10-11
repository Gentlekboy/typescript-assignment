// import { User } from "./classes"
// import { PersonInterface, UserInterface } from "./interfaces"

const getfirstName = localStorage.getItem("firstName")
const getlastName = localStorage.getItem("lastName")
const getusername = localStorage.getItem("username")
// const getemail = localStorage.getItem("email")
const getage = localStorage.getItem("age")
const getgender = localStorage.getItem("gender")

// console.log(
//     getfirstName,
//     getlastName,
//     getusername,
//     getemail,
//     getage,
//     getgender
// )

//Interface for Person class
interface PersonInterface{
    firstName: string,
    lastName: string,
    age: number | string
}

//Interface for User class
 interface UserInterface{
    username: string
}

class Person{
    gender: string

    constructor(gender: string){
        this.gender = gender

        function returnGender(): string {
            return gender
        }
    }
}

class User extends Person {
    firstName: string
    lastName: string
    userName: string
    age: number | string

    constructor(userData: UserInterface & PersonInterface, gender: string) {
        super(gender)

        this.firstName = userData.firstName
        this.lastName = userData.lastName
        this.userName = userData.username
        this.age = userData.age
        this.gender = gender
    }

    returnGender(): string{
        return this.gender
    }

    returnFirstName(){
        console.log(this.firstName)
        return this.firstName
    }

    returnLastName(): string {
        return this.lastName
    }

    returnUserName(): string {
        return this.userName
    }

    returnAge(): string | number {
        return this.age
    }
}

const userdata: PersonInterface & UserInterface = {
    firstName: getfirstName,
    lastName: getlastName,
    age: getage,
    username: getusername
}

const user = new User(userdata, getgender)

const showFirstName = document.querySelector("#showFirstName") as HTMLParagraphElement
const showlastName = document.querySelector("#showlastName") as HTMLParagraphElement
// const showEmail = document.querySelector("#showEmail") as HTMLParagraphElement
const showUserName = document.querySelector("#showUserName") as HTMLParagraphElement
const showAge = document.querySelector("#showAge") as HTMLParagraphElement
const showGender = document.querySelector("#showGender") as HTMLParagraphElement

showFirstName.innerText = "First Name: " + user.returnFirstName()
showlastName.innerText = "Last Name: " + user.returnLastName()
showUserName.innerText = "Username: " + user.returnUserName()
// showAge.innerText = user.returnAge()
showGender.innerText = "Gender: " + user.returnGender()