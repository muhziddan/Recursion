// Given a number N, return the index value of the fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern values, that means that for n=5 -> 2 + 3

// time complexity = O (N)
// space complexity = O (1)
// too much boiler plate
function iterativeFibonacci(value) {
    let n1 = 0
    let n2 = 1
    let counter = 2

    if (value < 2) {
        return value
    }

    while (counter <= value) {
        if (counter % 2 === 0) {
            n1 = n1 + n2
        } else {
            n2 = n2 + n1
        }
    
        counter++
    }

    if (counter % 2 === 0) {
        return n2
    } else {
        return n1
    }
}

// time complexity = O (N)
// space complexity = O (N)
// Concise code
function iterativeFibonacci2(value) {
    let fibonacciSeries = [0, 1]

    for (let i = 2; i <= value; i++) {
        const increment = fibonacciSeries[fibonacciSeries.length - 1] + fibonacciSeries[fibonacciSeries.length - 2]
        fibonacciSeries.push(increment)
    }

    return fibonacciSeries[value]
}

// time complexity = O (2^n)
// space complexity = O (1)
// Concise code
function recursiveFibonacci(value) {
    if (value < 2) {
        return value
    }

    return recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2)
}

console.log(iterativeFibonacci(9))
console.log(iterativeFibonacci2(9))
console.log(recursiveFibonacci(9))
