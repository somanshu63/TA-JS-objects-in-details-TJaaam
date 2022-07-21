function CreateAnimal (location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}
CreateAnimal.prototype = {
    eat: function () {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary: function () {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}

let animal = new CreateAnimal("chilla", 4);
console.group("animal");
console.log(animal.location);
console.log(animal.numberOfLegs);
console.log(animal.eat());
console.log(animal.changeLocation("dharamshala"));
console.log(animal.summary());
console.groupEnd("animal");



function CreateDog (location, numberOfLegs, name, color) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;
}
CreateDog.prototype = {
    bark: function () {
        alert(`I am ${this.name} and I can bark`);
    },
    changeName: function (newName) {
        this.name = newName;
        return this.name;
    },
    changeColor: function (newColor) {
        this.color = newColor;
        return this.color;
    },
    summary: function () {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}
Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
let dog = new CreateDog("india", 4, "choco", "white");
console.group("dog");
console.log(dog.name);
console.log(dog.color);
console.log(dog.bark());
console.log(dog.changeName("shifu"));
console.log(dog.changeColor("black"));
console.log(dog.summary());
console.groupEnd("dog");



function CreateCat (location, numberOfLegs, name, colorOfEyes) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}
CreateCat.prototype = {
    meow: function () {
        alert(`I am ${this.name} and I can do mewo1 meow`);
    },
    changeName: function (newName) {
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function (newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary: function () {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);
let cat = new CreateCat("india", 4, "danny", "whitebrown");
console.group("cat");
console.log(cat.name);
console.log(cat.colorOfEyes);
console.log(cat.meow());
console.log(cat.changeName("billi"));
console.log(cat.changeColorOfEyes("black"));
console.log(cat.summary());
console.groupEnd("cat");



class Animal {
    constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
    }
    eat () {
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation (newLocation) {
        this.location = newLocation;
        return this.location;
    }
    summary () {
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
    }
}

let animal = new Animal("chilla", 4);
console.group("animal");
console.log(animal.location);
console.log(animal.numberOfLegs);
console.log(animal.eat());
console.log(animal.changeLocation("dharamshala"));
console.log(animal.summary());
console.groupEnd("animal");



class Dog extends Animal{
    constructor(location, numberOfLegs, name, color) {
    super (location, numberOfLegs);
    this.name = name;
    this.color = color;
    }
    bark () {
        alert(`I am ${this.name} and I can bark`);
    }
    changeName (newName) {
        this.name = newName;
        return this.name;
    }
    changeColor (newColor) {
        this.color = newColor;
        return this.color;
    }
    summary () {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}
let dog = new Dog("india", 4, "choco", "white");
console.group("dog");
console.log(dog.name);
console.log(dog.color);
console.log(dog.bark());
console.log(dog.changeName("shifu"));
console.log(dog.changeColor("black"));
console.log(dog.summary());
console.groupEnd("dog");



class Cat extends Animal{
    constructor(location, numberOfLegs, name, colorOfEyes) {
    super (location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
    }
    meow () {
        alert(`I am ${this.name} and I can do mewo1 meow`);
    }
    changeName (newName) {
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes (newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }
    summary () {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}
let cat = new Cat("india", 4, "danny", "whitebrown");
console.group("cat");
console.log(cat.name);
console.log(cat.colorOfEyes);
console.log(cat.meow());
console.log(cat.changeName("billi"));
console.log(cat.changeColorOfEyes("black"));
console.log(cat.summary());
console.groupEnd("cat");
