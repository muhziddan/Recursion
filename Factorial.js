//Write factorial function with 2 approach -> 1. Recursive and 2. Iterative

function recursiveFactorial(value) {// O (n)
    if (value === 0) {
        return 1
    }

    //or it can also be
    // if (value === 2) {
    //     return 2
    // }
    //because factorial of 2, is 2

    return value * recursiveFactorial(value - 1)
}

function iterativeFactorial(value) { // O (n)
    // let result = 0
    if (value === 0) {
        return 1
    } else if (value === 1) {
        return 1
    }
    
    for (let i = value; i > 1; i--) {
        value = value * (i-1)
    }

    return value
}

console.log(recursiveFactorial(5))
console.log(iterativeFactorial(5))
