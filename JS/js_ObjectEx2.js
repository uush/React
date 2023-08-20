// 빈 객체 생성
let person = new Object();

// 멤버 설정
person.firstName = "John";
person.lastname = "Doe";
person.age = 1200;
person.getFullNmae = function () {
  return this.firstName + " " + this.lastname;
};

console.log(person.getFullNmae());

//String 객체
//lenght
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;
console.log(sln);
//indexOf()
let str = "Please locate where 'locate' occurs!";
let pos1 = str.indexOf("locate");
let pos2 = str.indexOf("locate", 15);
console.log(pos1, pos2);
//slice()
let str2 = "Apple, Banana, Kiwi";
let res1 = str2.slice(7, 13);
let res2 = str2.slice(7);
let res3 = str2.slice(-12);
console.log(res1, res2, res3);

//Array 객체
//toString()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); //Banana,Orange,Apple,Mango
//join()
fruits.join(" * "); //Banana * Orange * Apple * Mango

let userList = [
  {
    name: "홍길동",
    email: "hong@mail",
  },
  {
    name: "김가나",
    email: "Gana@mail",
  },
];
let userHtml = [];
for (const user of userList) {
  userHtml.push("<tr>");
  userHtml.push("<td>" + user.name + "</td>");
  userHtml.push("<td>" + user.email + "</td>");
  userHtml.push("</tr>");
}

document.getElementById("userTableTbody").innerHTML = userHtml.join("");

//shift
fruits.shift(); // "Banana"
//unshift()
fruits.unshift("Lemmon"); //["Lemon", "Banana", "Orange", "Apple", "Mango"]로 저장. 배열의 길이 5 반환

let cities = [
  { code: "02", title: "서울" },
  { code: "21", title: "부산" },
  { code: "064", title: "제주" },
];

cities.unshift({ code: "", title: "지역을 선택하세요" });

let options = [];
for (const city of cities) {
  options.push('<option value="' + city.code + '">' + city.title + "</option>");
}

//splice()
fruits.splice(2, 0, "Lemon", "Kiwi"); // [Banana, Orange, Lemon, Kiwi, Apple, Mango]
//slice()
let citrus = fruits.slice(3); //[,Kiwi, Apple, Mango]
let citrus2 = fruits.slice(1, 3); //[Orange, Lemon]
//sort()
fruits.sort(); //오름차순 정렬

let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

person.sort(function (a, b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});

//filter()
let words = ["spray", "limit", "elite", "exuberant", "destruction", "persent"];
let result = words.filter(function (word) {
  return words.length > 6;
}); // 단어의 길이가 6자리보다 큰 단어만 추출해서 새로운 배열에 반환

let pass = person.filter(function (person) {
  return person.point > 80;
});

//map()

let personList = [
  {
    firstName: "재석",
    lastName: "유",
    email: "yu@gmail.com",
  },
  {
    firstName: "종국",
    lastName: "김",
    email: "kim@gmail.com",
  },
  {
    firstName: "세찬",
    lastName: "양",
    email: "yang@gmail.com",
  },
  {
    firstName: "석진",
    lastName: "지",
    email: "ji@gmail.com",
  },
];

let personList2 = personList.map(function (user) {
  return {
    fullName: user.lastName + user.firstName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
});

//reduce()
let poitns = [40, 100, 1, 5, 25, 10];
let sum = points.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);
console.log(sum);
