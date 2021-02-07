// Task 1: Write a function that returns the sum of two numbers
const add = (param1, param2) => param1 + param2;

// Task 2: Given a year, return the century it is in
function centuryFromYear(year) {
    return Math.ceil(year / 100)
};

// Task 3: Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
    for (let i = 0; i < (inputString.length / 2) + 1; i++) {
        if ( inputString[i] === inputString[inputString.length - 1 - i]) {
            continue;
        } else return false;
    };
    return true;
};

// Task 4: Given an array of integers, find the pair of adjacent(nearby) elements, that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {
    let maximalProduct = -Infinity;
    for ( let i = 0; i < inputArray.length - 1; i++) {
        if ((inputArray[i] * inputArray[i+1]) > maximalProduct) {
            maximalProduct = (inputArray[i] * inputArray[i+1]);
        };
    };
    if (maximalProduct !== -Infinity) return maximalProduct;
};

// Task 5: Find the area of a polygon for a given n
function shapeArea(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return (n - 1) * 4 + shapeArea(n - 1);
};

// Task 6: Given array of non-negative different integers. Find how many items shall we add to have 3,4,5... sequence, no number missing inside
function makeArrayConsecutive2(statues) {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let statuesNeeded = (max - min) + 1 - statues.length;
    return statuesNeeded;
};

// Task 7: Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
    function increasingSequence(sequence) {
        for (let i = 0; i < sequence.length - 1; i++) {
            if (sequence[i+1] > sequence[i]) {
                continue;
            } else return false;
        };
        return true;
    };
    
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i+1] > sequence[i]) {
            continue;
        } else {
            let arr1 = sequence.map((x) => x);
            arr1.splice(i,1);
            let isIncreasing1 = increasingSequence(arr1);

            let arr2 = sequence.map((x) => x);
            arr2.splice(i+1,1);
            let isIncreasing2 = increasingSequence(arr2);

            if (isIncreasing1 === true || isIncreasing2 === true) {
                return true;
            } else {
                return false;
            };
        };
    };
    return true;
};
