//Define User class
var User = /** @class */ (function () {
    // constructor 
    function User(username, password, contact, email, address) {
        this._username = username;
        this._password = password;
        this._contact = contact;
        this._email = email;
        this._address = address;
    }
    Object.defineProperty(User.prototype, "username", {
        // getter and setter methods
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "contact", {
        get: function () {
            return this._contact;
        },
        set: function (value) {
            this._contact = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
//Fetch form values using Object.fromentries()
function submitForm(event) {
    var formData = new FormData(event.target);
    var values = Object.fromEntries(formData);
    var allData = new User(values.username, values.password, parseInt(values.contact), values.email, values.address);
    registerUser(allData);
    event.preventDefault();
}
// const submitUser = (formData: any) => {
//     //call registerUser method with the constructed User object
// }
//POST data using fetch() api
function registerUser(allData) {
    // console.log(allData);
    var request = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(allData)
    };
    fetch("http://localhost:3000/users/", request)
        .then(function (response) {
        alert(JSON.stringify(response));
        window.alert("Thank you ".concat(allData.username, " you will get notification on ").concat(allData.email));
    }, function (reject) {
        window.alert(reject);
        window.alert("Sorry ".concat(allData.address, " some problem happened."));
    });
    //Dispay welcome message after successful registration
}
