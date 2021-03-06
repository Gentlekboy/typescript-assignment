// import { User } from "./classes"
// import { PersonInterface, UserInterface } from "./interfaces"
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
var getfirstName = localStorage.getItem("firstName");
var getlastName = localStorage.getItem("lastName");
var getusername = localStorage.getItem("username");
// const getemail = localStorage.getItem("email")
var getage = localStorage.getItem("age");
var getgender = localStorage.getItem("gender");
var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
        function returnGender() {
            return gender;
        }
    }
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(userData, gender) {
        var _this = _super.call(this, gender) || this;
        _this.firstName = userData.firstName;
        _this.lastName = userData.lastName;
        _this.userName = userData.username;
        _this.age = userData.age;
        _this.gender = gender;
        return _this;
    }
    User.prototype.returnGender = function () {
        return this.gender;
    };
    User.prototype.returnFirstName = function () {
        console.log(this.firstName);
        return this.firstName;
    };
    User.prototype.returnLastName = function () {
        return this.lastName;
    };
    User.prototype.returnUserName = function () {
        return this.userName;
    };
    User.prototype.returnAge = function () {
        return this.age;
    };
    return User;
}(Person));
var userdata = {
    firstName: getfirstName,
    lastName: getlastName,
    age: getage,
    username: getusername
};
var user = new User(userdata, getgender);
var showFirstName = document.querySelector("#showFirstName");
var showlastName = document.querySelector("#showlastName");
// const showEmail = document.querySelector("#showEmail") as HTMLParagraphElement
var showUserName = document.querySelector("#showUserName");
var showAge = document.querySelector("#showAge");
var showGender = document.querySelector("#showGender");
showFirstName.innerText = "First Name: " + user.returnFirstName();
showlastName.innerText = "Last Name: " + user.returnLastName();
showUserName.innerText = "Username: " + user.returnUserName();
// showAge.innerText = user.returnAge()
showGender.innerText = "Gender: " + user.returnGender();
