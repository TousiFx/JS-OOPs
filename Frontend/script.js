// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// arr1.sayHello = () => {
//   console.log("hello!, i am arr");
// };
// arr2.sayHello = () => {
//   console.log("hello!, i am arr");
// };

// function personMake(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hello my name ${name}`);
//     },
//   };

//   return person;
// }
// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// person.prototype.talk = () => {
//   console.log(`Hello! , my name is ${this.name}`);
// };

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hello! , my name is ${this.name}`);
//   }
// }
// let p1 = new person("adam", 25);
// let p2 = new person("adam", 25);

class person {
  constructor(name, age) {
    console.log("this person class");
    this.name = name;
    this.age = age;
  }
}

class Student extends person {
  constructor(name, age, mark) {
    console.log("this student class");
    super(name, age);
    this.mark = mark;
  }
  talk() {
    console.log(`Hello!,My name is ${this.name}`);
  }
}

class Teacher extends person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  talk() {
    console.log(`Hello!,My name is ${this.name}`);
  }
}
