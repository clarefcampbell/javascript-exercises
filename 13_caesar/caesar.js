const caesar = function(original, shift) {

    //Handle large shifts
    while (shift > 26 || shift < -26) {
        shift = (shift < 0) ? shift + 26 : shift - 26;
    }

    return original.split('').map((letter) => {
        //Converts if letter to ascii
        if (letter.charCodeAt() <= 90 && letter.charCodeAt() >= 65 || (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122)) {
            letter = letter.charCodeAt();
        }
        //Shift and correct if outside range
        if (typeof(letter) == 'number' && shift > 0)  {
            letter = ((letter <= 90 && letter + shift > 90) || (letter + shift > 122)) ? letter + shift - 26 : letter + shift;
        } else if (typeof(letter) == 'number' && shift < 0) {
            letter = ((letter >= 97 && letter + shift < 97) || (letter + shift < 65)) ? letter + shift + 26 : letter + shift;
        }
        //Back to string
        return (typeof(letter) == 'number') ? String.fromCharCode(letter) : letter;
    //Array to String
    }).join('');
};

// Do not edit below this line
module.exports = caesar;
