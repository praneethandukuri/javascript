const number = 404;
let duplicateNumber = number;
let power = 0;
let armstrongSum = 0;
let isArmStrong = false;

while(duplicateNumber !== 0){
    let remainder = duplicateNumber % 10
    let quotient = (duplicateNumber - remainder) / 10;
    power = power + 1;
    duplicateNumber = quotient;
}

duplicateNumber = number;

for(let count = 1; count <= power; count++){
    let remainder = duplicateNumber % 10
    let quotient = (duplicateNumber - remainder) / 10;
    let sum = remainder ** power;
    armstrongSum += sum;
    duplicateNumber = quotient;
}

if(number === armstrongSum){
    isArmStrong = true;
}
console.log(isArmStrong);
