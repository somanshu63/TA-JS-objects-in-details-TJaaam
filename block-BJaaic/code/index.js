let animalMethods = {
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
function createAnimal (location, numberOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}
let animal = createAnimal("chilla", 4);
console.group("animal");
console.log(animal.location);
console.log(animal.numberOfLegs);
console.log(animal.eat());
console.log(animal.changeLocation("dharamshala"));
console.log(animal.summary());
console.groupEnd("animal");


let dogMethods = {
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
Object.setPrototypeOf(dogMethods, animalMethods);
function createDog (name, color) {
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}
let dog = createDog("choco", "white");
console.group("dog");
console.log(dog.name);
console.log(dog.color);
console.log(dog.bark());
console.log(dog.changeName("shifu"));
console.log(dog.changeColor("black"));
console.log(dog.summary());
console.groupEnd("dog");


let catMethods = {
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
Object.setPrototypeOf(catMethods, animalMethods);
function createcat (name, colorOfEyes) {
    let cat = Object.create(catMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}
let cat = createcat("danny", "whitebrown");
console.group("cat");
console.log(cat.name);
console.log(cat.colorOfEyes);
console.log(cat.meow());
console.log(cat.changeName("billi"));
console.log(cat.changeColorOfEyes("black"));
console.log(cat.summary());
console.groupEnd("cat");
