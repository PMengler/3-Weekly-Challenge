// Assignment code here

// Parent Generate Function
function generatePassword () {
  // Prompt and Confirm Popups to specify desired criteria
  var length = Number(prompt("Choose password length between 8(min) and 128(max) characters long."));
  var hasLower = confirm("Do you want your password to contain lowercase characters?");
  var hasUpper = confirm("Do you want your password to contain uppercase characters?");
  var hasNumber = confirm("Do you want your password to contain numeric characters?");
  var hasSymbol = confirm("Do you want your password to contain special characters?");
  // Character Sets
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+-=[]{}|;:";
  
  console.log(length);
  console.log(hasLower, hasUpper, hasNumber, hasSymbol);
  
  // console logs number of true responses
  const typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
  console.log('Types Count ', typesCount);
  
  // Filters out any false responses and console logs the types Array
  const typesArr = [{ hasLower }, { hasUpper }, { hasNumber }, { hasSymbol }].filter
  (
  item => Object.values(item)[0]
  ); 
  console.log('typesArr', typesArr);
  
  // If all responses are false then the Password generator retuns nothing
  if (typesCount === 0) {
    return '';
  };

  var password = '';
  
  var criteria = '';
  // if/else statements to add Character content to criteria string
  if( hasLower == true) {
    criteria += lowercase;
  } else{
    criteria += '';
  };

  if( hasUpper == true) {
    criteria += uppercase;
  } else {
    criteria += '';
  };

  if( hasNumber == true) {
    criteria += numeric;
  } else{
    criteria += '';
  };

  if( hasSymbol == true) {
    criteria += special;
  } else{
    criteria += '';
  };

  console.log("criteria ", criteria);
  
  // Math to take chosen characters and randomize for desired length specified by user
  var password = "";
  for (var i = 0; i < length; i++) {
    password += criteria.charAt(Math.floor(Math.random() * criteria.length));
  };
  return password;
  };

////////////////////////////////////////////////////////////////////////
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
        
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
        
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);