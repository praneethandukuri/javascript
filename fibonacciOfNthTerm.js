const limit = 8;

let previousTerm = 0;
let currentTerm = 1;
let nextTerm = 0;

if(limit === 1){
    console.log(previousTerm);
}

if(limit === 2){
    console.log(currentTerm);
}

for(let currentPosition = 3; currentPosition <= limit; currentPosition++){

    nextTerm = currentTerm + previousTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm

}
console.log(nextTerm);
