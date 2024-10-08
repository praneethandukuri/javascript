const number = 1;
let highestPossibleNumber = (number / 2);
let isPrime = false;

if(number === 2){
    isPrime = true;
}

if(number % 2 !== 0){
    highestPossibleNumber = highestPossibleNumber - 0.5;

    for(let limit = highestPossibleNumber; limit >= 2; limit--){
        if(number % limit !== 0){
            break;
        }
    }
    isPrime = true;
}
console.log(isPrime);
