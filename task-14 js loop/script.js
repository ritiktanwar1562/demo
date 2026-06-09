// Sum of first n numbers

let n = 10;
let sum = 0;

for(let i = 1; i <= n; i++){
    sum += i;
}

console.log("Sum of first " + n + " numbers = " + sum);


// Table of n

let tableNum = 5;

console.log("Table of " + tableNum);

for(let i = 1; i <= 10; i++){
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}


// Prime Number Check

let primeNum = 13;
let isPrime = true;

if(primeNum <= 1){
    isPrime = false;
}

for(let i = 2; i < primeNum; i++){
    if(primeNum % i === 0){
        isPrime = false;
        break;
    }
}

console.log("Is " + primeNum + " Prime? " + isPrime);


// Factors

let factorNum = 24;

console.log("Factors of " + factorNum);

for(let i = 1; i <= factorNum; i++){
    if(factorNum % i === 0){
        console.log(i);
    }
}


// Sum of Digits

let digitNum = 139;
let temp1 = digitNum;
let digitSum = 0;

while(temp1 > 0){
    digitSum += temp1 % 10;
    temp1 = Math.floor(temp1 / 10);
}

console.log("Sum of digits of " + digitNum + " = " + digitSum);


// Armstrong Number Check

let armstrongNum = 153;
let temp2 = armstrongNum;
let armstrongSum = 0;

while(temp2 > 0){
    let digit = temp2 % 10;
    armstrongSum += digit * digit * digit;
    temp2 = Math.floor(temp2 / 10);
}

if(armstrongSum === armstrongNum){
    console.log(armstrongNum + " is an Armstrong Number");
}
else{
    console.log(armstrongNum + " is not an Armstrong Number");
}