## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John
console.log(user2.sayHello()); // Hello Arya
console.log(user.sayHello.call(user2)); // Hello Arya
console.log(user.sayHello.call(user2, 'Hey')); // Hey Arya user2 is merged with user by explicit binding
console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya user2 is merged with user by explicit binding
console.log(typeof user.sayHello.bind(user2)); // function because you have to call the function again after binding as bind only bind the object but doesnt call provides the function reference
console.log(user.sayHello.bind(user2)()); // Hello Arya as after bind it is also called so it provides up the output
console.log(userSayHello()); // Hello undefined
console.log(typeof userSayHello.bind(user2)); // function because you have to call the function again after binding as bind only bind the object but doesnt call provides the function reference
console.log(userSayHello.bind(user2)()); //  Hello Arya as after bind it is also called so it provides up the output
console.log(user3.sayHello()); // type error
console.log(userSayHello.apply(user3)); // Hello Bran we passed the user3 data in usersayHello
console.log(userSayHello.call(user3)); // Hello Bran we passed the user3 data in usersayHello
console.log(typeof new MainUser()); // object as new keyword provides with the output of object type
console.log(typeof new MainUser()); // object as new keyword provides with the output of object type
console.log(new MainUser().sayHello()); // Hello Tyrion 
console.log(new MainUser().sayHello.call(user2)); // Hello Arya as user 2 is passed in it
console.log(new MainUser().sayHello.call(user)); // Hello John as user is passed in it
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // Welcome! John because user is passed and welcome is passed in it
```
