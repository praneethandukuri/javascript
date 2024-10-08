    const number = 1234;
    let quotient = number;
    let digitsSum = 0;

    while(quotient !== 0){
        let remainder = quotient % 10;
        quotient = quotient - remainder;
        digitsSum += remainder;
        quotient = quotient / 10;
    }
    console.log(digitsSum);
