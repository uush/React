const person = {
  firstName: "John",
  lastname: "Doe",
  age: 50,
  eyeColor: "blue",
};

person["age"] = 51;
person.age = 43;

console.log(person["firstNmae"]);
console.log(person.firstName);

const cars = ["Saab", "Volov", "BMW"];
console.log(cars[0]);
console.log(cars[1]);

cars[0] = "Hyundai";
cars[1] = "Kia";
console.log(cars[0]);
console.log(cars[1]);

console.log(typeof "John");
console.log(typeof 3.15);
console.log(typeof true);
console.log(typeof { x: 1, y: 1 });
console.log(typeof [1, 2, 3]);
console.log(typeof undefined);
console.log(typeof null);

let o1 = true && true;
let o2 = true && false;
let o3 = true || true;
let o4 = true || false;

console.log(o1, o2, o3, o4);

let p1 = !true;
let p2 = !false;
let p3 = !(3 == 3);
let p4 = !(3 == 4);

console.log(p1, p2, p3, p4);

console.log("¹Ù´Ò¶ó" + " " + "JS");
let myString = "¹Ù´Ò¶ó";
myString += "JS";
