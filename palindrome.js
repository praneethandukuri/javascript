const number = 404;
let duplicateNumber = number;
let reverseNumber = 0;
let isPalindrome = false;

while(duplicateNumber !== 0){
    let remainder = duplicateNumber % 10
    let quotient = (duplicateNumber - remainder) / 10;
    reverseNumber = reverseNumber * 10 + remainder;
    duplicateNumber = quotient;
}

if(number === reverseNumber){
    isPalindrome = true;
}
console.log(isPalindrome);
