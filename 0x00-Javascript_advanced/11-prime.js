function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
        else
            continue;
    }
    return true;
}


isPrime(2);

function countPrimeNumbers() {
    let count = 0;

    for(i = 2; i < 100; i++) {
        if (isPrime(i) == true)
            count++
    }
    return count;
}

const t0 = performance.now();

setTimeout(() => {
    for(let i = 0; i < 10; i++){
        countPrimeNumbers();
    }
}, 0);

const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);