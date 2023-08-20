let productList = [
  {
    name: "솔의눈",
    price: 700,
  },
  {
    name: "커피",
    price: 700,
  },
  {
    name: "파워에이드",
    price: 1200,
  },
  {
    name: "오렌지",
    price: 1000,
  },
  {
    name: "보리차",
    price: 1200,
  },
];

let inputCoin = 800;
let outProduct = [];

for (let i = 0; i < productList.length; i++) {
  if (productList[i].price <= inputCoin) {
    outProduct.push(productList[i]);
  }
}

for (let j = 0; j < outProduct.length; j++) {
  console.log(outProduct[j]);
}

let person = { fname: "John", lname: "Doe", age: 25 };
for (const key in person) {
  console.log(person[key]);
}

let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for (const brand in brands) {
  console.log(brand); // 인덱스 번호를 출력
}

// for-of 문은 Array, Map, String 등 반복 가능한 객체에서 사용 가능
// for(const element of iterable)
for (const brand of brands) {
  console.log(brand); // 각 배열의 요소 출력
}

let inputPrice = 7000;
let coinUnit = 500; //반환할 500원 동전
let coinCount = 0; //반환될 500원 총 개수를 담을 변수

while (inputPrice > 0) {
  inputPrice = inputPrice - coinUnit;
  coinCount++;
}
console.log(coinCount);
