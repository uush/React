let elements = document.getElementsByName("chk_interest");
let checked_item = [];
for (let i = 0; i < elements.length; i++) {
  if (elements[i].checked) {
    checked_items.push(elements[i]);
  }
}
let elements2 = document.querySelectorAll("[name=chk_interest]:checked");

let oText1 = document.getElementsById("text1");
let textValue = oText1.value;
console.log(textValue);
console.log(document.getElementsById("text1").getAttribute("value"));
