//1.  Reverse a string 
// let str =  "Saurabh Sharma";
// let reversedString = str.split("")
// let newString = reversedString.reverse()
// let finalString = newString.join("")
// console.log(reversedString)
// console.log(newString)
// console.log(finalString)

// methos 1 
// let reversedString = str.split("").reverse().join("")
// method 2 
// Best for reuseability and code redablity for production code
// function reverseString1(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString1("Saurabh Sharma"))

// function reverseString2(str) {
//     let reversedString = ''
//     for (let i = str.length -1; i >= 0; i--){
//         reversedString += str[i]
//     }
//     return reversedString
// }
// console.log(reverseString2('Saurabh sharma '))

// 2. **Valid palindrome** — Ignore non-alphanumerics and case. `"A man, a plan, a canal: Panama"` → `true`. *(two pointers)*

// Method 1 

// let str = "A man, a plan, a canal: Panama";
// let str = "A man, a plan, a canal: Panama: 6728| , t3626@# ||";
// let newStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
// let reversedString = newStr.split("").reverse().join("");
// console.log(reversedString)
// console.log(newStr)
// console.log(reversedString === newStr)

// Method 2 

// let str = "A man, a plan, a canal: Panama";
// let str = "A man, a plan, a canal: Panama: 6728| , t3626@# ||";

// function isPalidrome(str){
//     let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// let reversedString = newStr.split("").reverse().join("");
// return reversedString === newStr;
// }

// console.log((isPalidrome(str)))


// Method 3: Two pointers approach 

// let str = "A man, a plan, a canal: Panama";
// function isPalidrome(str){
//     let left = 0;
//     let right = str.length - 1;

//     while(left < right){
//         if(!/[a-zA-Z0-9]/i.test(str[left])){
//             left++;
//             continue;
//         }   

//         if(!/[a-zA-Z0-9]/i.test(str[right])){
//             right--; 
//             continue;
//         }

//         if(str[left].toLowerCase() !== str[right].toLowerCase()){
//             return false;
//         }

//         left++;
//         right--;

//     }
//     return true;
// }
// console.log(isPalidrome("A man, a plan, a canal: Panama"))


// 3. **Valid anagram** — `"listen"`, `"silent"` → `true`. *(frequency map)* 