// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length.");
    return;
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }

  // Generate the password based on chosen criteria
  var password = generatePasswordWithCriteria(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  // Display the generated password
  
alert("Your generated password is:\n" + password);
  //var password = document.setAttribute('password');
 // password = 'password'
 // var passwordElement = document.getElementById('password');
 //passwordElement.setAttribute('password', 'value');

}

function generatePasswordWithCriteria(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  // Define character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

  // Create a pool of characters based on selected criteria
  var charPool = "";
  if (includeLowercase) charPool += lowercaseChars;
  if (includeUppercase) charPool += uppercaseChars;
  if (includeNumeric) charPool += numericChars;
  if (includeSpecial) charPool += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }

  return password;
}
