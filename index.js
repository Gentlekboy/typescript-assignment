var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var age = document.querySelector("#age");
var gender = document.querySelector("#gender");
var saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.localStorage.setItem("firstName", firstName.value);
    window.localStorage.setItem("lastName", lastName.value);
    window.localStorage.setItem("username", username.value);
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("age", age.value);
    window.localStorage.setItem("gender", gender.value);
    console.log(firstName.value, lastName.value, username.value, email.value, age.valueAsNumber, gender.value);
});
var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
    }
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(userData, gender) {
        return _super.call(this, gender) || this;
    }
    return User;
}(Person));
var user = new User({ firstName: "Kufre", lastName: "Udoh", age: 16, username: "gentlekboy", password: "myPassword" }, "Male");
