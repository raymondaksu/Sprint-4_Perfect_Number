const toCheck = document.querySelector("#button_check");
const input = document.querySelector("#number");
const result = document.querySelector("#show_result");

var divisors = new Array();

function check_number(x) {
  const myNumber = input.value;

  for (let i = 0; i < x; i++) {
    if (x % i == 0) {
      divisors.push(i);
    }
  }

  var sum = divisors.reduce(function (a, b) {
    return a + b;
  }, 0);

  console.log(sum);

  if (sum == myNumber) {
    result.innerHTML = `${myNumber} is a perfect number.`;
  } else {
    result.innerHTML = `${myNumber} is NOT a perfect number.`;
  }
}

toCheck.addEventListener("click", () => {
  const myNumber = input.value;
  check_number(myNumber);
  divisors = [];
  input.value = "";
});
