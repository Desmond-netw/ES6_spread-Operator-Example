// using spread operator in function arguments

const numbers = [2,4,5]

function sum(a,b,c) {
    return a + b +c 
}

console.log(sum(...numbers));