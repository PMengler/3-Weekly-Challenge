// Assignment code here
var length = Number(prompt("Choose password length between 8(min) and 128(max) characters long.")); // Upon loading the page, the user is prompted for desired password length
var charType = prompt("Choose character type: lowercase, uppercase, numeric, and/or special."); // The user is then prompted for the desired character type
// var password = generatePassword(); // don't need this, called out below locally for writePassword function

// function that generates the random password based on desired criteria !!how do i prompt multiple times and save ??
function generatePassword () {
  var charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-=[]{}|;:",
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    // var randomNumber = Math.floor(Math.random() * charSet.length); // was playing around with this, seems to copy the last character for 'length' and add on end
    // password += charSet.substring(randomNumber, randomNumber +1);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
