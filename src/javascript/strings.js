// 1. **Reverse a string** — `"hello"` → `"olleh"`. Do it without `.reverse()`. 



// Method 1: Understanding a problem and solving it step by step.

// let myString = 'hello';
// const reverseString = myString.split('');
// const splitString = reverseString.reverse();
// const finalReversedString = splitString.join('');

// console.log(reverseString);
// console.log(splitString);
// console.log(finalReversedString);


// Method 2: Using a for loop to reverse the string.


// let myString = 'hello';
// let reversedString = '';

// for(let i = myString.length - 1; i >= 0; i--){

// for understanding purpose, we can also use the following code:
    // reverseString = reverseString + myString[i];
    // optimizes way 
    // reversedString += myString[i];

    
// };

// console.log(reversedString);


// Method 3: Using recursion to reverse the string.

// this is the best approach to reverse a string using recursion for interview purpose. 
function reverseString(str){
    let result = [];

    for(let i = str.length -1; i >=0; i--){
        result.push(str[i]);

    }    
    return result.join('');
}

console.log(reverseString('hello'));