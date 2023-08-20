function getIntervalDate(day) {
  let now = new Date();
  let dayMilliseconds = 60 * 60 * 24 * 1000;

  return new Date(now.getTime() + dayMilliseconds * day);
}

console.log(getIntervalDate(-9));

//Set() : 배열처럼 데이터 타입 상관없는 값들의 집합. 유일한 값을 보장.
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet);
mySet.size;
mySet.has(1);
