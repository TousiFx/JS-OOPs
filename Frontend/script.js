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
function person(name, age) {
  this.name = name;
  this.age = age;
}
