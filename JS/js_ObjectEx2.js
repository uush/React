// �� ��ü ����
let person = new Object();

// ��� ����
person.firstName = "John";
person.lastname = "Doe";
person.age = 1200;
person.getFullNmae = function () {
  return this.firstName + " " + this.lastname;
};

console.log(person.getFullNmae());

//String ��ü
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

//Array ��ü
//toString()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); //Banana,Orange,Apple,Mango
//join()
fruits.join(" * "); //Banana * Orange * Apple * Mango

let userList = [
  {
    name: "ȫ�浿",
    email: "hong@mail",
  },
  {
    name: "�谡��",
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
fruits.unshift("Lemmon"); //["Lemon", "Banana", "Orange", "Apple", "Mango"]�� ����. �迭�� ���� 5 ��ȯ

let cities = [
  { code: "02", title: "����" },
  { code: "21", title: "�λ�" },
  { code: "064", title: "����" },
];

cities.unshift({ code: "", title: "������ �����ϼ���" });

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
fruits.sort(); //�������� ����

let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

let persons = [
  {
    name: "���缮",
    point: 78,
    city: "����",
  },
  {
    name: "������",
    point: 92,
    city: "����",
  },
  {
    name: "�缼��",
    point: 76,
    city: "����",
  },
  {
    name: "����",
    point: 81,
    city: "����",
  },
];

person.sort(function (a, b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});

//filter()
let words = ["spray", "limit", "elite", "exuberant", "destruction", "persent"];
let result = words.filter(function (word) {
  return words.length > 6;
}); // �ܾ��� ���̰� 6�ڸ����� ū �ܾ �����ؼ� ���ο� �迭�� ��ȯ

let pass = person.filter(function (person) {
  return person.point > 80;
});

//map()

let personList = [
  {
    firstName: "�缮",
    lastName: "��",
    email: "yu@gmail.com",
  },
  {
    firstName: "����",
    lastName: "��",
    email: "kim@gmail.com",
  },
  {
    firstName: "����",
    lastName: "��",
    email: "yang@gmail.com",
  },
  {
    firstName: "����",
    lastName: "��",
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
