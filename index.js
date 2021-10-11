var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var username = document.querySelector("#username");
// const email = document.querySelector("#email") as HTMLInputElement
var age = document.querySelector("#age");
var gender = document.querySelector("#gender");
var saveButton = document.querySelector("#saveButton");
var successMessageContainer = document.querySelector("#successMessageContainer");
saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.localStorage.setItem("firstName", firstName.value);
    window.localStorage.setItem("lastName", lastName.value);
    window.localStorage.setItem("username", username.value);
    // window.localStorage.setItem("email", email.value)
    window.localStorage.setItem("age", age.value);
    window.localStorage.setItem("gender", gender.value);
    successMessageContainer.style.display = "block";
});
