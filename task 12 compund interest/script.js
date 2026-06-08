let p = 40000;
let r = 10;
let n = 1;
let t = 3;

let amount = p * Math.pow((1 + (r / 100) / n), n * t);

console.log("The compound interest after " + t + " years is: " + amount.toFixed(2));