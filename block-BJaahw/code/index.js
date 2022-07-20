//1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name, age) {
    let User = {};
    User.name = name;
    User.age = age;
    return User;
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name, age) {
    let User = {};
    User.name = name;
    User.age = age;
    User.sayHello = function () {
        alert(`welcome ${User.name}`);
    }
    return User;
}

//3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let personOne = createUser("John", 20);
let personTwo = createUser("sami", 18);

//4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
let createUserMethod = {
    sayHello: function () {
        alert(`welcome ${User.name}`);
    }
}
function createUser(name, age) {
    let User = Object.create(createUserMethods);
    User.name = name;
    User.age = age;
    User.sayHello = function () {
        alert(`welcome ${User.name}`);
    }
    return User;
}

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function CreateUser(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        alert(`welcome ${this.name}`);
    }
}
CreateUser.prototype = {
    sayHello: function () {
        alert(`welcome ${thisr.name}`);
    }
}
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
let personOne = new CreateUser("torin", 25);
let personTwo = new CreateUser("peter", 65);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello();

// 8. Convert the `createUser` function into `User` class.
class User{ 
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    sayHello () {
        alert(`welcome ${this.name}`);
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let personOne = new User("torin", 55);
let personTwo = new User("peter", 35);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello();
