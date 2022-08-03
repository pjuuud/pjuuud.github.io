function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        arrayPrimeNum.push(i) // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true
}

//check int
function isInt(n) {
    return n % 1 == 0;
 }

const arrayPrimeNum = []
while(true) {
    var num = Number(prompt("Enter a positive integer"))
    if (!isInt(num)) continue;  //check int
    if (num < 0) continue;      //check nagative int
    showPrimes(num);
    alert('For n = '+ num + ' prime numbers are ' + arrayPrimeNum)
    break;
}