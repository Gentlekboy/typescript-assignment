const firstName = document.querySelector("#firstName") as HTMLInputElement
const lastName = document.querySelector("#lastName") as HTMLInputElement
const username = document.querySelector("#username") as HTMLInputElement
// const email = document.querySelector("#email") as HTMLInputElement
const age = document.querySelector("#age") as HTMLInputElement
const gender = document.querySelector("#gender") as HTMLSelectElement
const saveButton = document.querySelector("#saveButton") as HTMLInputElement

saveButton.addEventListener("click", (e:Event)=>{
    e.preventDefault()

    window.localStorage.setItem("firstName", firstName.value)
    window.localStorage.setItem("lastName", lastName.value)
    window.localStorage.setItem("username", username.value)
    // window.localStorage.setItem("email", email.value)
    window.localStorage.setItem("age", age.value)
    window.localStorage.setItem("gender", gender.value)
})