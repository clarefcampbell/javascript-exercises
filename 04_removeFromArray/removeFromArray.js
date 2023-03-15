const removeFromArray = function(origArray, ...valToRemove) {
    for (let i = 0 ; i < origArray.length ; i++) {
        for (let j = 0; j < valToRemove.length ; j++) {
            if (origArray[i] === valToRemove[j]) {
                origArray[i] = null;
            }
        }
    }
    return origArray.filter(Boolean);
    
};

//Alternative solution would be to take advantage of the includes() method, which I learned about from the solution.

// Do not edit below this line
module.exports = removeFromArray;
