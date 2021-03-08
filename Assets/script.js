//global

let password = ""; //leaving it blank just saying it has no set value at global scope//
let userLength = ""; //this variable to be result of function expression A//
let passwordIncludes = ""; //this variable will be the result of function expression B//



// Assignment Code Ending
let generateBtn = document.querySelector("#generate");

// FUNCTION DECLARATION - Write password to the #password input
function writePassword() {  
  let password = passwordGeneration(); //value determined by FUNCTION EXPRESSION "MAIN"//
  let passwordText = document.querySelector("#password"); //placement for password in html. Could use innerHTML maybe?//

  passwordText.value = password; //the .value is an Input Text Value Property and that variable's value will be determined by password//
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//FUNCTION EXPRESSION "MAIN" - criteria to create password are results from other function expressions//
let passwordGeneration = function() {  //anonymous function expression like "var myFunction = function() {" defined at parse-time for a script block" https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
  password = "";

  let lengthPassword = passLength(); //SUB-FUNCTION EXPRESSION A - password length prompt//

  let passwordIncludes = characterSelection(); //SUB-FUNCTION EXPRESSION B - creating all the characters to be used.//
  let passwordIncludesLength = passwordIncludes.length;
  //creating randomly generated password from the results of the two functions.//
  for (let i = 0; i < lengthPassword; i++) {  //So LengthPassword is the user's entered password length (userLength)//
    password += passwordIncludes.charAt(Math.floor(Math.random() * passwordIncludesLength));
  } //password adding in results of characterSelection in form of passwordIncludes. Math random 

  return password;
};


//SUB-FUNCTION EXPRESSION A - inside of Function Expression "Main"//
let passLength = function() {  //executes the password length prompt//
  
  //variable for what the user enters into the prompt box//
  let userLength = prompt("Enter a password length between 8 and 128 characters long."); //"Window Prompt Method"//
  
    //user enters desired length. Creating this Conditional Statement with "Window Alert Method" if user doesn't enter valid password length//

    if (userLength >= 8 && userLength <= 128) {
      return userLength;
    } else {
      alert("Enter a password length between 8 and 128 characters long.")
      if (userLength < 8 || userLength > 128 || userlength !== true)
      return passLength();
    }
//userLength will be the value of passlength// 
}


//SUB-FUNCTION EXPRESSION B//
let characterSelection = function() { //function expression B - determines the random characters for the password after length function is complete.//

  //local string variables for lowercase, uppercase, numeric and special characters//
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numeric = "0123456789";
  let special = "~!@#$%^&*()_+`-={}|[]\:;'<>?,./";

  //User must determine if they want these characters included in their password so I created variables. Using Windows Confirm Method instead of prompt so user hits OK for yes or Cancel for no//
  let userLower = confirm("Include lowercase characters?");
  let userUpper = confirm("Include uppercase characters?");
  let userNumeric = confirm("Include numbers?");
  let userSpecial = confirm("Include special characters?");

  //Needs these Booleans based on the user's choice in the Confirm box//
  if (userLower === true) { //if user says yes//
    passwordIncludes += lowercase; // += is the addition assignment, saying that PasswordIncludes will add lowercase string when determining selections for password//
  }
  if (userUpper === true) {
    passwordIncludes += uppercase;
  }
  if (userNumeric === true) {
    passwordIncludes += numeric;
  }
  if (userSpecial === true) {
    passwordIncludes += special;
  }

  return passwordIncludes;
//PasswordIncludes will be the value of characterSelection//
}