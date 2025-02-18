const fibonacci = function(member) {
    const fib = [0, 1];
    if (member < 0) {
        return "OOPS";
    }
    //Accept strings as numeric input
    member *= 1;
    for (let i = 2 ; i <= member ; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib[member]
};

//Better solution would be to use temp variables rather than growing an array. Would be faster and less memory. 

// Do not edit below this line
module.exports = fibonacci;
