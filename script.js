const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const accountNumberText = document.getElementById("account-number");
const button = document.getElementById("btn");
const saveButton = document.getElementById("save-btn");
const sortCodeText = document.getElementById("sort-code");
const wrapper = document.querySelector("#wrapper");
const deleteBtn = document.getElementById("delete-button");
const container = document.querySelector("#container");

let accountNumber;

function generateAccountNumber() {
  accountNumber = "";
  for (let i = 0; i < 8; i++) {
    const selectedNumber = numbers[getRandomNumber()];
    accountNumber += selectedNumber;
  }

  if (accountNumber === undefined && sortCode === undefined) {
    return alert("Please generate bank details");
  } else {
    accountNumberText.textContent = accountNumber;
  }
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

let copyBtn;

function saveAccountNumber() {
  accountNumber = accountNumber;
  let container = document.createElement("div");
  let z = document.createElement("p");
  z.textContent = `Account number: ${accountNumber}`;
  container.id = "container";
  sortCode = sortCode;
  let x = document.createElement("p");
  x.textContent = `Sort code: ${sortCode[0]}${sortCode[1]}-${sortCode[2]}${sortCode[3]}-${sortCode[4]}${sortCode[5]}`;
  container.appendChild(z);
  container.appendChild(x);
  wrapper.appendChild(container);
  container.setAttribute("onclick", "copyBtn.remove()");
  container.setAttribute("onclick", "this.remove()");
  x.setAttribute("id", "text2");
  copyBtn = document.createElement("button");
  copyBtn.textContent = "Copy to clipboard";
  copyBtn.id = "copy-btn";
  container.appendChild(copyBtn);
  copyBtn.setAttribute("onclick", "copy()");
}

let text = document.querySelectorAll("#container, #text2").textContent;
const copy = async () => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Content copied to clipboard");
  } catch (err) {
    alert("Failed to copy: ", err);
  }
};

saveButton.addEventListener("click", function () {
  saveAccountNumber();
});
