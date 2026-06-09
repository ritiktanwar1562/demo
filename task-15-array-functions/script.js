// Dummy Array
const numbers = [4, 8, 2, 11, 6, 7, 10];

console.log("Array:", numbers);

// Function to find maximum number
function findMax(arr) {
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Anonymous Function for Sum
const findSum = function(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

// Arrow Function for Odd Count
const countOdd = (arr) => {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};

console.log("Maximum number:", findMax(numbers));
console.log("Sum of all elements:", findSum(numbers));
console.log("Count of odd numbers:", countOdd(numbers));