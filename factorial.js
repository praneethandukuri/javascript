const number = 5;
let factorial = 1;

for(let currentNumber = number; currentNumber > 1; currentNumber--){
    factorial *= currentNumber;
}

console.log(factorial);
