// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

// Set credentials


  var passwordLength = prompt("How many digits required for the password?");
  var lower = confirm("Does lower case reqired?")
  var upper = confirm("Does upper case reqired")
  var num = confirm("Does number required?")
  var symbol = confirm("Does special symbol required?")

  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var randomlowerIndex = Math.floor(Math.random()*lowerCase.length);
 

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var randomupperIndex = Math.floor(Math.random() * upperCase.length);

  var number = "1234567890".split("");
  var randomnumberIndex = Math.floor(Math.random() * number.length);

  var special = "!@#$%^&*()".split("");
  var randomspecialIndex = Math.floor(Math.random() * special.length);

  for (i=0;  i<passwordLength; i++)


  return (lowerCase[randomlowerIndex] + upperCase[randomupperIndex] + number[randomnumberIndex]  +special[randomspecialIndex])

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

