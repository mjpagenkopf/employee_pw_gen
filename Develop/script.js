// Assignment Code
let generateBtn = document.querySelector("#generate"); //THIS IS THE BUTTON
// console.log(generateBtn.parentElement); - showed the parent element for the id generate
let results = document.querySelector("card-header")
let upperRun = document.querySelector("#uppercase");
let lowerRun = document.querySelector("#lowercase");
let numberRun = document.querySelector("#number");
let specialRun = document.querySelector("#special");
let lengthRun = document.querySelector("#length");

// let number = "0123456789";
// let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let lowercase = "abcdefghijklmnopqrstuvwxyz"; //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let special = "!@#$%^&*()_+{}<>?-=/"; //["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", "<", "=", ">", "?", "@", "[", "]", "{", "}"];

let randomFunction = {
  upper: getUpper,
  lower: getLower,
  number: getNumber,
  special: getSpecialCharacter,
}

// card-headers.addEventListener("click",() => {
//   let textarea = document.querySelector("textarea");
//   let password = results.innerText;

//   if (!password) {return;}

//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand("copy");
//   textarea.remove();
//   alert("Password copied to clipboard");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
  let length = +lengthRun.value;
  let checkNumber = numberRun.checked;
  let checkUpper = upperRun.checked;
  let checkLower = lowerRun.checked;
  let checkSpecial = specialRun.checked;

  results.innerText = generatePassword (
    length, checkNumber, checkUpper, checkLower, checkSpecial);
});


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


  function generatePassword(length, uppercase, lowercase, number, special) {

    let randomPasswordGenerated = "";

    let count = uppercase + lowercase + number + special;

    let countArray = [{uppercase}, {lowercase}, {number}, {special}].filter (item => Object.values(item)[0]);

    if (count === 0) {
      return "";
    }

    for (let i = 0; i < length; i += count) {
      countArray.forEach(type => {
          let functionName = Object.keys(type)[0];

          generatePassword += randomFunction[functionName]();
      })
    
  }


// Generator functions**
  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }

  function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }

  function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  }

  function getSpecialCharacter() {
    let specialCharacter = "!@#$%^&*()_+-={}[]<>/?";
    return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
  }



// Checks to make sure user selected ok for all and uses empty minimums from above

// if (length === )

if (number === true) {
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
};


// // loop getting random characters
// for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
//   var randomNumberPicked = Math.floor(Math.random() * 4);

//   randomPasswordGenerated += randomNumberPicked;

// }

// to make sure characters are added to the password
// randomPasswordGenerated += minimumNumbers;
// randomPasswordGenerated += minimumLowerCases;
// randomPasswordGenerated += minimumUpperCases;
// randomPasswordGenerated += minimumSpecialCharacters;

