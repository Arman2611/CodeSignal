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

// Task 8: Given a rectangular matrix of integers, where each value represents the cost of the room. Task is to return the total sum of all rooms, that are not under 0, on the same column.

function matrixElementsSum(matrix) {
    let sum = 0;
    let isThereGhostInColumn = [];
    
    for (let i = 0; i < matrix.length; i++) {        
        for (let j = 0; j < matrix[i].length; j++) {     
            if (matrix[i][j] === 0) {
                isThereGhostInColumn[j] = true;
            };       
            if (isThereGhostInColumn[j] !== true) {
                sum += matrix[i][j];
            };
        };
    };
    return sum;
};

// Task 9: Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
    let maxLength = 0;
    let longArray = [];
    for (let i = 0; i< inputArray.length; i++) {
        if (inputArray[i].length > maxLength) {
            maxLength = inputArray[i].length;
        }; 
    };
    for (let i = 0; i< inputArray.length; i++) {
        if (inputArray[i].length === maxLength) {
            longArray.push(inputArray[i]);
        };
    };
    return longArray;
};

// Task 10: Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
    let obj1 = {};
    let obj2 = {};
            
    for (let i = 0; i< s1.length; i++) {
        if (s1[i] in obj1) {
            obj1[s1[i]] += 1;
        } else {
            obj1[s1[i]] = 1;
        };
        console.log(obj1);
    };
    
    for (let i = 0; i< s2.length; i++) {
        if (s2[i] in obj2) {
            obj2[s2[i]] += 1;
        } else {
            obj2[s2[i]] = 1;
        };
        console.log(obj2);
    };
    
    let sum = 0;
    for (let prop in obj1) {
        if (obj2[prop] !== undefined) {
            sum += Math.min(obj1[prop], obj2[prop]);
            console.log(obj1[prop],obj2[prop]);
        };
    };
    return sum;
};

// Task 11: A number is considered lucky if the sum of the fisrt half of the digits is equal to the sum of the second half. Check if the given number is lucky.

function isLucky(n) {
    n = Array.from(n.toString());
    if (n.length%1 === 0) {
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < n.length; i++) {
            if (i < n.length / 2) {
                sum1 += parseInt(n[i]);
                console.log(sum1)
            } else {
                sum2 += parseInt(n[i]);
                console.log(sum2)
            }
        }
        return sum1 === sum2;
    } else return false;
};

// Task 12: Given array of numbers. Task is to sort the array except for items that are (-1), they shall stay at the same index.

function sortByHeight(a) {
    let people = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            continue;
        } else {
            people.push(a[i]);
        }
    }
    people.sort(function(a, b) {
        return a - b;
    });
    
    let sortedArray = [];
    let treesCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            sortedArray.push(-1);
            treesCount++;
        } else {
            sortedArray.push(people[i - treesCount]);
        }
    };
    return sortedArray;
}

// Task 13: Write a function that reverses characters in (possibly nested) parentheses in the input string.
// My solution didnt pass 1 of the HIDDEN tests, so I dont know what is to be fixed

function reverseInParentheses(inputString) {
    inputString = inputString.split("");
    console.log(inputString.join(''));

    function reverse(str) {
        str = str.slice(1,-1);
        return str.reverse();
    }

    let startChar = inputString.lastIndexOf("(");
    let endChar = inputString.indexOf(")", startChar);
    console.log(startChar,endChar);
    let target = inputString.slice(startChar,endChar + 1);
    console.log(target.join(''));
    
    let changed = reverse(target);
    console.log(changed);

    inputString.splice(startChar,(endChar + 1 - startChar), ...changed);
    inputString = inputString.join('');
    console.log(inputString);

    if((inputString.lastIndexOf("(") >= 0) && (inputString.indexOf(")") >= 0)) {
        console.log('2round');
        inputString = reverseInParentheses(inputString);
    } else {
        console.log('1round');
        console.log('this is ' + inputString); 
    }  
    return inputString; 
}
// console.log(reverseInParentheses("foo(bar(baz))blim"))

// Task 14: You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function alternatingSums(arr) {
    let weights = [0,0]
    for (let i = 0; i < arr.length; i++) {
        if (i%2 === 0) {
            weights[0] += arr[i];
        } else {
            weights[1] += arr[i];
        }
    };
    return weights;
}
// Task 15: Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
    let newMatrix = [];
    newMatrix.length = picture.length + 2;
    
    let rowOfAsterisks = "*".repeat(picture[0].length + 2);    
    newMatrix[0] = rowOfAsterisks;
    newMatrix[newMatrix.length - 1] = rowOfAsterisks;
    
    for (let i = 0; i < picture.length; i++) {
        newMatrix[i+1] = `*${picture[i]}*`
    };
    return newMatrix;
}

// Task 16: Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays. Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
    let differences = 0;
    let firstIndex = -1;
    let secondIndex = -1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            continue
        } else {    
            differences += 1;   
            if (firstIndex === -1) {
                firstIndex = i;
            } else {
                secondIndex = i;
            }
            if (differences === 3) return false;
        }
    }
    if (differences === 2) {
                if (a[firstIndex] === b[secondIndex] && a[secondIndex] === b[firstIndex]) {
                    return true;
                } else return false;
            }
    if (differences === 1) return false;
    if (differences === 0) return true;
}
