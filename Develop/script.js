// Assignment Code
let generateBtn = document.querySelector("#generate"); //THIS IS THE BUTTON
// console.log(generateBtn.parentElement); - showed the parent element for the id generate
let uppercaseRun = document.querySelector("#uppercase");
let lowercaseRun = document.querySelector("#lowercase");
let numberRun = document.querySelector("#number");
let specialRun = document.querySelector("#special");

let length = "";
let numbers = "0123456789";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = "abcdefghijklmnopqrstuvwxyz"; //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let special = "!@#$%^&*()_+{}<>?-=/"; //["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", "<", "=", ">", "?", "@", "[", "]", "{", "}"];



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  let length = (+length.value);


function generatePassword(length, numbers, lowercase, uppercase, special) {
  let length = prompt("Must be at least 8 but no more than 128.");
    if (length < 8) {
      console.log(false);
    }

let randomFunction = {
  number: getNumbers,
  uppercase: getUppercase,
  lowercase: getLowercase,
  specialChar: getSpecialCharacters,
};

// Generator functions**
  function getNumbers {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },

  function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },

  function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },

  function getSpecialCharacters() {
    let specialCharacters = "!@#$%^&*()_+-={}[]<>/?";
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }



// Checks to make sure user selected ok for all and uses empty minimums from above

// if (length === )

if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;

}

if (lowercase === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;

}

if (uppercase === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;

}

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;

}

// empty string variable for the for loop below
var randomPasswordGenerated = "";

// loop getting random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}

// to make sure characters are added to the password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;


return randomPasswordGenerated;

}

