import { User } from "./classes"
import { PersonInterface, UserInterface } from "./interfaces"

const getfirstName = localStorage.getItem("firstName")
const getlastName = localStorage.getItem("lastName")
const getusername = localStorage.getItem("username")
const getemail = localStorage.getItem("email")
const getage = localStorage.getItem("age")
const getgender = localStorage.getItem("gender")

console.log(
    getfirstName,
    getlastName,
    getusername,
    getemail,
    getage,
    getgender
)

const userdata: PersonInterface & UserInterface = {
    firstName: getfirstName,
    lastName: getlastName,
    age: getage,
    username: getusername
}

const user = new User(userdata, getgender)