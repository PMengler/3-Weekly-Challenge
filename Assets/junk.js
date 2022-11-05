// Assignment code here

// function that generates the random password based on desired criteria !!how do i prompt multiple times and save ??
function generatePassword () {
    var length = Number(prompt("Choose password length between 8(min) and 128(max) characters long."));
    // const randomFunc = {
      //   lower: getRandomLower,
      //   upper: getRandomUpper,
      //   number: getRandomNumber,
      //   symbol: getRandomSymbol
      // };
    const criteria = [];
      // for(let num = 0; num < 4; num++) {
    var charType = alert("Choose character type: lowercase, uppercase, numeric, and/or special.");
    const hasLower = confirm("Do you want your password to contain lowercase characters?");
    const hasUpper = confirm("Do you want your password to contain uppercase characters?");
    const hasNumber = confirm("Do you want your password to contain numeric characters?");
    const hasSymbol = confirm("Do you want your password to contain special characters?");
        
    const charSets = {
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric: "0123456789",
        special: "!@#$%^&*()_+-=[]{}|;:"
    };
    // const criteria = ask.push(charType);
    // };
    
    console.log(length);
  
    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
    
    const typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
    
    console.log('Types Count ', typesCount);
    
    const typesArr = [{ hasLower }, { hasUpper }, { hasNumber }, { hasSymbol }].filter
    (
    item => Object.values(item)[0]
    ); 
    
    console.log('typesArr', typesArr);
    
    for (i=0; i<typesArr.length; i++) {
        if (typesArr[i].hasLower || typesArr[i].hasUpper || typesArr[i].hasNumber || typesArr[i].hasSymbol) {
            charSets.push(criteria);
        }
    }

    // if (typesCount === 0) {
    //   return '';
    // };
  
    var password = '';
    
                    // for (let i = 0; i < length; i+= typesCount) {
                    //   typesArr.forEach(type => {
                    //     // if (type.hasLower || type.hasUpper || type.hasNumber || type.hasSymbol) {
                        
                    //     // }
                    //     const funcName = Object.keys(type)[0];
                    //     console.log('funcName', funcName);
                    //     password += +randomGen;
                
                    //   });
                
                    //   console.log(password);
                    // };
  
    console.log(`criteria`, criteria);
    
    const charSet = charSets.lowercase || charSets.uppercase || charSets.numeric || charSets.special;
    
    var password = "";
    for (var i = 0; i < length; i++) {
          password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
      return password;
    };
  
  // GENERATOR CODE FUNCTIONS
  // returns a random lowercase letter from Javascript Character Set
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  
  // console.log(getRandomLower());
  
  // returns a random uppercase letter from Javascript Character Set
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  
  // console.log(getRandomUpper());
  
  // returns a random number 0-9 from Javascript Character Set
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  
  // console.log(getRandomNumber());
  
  // returns a random symbol from Javascript Character Set
  function getRandomSymbol() {
    const symbols = '!@#$%^&*()+-=';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  
  // console.log(getRandomSymbol());  
  
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