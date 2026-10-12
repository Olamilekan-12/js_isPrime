// Problem : Give a natural number 'n', determine if the number is prime or not

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(1)) //FALSE
console.log(isPrime(5)) //TRUE
console.log(isPrime(4)) //FALSE

//Big-O = O(sqrt(n))