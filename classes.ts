// import { PersonInterface, UserInterface } from "./interfaces"

// class Person{
//     gender: string

//     constructor(gender: string){
//         this.gender = gender

//         function returnGender(): string {
//             return gender
//         }
//     }
// }

// class User extends Person {
//     firstName: string
//     lastName: string
//     userName: string
//     age: number | string

//     constructor(userData: UserInterface & PersonInterface, gender: string) {
//         super(gender)

//         this.firstName = userData.firstName
//         this.lastName = userData.lastName
//         this.userName = userData.username
//         this.age = userData.age
//         this.gender = gender
//     }

//     returnGender(): string{
//         return this.gender
//     }

//     returnFirstName(){
//         console.log(this.firstName)
//         return this.firstName
//     }

//     returnLastName(): string {
//         return this.lastName
//     }

//     returnUserName(): string {
//         return this.userName
//     }

//     returnAge(): string | number {
//         return this.age
//     }
// }

// export{User}