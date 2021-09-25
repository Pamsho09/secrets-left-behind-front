var myObjectClass = /** @class */ (function () {
    function myObjectClass(name, lastName, email, userName, isStream) {
        this.name = name;
        this.lastName = lastName;
        this.email = lastName;
        this.userName = userName;
        this.isStream = isStream;
    }
    return myObjectClass;
}());
var myObject = new myObjectClass("pamsho", "dev", "me@pamsho.dev", "pansho", true);
console.log(myObject);
function getInfo(data) {
    if (data.userName) {
        return {
            name: "",
            userName: ""
        };
    }
    else {
        return {
            name: data.name,
            userName: data.name + data.email
        };
    }
}
getInfo({ name: "aldavid", email: ["asdad", "adsdas"], lastName: "01" });
