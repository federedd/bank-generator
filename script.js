const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const accountNumberText = document.getElementById("account-number");
const button = document.getElementById("btn");
const sortCodeText = document.getElementById("sort-code");

function generateAccountNumber() {
  let accountNumber = "";

  for (let i = 0; i < 8; i++) {
    const selectedNumber = numbers[getRandomNumber()];
    accountNumber += selectedNumber;
  }

  accountNumberText.textContent = accountNumber;
}

function getRandomNumber() {
  return Math.floor(Math.random() * numbers.length);
}

function generateSortCode() {
  let sortCode = "";
  for (let i = 0; i < 6; i++) {
    sortCode += numbers[getRandomNumber()];
  }
  sortCodeText.textContent = `${sortCode[0]}${sortCode[1]}-${sortCode[2]}${sortCode[3]}-${sortCode[4]}${sortCode[5]}`;
}

button.addEventListener("click", function () {
  generateAccountNumber();
  generateSortCode();
});
