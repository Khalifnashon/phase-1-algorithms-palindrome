function isPalindrome(word) {
  // Write your algorithm here
  // splits string's characters, reverses the and joins them in a new variable:
  let reversedWord = word.split("").reverse().join("");

  // Compare the original word to the reversed word:
    if(reversedWord === word){
      // return true;
      return true;
    } else{
        // else (if string is not equal to reverseString):
        // return false;
        return false
    }
}

/* 
  Pseudocode
  isPalindrome takes "string":
  Split the word into an array of characters
  Reverse the array of characters
  Join the reversed array of characters into a single string
  Saves reversed string in new variable:
    if string is equal to reverseString (===):
      return true;
    else (if string is not equal to reverseString):
      return false;
*/

/*
  Add written explanation of your solution here
  isPalindrome receives the word variable which is a string.
  It splits the string into an array with each separate letter.
  It then reverses the order of the array, thus reversing the string.
  It joins the reversed array back into a single string.
  The reversed string is stored into a variable 'reversedString'.
  reversedString and word are compared using strict equality to check if they are the same.
  If they are the same, isPalindrome returns true. If they are not, isPalindrome returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("potter"));
}

module.exports = isPalindrome;
