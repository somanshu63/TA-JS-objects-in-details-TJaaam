function createUser(name, id, noOfProjects) {
    let user = {};
    user.name = name;  
    user.id = id;    
    user.noOfProjects = noOfProjects; 
    user.getProjects = function () {
        return user.noOfProjects;
    };
    user.changeName = function (newName) {
        return user.name = newName;
    };
    user.incrementProject = function (){
        return (user.noOfProjects += 1);
    };
    user.decrementProject = function (){
        return (user.noOfProjects -= 1);
    };
    return user; 
}
let firstUser = createUser(
    'sam',
    25458,
    1
  );
let secondUser = createUser(
    'john',
    24586,
    12
  );


function createUser(name, id, noOfProjects) {
    let user = Object.create(createMethods);
    user.name = name;  
    user.id = id;    
    user.noOfProjects = noOfProjects; 
    return user; 
}
let createMethods =  {
    getProjects: function () {
        return this.noOfProjects;
    },
    changeName: function (newName) {
        return this.name = newName;
    },
    incrementProject: function (){
        return (this.noOfProjects += 1);
    },
    decrementProject: function (){
        return (this.noOfProjects -= 1);
    }
}
let firstUser = createUser(
    'sam',
    25458,
    1
  );
let secondUser = createUser(
    'john',
    24586,
    12
  );


function User(name, id, noOfProjects) {
    this.name = name;  
    this.id = id;    
    this.noOfProjects = noOfProjects; 
}
User.prototype = {
    getProjects: function () {
        return this.noOfProjects;
    },
    changeName: function (newName) {
        return this.name = newName;
    },
    incrementProject: function (){
        return (this.noOfProjects += 1);
    },
    decrementProject: function (){
        return (this.noOfProjects -= 1);
    }
}
let firstUser = new User(
    'sam',
    25458,
    1
  );
let secondUser = new User(
    'john',
    24586,
    12
  );


class User {
    constructor(name, id, noOfProjects){
        this.name = name;  
        this.id = id;    
        this.noOfProjects = noOfProjects; 
    }
    getProjects () {
        return this.noOfProjects;
    }
    changeName (newName) {
        return this.name = newName;
    }
    incrementProject (){
        return (this.noOfProjects += 1);
    }
    decrementProject (){
        return (this.noOfProjects -= 1);
    }
}

let firstUser = new User(
    'sam',
    25458,
    1
  );
  let secondUser = new User(
    'john',
    24586,
    12
  );