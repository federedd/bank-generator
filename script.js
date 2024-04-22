const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const accountNumberText = document.getElementById("account-number");
const button = document.getElementById("btn");
const saveButton = document.getElementById("save-btn");
const sortCodeText = document.getElementById("sort-code");
const wrapper = document.querySelector("#wrapper");
const deleteBtn = document.getElementById("delete-button");
const container = document.getElementById("container");

let accountNumber;

function generateAccountNumber() {
  accountNumber = "";
  for (let i = 0; i < 8; i++) {
    const selectedNumber = numbers[getRandomNumber()];
    accountNumber += selectedNumber;
  }

  accountNumberText.textContent = accountNumber;
}

function getRandomNumber() {
  return Math.floor(Math.random() * numbers.length);
}

let sortCode;
function generateSortCode() {
  sortCode = "";
  for (let i = 0; i < 6; i++) {
    sortCode += numbers[getRandomNumber()];
  }
  sortCodeText.textContent = `${sortCode[0]}${sortCode[1]}-${sortCode[2]}${sortCode[3]}-${sortCode[4]}${sortCode[5]}`;
}

button.addEventListener("click", function () {
  generateAccountNumber();
  generateSortCode();
});

function saveAccountNumber() {
  accountNumber = accountNumber;
  let container = document.createElement("div");
  container.textContent = `Account number: ${accountNumber}`;
  wrapper.appendChild(container);
  container.setAttribute("onclick", "this.remove()");
  container.setAttribute("id", "text");
  container.id = "container";
  sortCode = sortCode;
  let x = document.createElement("p");
  x.textContent = `Sort code: ${sortCode[0]}${sortCode[1]}-${sortCode[2]}${sortCode[3]}-${sortCode[4]}${sortCode[5]}`;
  container.appendChild(x);
  x.setAttribute("onclick", "this.remove()");
  x.setAttribute("id", "text2");
}

let text = document.querySelectorAll("#text, #text2").innerHTML;
const copy = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
  alert("copied");
};

function createElement() {
  let copyBtn = document.createElement("button");
  copyBtn.textContent = "Copy to clipboard";
  copyBtn.id = "copy-btn";
  wrapper.appendChild(copyBtn);
  copyBtn.setAttribute("onclick", "copy()");
}

saveButton.addEventListener("click", function () {
  saveAccountNumber();
  createElement();
});
