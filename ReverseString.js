//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
    let result = []

    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i])
    }

    return result.join('')
}

function recursionReverse(str) {
    if (str === "") {
        return ""
    } else {
        console.log(str.substring(1) + str.charAt(0))
        return recursionReverse(str.substring(1)) + str.charAt(0)
    }
}

console.log(recursionReverse("test"))
