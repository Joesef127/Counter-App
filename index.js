let increase = document.getElementById("count");
let decrease = document.getElementById("count");
let resetButton = document.getElementById("count");
let saveButton = document.getElementById("count");
let saveEl = document.getElementById("saveEl");

let count = 0;

function increment() {
  count += 1;
  increase.textContent = count;
  console.log(count);
}

function decrement() {
  if (count > 0) {
    count -= 1;
    decrease.textContent = count;
  }
  console.log(count);
}

function reset() {
  count = 0;
  resetButton.textContent = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  resetButton.textContent = count;
  console.log(count);
}
