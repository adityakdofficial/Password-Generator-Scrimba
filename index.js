const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "?",
];

// Combined
const allChars = [...lowercase, ...uppercase, ...numbers, ...symbols];

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");

let allCharsLength = allChars.length;

function generatePasswords() {
  pass1.textContent = "";
  pass2.textContent = "";

  for (let i = 0; i < 18; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    pass1.textContent += allChars[randomIndex];
  }

  for (let i = 0; i < 18; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    pass2.textContent += allChars[randomIndex];
  }
}

function copy1() {
  let passCopy1 = document.getElementById("pass1").textContent;
  navigator.clipboard
    .writeText(passCopy1)
    .then(() => {
      console.log("Copied");
    })
    .catch((err) => {
      console.log("failed");
    });
}

function copy2() {
  let passCopy2 = document.getElementById("pass2").textContent;
  navigator.clipboard
    .writeText(passCopy2)
    .then(() => {
      console.log("Copied");
    })
    .catch((err) => {
      console.log("failed");
    });
}
