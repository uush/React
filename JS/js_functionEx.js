/**
 *
 * @param {*} n1
 * @param {*} n2
 * @returns
 */
function add(n1, n2) {
  return n1 + n2;
}
/**
 *
 * @param {*} n1
 * @param {*} n2
 * @returns
 */
function minus(n1, n2) {
  return n1 - n2;
}

function multiple(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}
/**
 *
 * @param {*} n1
 * @param {*} n2
 * @param {*} operator
 * @returns
 */
function calculator(n1, n2, operator) {
  switch (operator) {
    case "+":
      add(n1, n2);
      break;

    case "-":
      minus(n1, n2);
      break;

    case "*":
      multiple(n1, n2);
      break;

    case "/":
      return divide(n1, n2);
    default:
      console.log("error");
  }
}

console.log(calculator(33, 3, "/"));
