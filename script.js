const generateBtn = document.querySelector("#generate");
let myLength = 0;
let finalPassword = ""


// Write password to the #password input
function writePassword() {
  var passwordLen = getpasswordLength();
  var options = getPasswordOptionSet();


   var passwordText = document.querySelector("#password");
  passwordText.value = makePassword(passwordLen, options);


}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  event.preventDefault()
   writePassword()
})

// To get and return the length of the password
function getpasswordLength() {
  let passwordLength;
  while (true) {
  passwordLength = parseInt(prompt("please enter the number of characters that you want for your password. It must be more than 12 characters but less than 128."))
  if (isNaN(passwordLength)) {
     alert ("The password length must be a number")
   
   }
    else {
      if (passwordLength < 12 ||passwordLength > 128) {
        alert("Password must be between 12 and 128, characters inclusive")
   
    }

  else {
    
     break;
     
    }
    
  }
}
return passwordLength
}
// get options for the password from the user and returns ?
function getPasswordOptionSet() {
  //Constant values
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "123456789"
  const specialCharacters = "@!#$%&"
 //Assigning characters to varable
 var numbersInput = confirm("Do you want numbers in your password?");

 var lowerCaseInput = confirm("Do you want lowercases in your password?");

 var upperCaseInput = confirm("Do you want uppercases in your password?");

 var specialCharactersInput = confirm("Do you want special characters in your password?");
 // declar a empty string
 let options = ""
 if (numbersInput) {
   options+=numbers
    }
 if (upperCaseInput) {
    options+=upperCase
  }
   if (lowerCaseInput) {
    options+=lowerCase
  }
 if (specialCharactersInput) {
    options+=specialCharacters
  }

//finalPassword = makePassword(passwordLength, options)
//console.log(options)

return options
}

// Write password to the #password input
function makePassword(len, options) {
  let genPassword = ""
  console.log(len)
  console.log(options)
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * options.length)  
let randomCharacter = options[randomIndex]
   genPassword = genPassword+randomCharacter;
console.log(randomCharacter)
    console.log(randomIndex)

  }
console.log(genPassword)
   return genPassword
  
 }
  