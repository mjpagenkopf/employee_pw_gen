//global

let password = ""; //leaving it blank just saying it has no set value at global scope//

//FUNCTION EXPRESSION "MAIN" - ALL THE CRITERIA NEEDED TO RETURN A PASSWORD//
let passGen = function() {  //anonymous function expression like "var myFunction = function() {" defined at parse-time for a script block" https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
  password = "";

  let lengthPassword = passLength(); //SUB-FUNCTION EXPRESSION A - password length prompt//

  let passwordInclusions = charaInclusions(); //SUB-FUNCTION EXPRESSION B - creating all the characters to be used.//
  let passwordInclusionsLength = passwordInclusions.length;

  for (let i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength));
  }

  return password;

};
//SUB-FUNCTION EXPRESSION A//
let passLength = function() {  //function expression B - that executes the password length prompt//
  //new variable "userlength" - variable for what the user enters into the prompt box//
  let userLength = prompt("Enter a password length between 8 and 128 characters long."); //this is the "Window Prompt Method"//
  
    //user enters desired length. Creating this Conditional Statement with "Window Alert Method" if user doesn't enter valid password length//
    if (userLength < 8 || userLength > 128 || userlength === "") {
    alert("Enter a password length between 8 and 128 characters long.") //"Window Alert Method"
    return passLength; //Returns to beginning of FUNCTION EXPRESSION B
    }

    //if user enters number as a string and not a number? 
    let userLength = Math.floor(Number(userLength));

  //This will 
  return userLength;
}

//SUB-FUNCTION EXPRESSION B//
let charaInclusions = function() {

}


