# Employee Password Generator
---


This assignment required additional coding in JavaScript to create a series of actions that result in a randomly generated password based on user's preferences. 
---

Requirements:
* Include a prompt for user to enter in number of characters preferred for password.

* Allow for user to indicate which type of characters (lowercase, uppercase, numeric, special characters) are preferred to be included in the password.

---

### In order to build this functioning website, I had to:

* determine how to structure the functions necessary to create the prompts and character selections

* Built a function expression that prompts user to decide how many numbers are desired for password generator. If user does not provide answer within requirements, the function exits prompt and user must press button to begin again.

* Built a second function expression to provide user with options for characters. Each group of characters (lowercase, uppercase, numeric, special) required a their own string variable. Each of those variables required a separate variable to prompt the user to choose which characters to be included. The user is prompted with a Confirm box to select yes/no. With each confirmed yes, that string is added onto the output for the function. 

* Once those first two functions have their outputs, those outputs are then plugged into a third function expression that uses a loop to output a randomly generated selection of characters of the correct number. 

* That generated selection is then added to the Function Declaration that indicates where to show the password in the html using the document.querySelector 
---
### Links:
website: https://mjpagenkopf.github.io/employee_pw_gen/

Repository: https://github.com/mjpagenkopf/employee_pw_gen


### Screenshot for Reference

[Screenshot 1](/assets/images/Screenshot1.png)

[Screenshot 2](/assets/images/Screenshot2.png)

[Screenshot 3](/assets/images/Screenshot3.png)

[Screenshot 4](/assets/images/Screenshot4.png)



