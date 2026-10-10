
// const array = [1, 2, 3, 2, 4, 2, 5, 3]
// function mostFrequent(arr) {
//   const frequency = new Map();

//   let maxCount = 0;
//   let result = null;

//   for (const num of arr) {
//     const count = (frequency.get(num) || 0) + 1;
//     frequency.set(num, count);

//     if (count > maxCount) {
//       maxCount = count;
//       result = num;
//     }
//   }

//   return result;
// }

// console.log(mostFrequent(array));

// const uniqueValues = [...new Set(array)]
//   console.log(uniqueValues)


//   function removeDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) === index);

//   }
//   removeDuplicates(array)


//   const arr = [1, [2, [3, [4, 5]]], 6];

//   const flattenedArray = arr.flat(Infinity);
//   console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

//   function flattenArray(arr) {
//     const result = [];
//     for (const item of arr){
//       if (Array.isArray(item)) {
//         result.push(...flattenArray(item));
//       }
//       else {
//         result.push(item);
//       }
//     }
//     return result;
//   }

// console.log(flattenArray(arr)); // Output: [1, 2, 3, 4, 5, 6]


// const arry = [10, 5, 20, 8, 20, 15];

// function findSecondLargest(arr) {
//   const uniqueArr = [...new Set(arr)];
//   uniqueArr.sort((a, b) => b - a);
//   return uniqueArr[1];
// }

// console.log(findSecondLargest(arry)); // Output: 15



// Remove duplicates from an array using Set: 


const newArray = [1, 2, 3, 2, 4, 2, 5,];

// const uniqueArray = [...new Set(newArray)];

// console.log(uniqueArray);

// const uniqueArray = newArray.filter((value,index) => newArray.indexOf(value) === index);

// console.log(uniqueArray);


// const uniqeArray = newArray.reduce((acc,curr) => {
//   if(!acc.includes(curr)) {
//     acc.push(curr)
//   } 
//   return acc;
// }, [])

// console.log(uniqeArray)


// const uniqueArray = (arr) => {
//   const result = [];
//   const map = {};

//   for (const item of arr) {
//     if (!map[item]) {
//       map[item] = true;
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(uniqueArray(newArray));


// QUESTION 3 — FIND DUPLICATES 

// function findDuplicates(arr) {
//   const seen = new Set();
//   const duplicates = new Set();

//   for (const item of arr){
//     if(seen.has(item)) {
//       duplicates.add(item);
//     }else{
//       seen.add(item);
//     }
//   }
//   return [...duplicates];
// }

// console.log(findDuplicates(newArray)); // Output: [2, 3, 4, 5, 6, 7, 8, 9, 10]


// QUESTION 4 — FREQUENCY COUNT 



//  function frequencyCount(str) {
//    const map = {};
//    for(const char of str){
//     map[char] = (map[char] || 0) + 1;

//    }
//    return map;

//  }

//  console.log(frequencyCount("javascript")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }


//  now show the most frequent character and the count in the string 

// const str = "javascript";

// function mostFrequentChar(str) {
//   const frequency ={};
//   let maxCount = 0;
//   let result = null;

//   for(const char of str){
//     frequency[char] = (frequency[char] || 0) + 1;

//     if(frequency[char] > maxCount) {
//       maxCount = frequency[char];
//       result = char;
//     }
//   }
//   return { character: result, count: maxCount };
// }
// console.log(mostFrequentChar(str)); // Output: { character: 'a', count: 2 }


// QUESTION 5 — FIRST NON-REPEATING CHARACTER

// const str = "javascript";

// function firstNonRepeatingChar(str) {
//   const frequency = {};

//   for (const char of str) {
//     frequency[char] = (frequency[char] || 0) + 1;
//   }

//   for (const char of str){
//     if (frequency[char] === 1) {
//       return char;
//     }
//   }
//   return null; // Return null if no non-repeating character is found

// }   


// console.log(firstNonRepeatingChar(str)); // Output: 'j'


// QUESTION 6 — ANAGRAM 

// let str1 = "listen";
// let str2 = "silent";
// function isAnagram(str1, str2) {
//   if(str1.length !== str2.length){
//     return false;
//   } 
//   const map = {};
//   for(const char of str1){
//     map[char] = (map[char] || 0 ) +1;
//   }
//   for(const char of str2){
//     if(!map[char]){
//       return false;
//     }
//     map[char]-- ;
//   }
//   return true;
// }


// console.log(isAnagram(str1, str2)); // Output: true


// QUESTION 7 — REVERSE STRING 


// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
//   }
//     return reversed;
// }

// console.log(reverseString("Saurabh")); // Output: "hbaruaS"


// function reverString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverString("Saurabh")); // Output: "hbaruaS"

// now create a function for reverse letter captital to lowercase and lowercase to capital letter 

// function toggleCase(str) {
//   let toggled = '';
//   for (const char of str) {
//     if (char === char.toUpperCase()) {
//       toggled += char.toLowerCase();
//     } else {
//       toggled += char.toUpperCase();
//     }
//   }
//   return toggled;
// }

// console.log(toggleCase("SaUraBh")); // Output: "sAuRaBH"