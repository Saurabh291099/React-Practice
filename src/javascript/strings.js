//1.  Reverse a string 

let str =  "Saurabh Sharma";

// let reversedString = str.split("")
// let newString = reversedString.reverse()
// let finalString = newString.join("")
// console.log(reversedString)
// console.log(newString)
// console.log(finalString)

let reversedString = str.split("").reverse().join("")


// Best for reuseability and code redablity for production code
function reverseString1(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString1("Saurabh Sharma"))

// 2. **Valid palindrome** — Ignore non-alphanumerics and case. `"A man, a plan, a canal: Panama"` → `true`. *(two pointers)*


