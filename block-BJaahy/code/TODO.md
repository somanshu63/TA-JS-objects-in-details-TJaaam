# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
}
```

- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description () {
        alert `the square is ${width} x ${height}`;
    }
}
```

- Create another method named `calcArea` that will return the area of the square.
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description () {
        alert `the square is ${this.width} x ${this.height}`;
    }
    calcAres () {
        return (this.width * this.height);
    } 
}
```

- Create a getter method named `area` that will return area of the square.
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description () {
        alert `the square is ${this.width} x ${this.height}`;
    }
    calcAres () {
        return (this.width * this.height);
    }
    get area() {
        return (this.width * this.height);
    }
}
```

- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description () {
        alert `the square is ${this.width} x ${this.height}`;
    }
    calcAres () {
        return (this.width * this.height);
    }
    get area() {
        return (this.width * this.height);
    }
    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}
```

- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)
```js
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description () {
        alert `the square is ${this.width} x ${this.height}`;
    }
    calcAres () {
        return (this.width * this.height);
    }
    get area() {
        return (this.width * this.height);
    }
    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
    static isEqual(s1, s2) {
        return s1.area == s2.area;
   }
}
```


- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
```js
let s1 = new Square(15);
let s2 = new Square(6);
```

- Check the `area` getter method on both square.
```js
s1.area();
s2.area();
```

- Check the `isEqual` method and pass the two instance you created above.
```js
Square.isEqual(s1, s2);
```

## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
```js
class User{
    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName;
    }
}
```

- Create a getter method named `fullName` that will return the full name of the person.
```js
class User{
    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName;
    }
    get fullName() {
        return `${firstName} ${lastName}`;
    }
}
```

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
```js
class User{
    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
        if(fullName.length < 5){
            return `Full name should be more than 5 characters`;
        }
        else {
            let fullName = fullName.split(" ");
            this.firstName = fullName[0];
            this.lastName = fullName[1]; 
        }
    }
}
```

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
```js
class User{
    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
        if(fullName.length < 5){
            return `Full name should be more than 5 characters`;
        }
        else {
            let newFullName = fullName.split(" ");
            this.firstName = newFullName[0];
            this.lastName = newFullName[1]; 
        }
    }
    nameContains (str) {
        if(this.firstName.includes(str) && this.lastName.includes(str)){
            return true;
        }
        else{
            return false;
        }
    }
}
```

- Create two instance of the `User` class
```js
let user1 = new User("john", "taiva");
let user2 = new User("kiara", "advan");

```

- Check by using the `fullName` setter method with name bigger than 5 characters.
```js
user1.fullName = "john kiara";
```

- Check by using the `fullName` setter method with name less than 5 characters.
```js
user2.fullName = "joh";
```

- Check the `fullName` using getter
```js
user2.fullName();
```

- Check the `nameContains` method
```js
user2.nameContains("ia");
```