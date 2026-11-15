// Question 1. **Reverse a string** — `"hello"` → `"olleh"`. Do it without `.reverse()`. 



// Method 1: Understanding a problem and solving it step by step.

// let myString = 'hello';
// const reverseString = myString.split('');
// const splitString = reverseString.reverse();
// const finalReversedString = splitString.join('');

// console.log(reverseString);
// console.log(splitString);
// console.log(finalReversedString);


// Method 2: Using a for loop to reverse the string using built-in reverse methods.


// let myString = 'hello';
// let reversedString = '';

// for(let i = myString.length - 1; i >= 0; i--){

// for understanding purpose, we can also use the following code:
    // reverseString = reverseString + myString[i];
    // optimizes way 
    // reversedString += myString[i];

    
// };

// console.log(reversedString);


// Method 3: Using recursion to reverse the string without using built-in reverse methodss.

// this is the best approach to reverse a string using recursion for interview purpose. 
// function reverseString(str){
//     let result = [];

//     for(let i = str.length -1; i >=0; i--){
//         result.push(str[i]);

//     }    
//     return result.join('');
// }

// console.log(reverseString('hello'));





// Question 2.  **Reverse words in a sentence** — `"the sky is blue"` → `"blue is sky the"`. Handle leading, trailing and multiple spaces.

// methos 1: understand problem and solve it step by step. 


// let myString = 'the sky is blue';

// let splitString = myString.split(' ');
// let reverseString = splitString.reverse();
// let joinedString = reverseString.join(' ');


// console.log(splitString);
// console.log(reverseString);
// console.log(joinedString);


// Method 2: Using a for Function to reverse the words in a sentence.

// let myWord = 'the sky is blue';

// function reverseWords(str){
//     let reservedWord =  str.trim().split(/\s+/).reverse().join(' ');
//     return reservedWord;
// }   
// console.log(reverseWords(myWord));


// Method 2: Using a for Loop to reverse the words in a sentence without using built-in reverse methods.



// function reverseWords(str){

//     let words = str.trim().split(/\s+/);
//     let reversedWords = [];

//     for(let i = words.length -1; i >=0; i--){
//         reversedWords.push(words[i]);
//     }
//     return reversedWords.join(' ');
// }
// console.log(reverseWords(' the sky   is blue   '));


// Method 3: Interview approach to reverse the words in a sentence without using built-in reverse methods.

// function reverseWords(str) {
//     let words = str.trim().split(/\s+/);
//     let result = [];

//     for (let i = words.length - 1; i >= 0; i--) {
//         result.push(words[i]);
//     }

//     return result.join(' ');
// }

// console.log(reverseWords('the sky is blue'));
// // blue is sky the

// console.log(reverseWords('  hello   world  '));
// // world hello

// console.log(reverseWords(''));
// ''


// Question 3. **Reverse each word but keep word order** — `"I love JS"` → `"I evol SJ"`.


// Methoid 1: Using built-in methods to reverse each word in a sentence but keep the word order intact.
// let myString = 'I love JS';

// let reversedWordsWithOrder = myString.split(' ');
// let reversedWords = reversedWordsWithOrder.map(word => word.split('').reverse().join(''));
// let finalReversedWords = reversedWords.join(' ');

// console.log(reversedWordsWithOrder);
// console.log(reversedWords);
// console.log(finalReversedWords);


// Method 2: Using a for function to reverse each word in a sentence but keep the word order intact with using built-in methods.

// function reverseEachWord(str){

//     let words = str.split(' ');
//     let reversedWords = [];

//     for(let i = 0; i< words.length; i++){
//         reversedWords.push(words[i].split('').reverse().join(''));
//     }
//     return reversedWords.join(' ');
// }
// // this is without without removing extra spaces 
// console.log(reverseEachWord('I    love JS   and React '));


// // this is without with removing extra spaces 
// function reverseEachWord2(str){

//     let words = str.trim().split(/\s+/);
//     let reversedWords = [];

//     for(let i = 0; i< words.length; i++){
//         reversedWords.push(words[i].split('').reverse().join(''));
//     }
//     return reversedWords.join(' ');
// }

// console.log(reverseEachWord2('I    love JS   and React '));


// Method 3: Using a for function to reverse each word in a sentence but keep the word order intact without using built-in methods.


// function reversedEachWords(str){
//     let words = str.trim().split(/\s+/);
//     let reversedWords = [];

//     for(let word of words){
//         let reversedWord = '';

//         for(let i = word.length-1; i>=0; i--){
//             reversedWord += word[i];
//         }

//         reversedWords.push(reversedWord);

//     }

//     return reversedWords.join(' ');
    
// }

// console.log(reversedEachWords('I    love JS   and React '));




//Question 4. **Reverse only letters, keep special characters in place** — `"a-bC-dEf"` → `"f-Ed-Cba"`.

// Method 1: Using built-in methods to reverse only letters in a string but keep special characters in place.


// let myString = 'a-bC-dEf';
// let letters = myString.split('').filter(char => /[a-zA-Z]/.test(char)).reverse();
// let result = myString.split('').map(char => /[a-zA-Z]/.test(char) ? letters.shift() : char).join('');

// console.log(letters);
// console.log(result);


// Method 2: Using built-in methods to reverse only letters in a string but keep special characters in place with function.
// function reverseOnlyLetters(str) {
//     let index = 0;
//     let letters = str.split('').filter(char => /[a-zA-Z]/.test(char)).reverse();
//     let result = str.split('').map(char => /[a-zA-Z]/.test(char) ? letters[index++]: char).join('')

//     return result;
// }


// console.log(reverseOnlyLetters('a-bC-dEf'))


// Method 3: Using Two Pointer method to reverse only letters in a string but keep special characters in place.


// function reverseLetterOnly(str){
//     let left = 0
//     let right = str.length-1;
//     const arr = str.split('')
//     const isLetter = (char)=> /[a-zA-Z]/.test(char)
//    while(left<right){
//         if(!isLetter(arr[left])){
//             left++;
//         }else if(!isLetter(arr[right])){
//             right--
//         }else{
//             [arr[left], arr[right]]= [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//    }
//    return arr.join('');
// }


// console.log(reverseLetterOnly('a-bC-dEf'))


// question 5. - 🔴 **Reverse a string with Unicode/emoji safely** — `"hi👋"` should not break the emoji. *Hint:* `Array.from(str)` or `[...str]` handles code points.

// Method 1. Using inbuild methods. 

