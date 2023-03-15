const palindromes = function (palindrome) {
    const revArray = palindrome.toLowerCase().split('').filter(char => /[a-z]/.test(char));
    const palArray = revArray;
    revArray.reverse();
    for (i = 0 ; i < revArray.length ; i ++) {
        if (revArray[i] != palArray[revArray.length - i - 1]) {
            return false;
        }
    }
    return true;
};

//Better method would have been to convert back to string and compare strings rather than using a loop

// Do not edit below this line
module.exports = palindromes;
