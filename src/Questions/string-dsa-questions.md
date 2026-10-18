# String DSA Practice Set (Easy → Hard)
For frontend developer interviews. Solve in JavaScript. For each one, say the time and space complexity out loud before coding.

**Patterns to know:** two pointers, sliding window, hash map / frequency count, stack, expand around center, prefix/suffix, DP on strings, KMP / rolling hash.

---

<!-- frequency counting, two pointers, searching, sorting  -->

## LEVEL 1: EASY (warm-up, 15 min each)

1. **Reverse a string** — `"hello"` → `"olleh"`. Do it without `.reverse()`.
2. **Valid palindrome** — Ignore non-alphanumerics and case. `"A man, a plan, a canal: Panama"` → `true`. *(two pointers)*
3. **Valid anagram** — `"listen"`, `"silent"` → `true`. *(frequency map)*
4. **Count vowels and consonants** in a string.
5. **First unique character** — Return the index of the first non-repeating char. `"leetcode"` → `0`, `"aabb"` → `-1`.
6. **Capitalize the first letter of every word** — `"hello big world"` → `"Hello Big World"`.
7. **Most frequent character** — Return the char that appears most often and its count.
8. **Remove duplicate characters** — `"programming"` → `"progamin"` (keep first occurrence).
9. **Reverse words in a sentence** — `"the sky is blue"` → `"blue is sky the"`. Handle extra spaces.
10. **Check if one string is a rotation of another** — `"waterbottle"`, `"erbottlewat"` → `true`.
11. **Longest common prefix** of an array of strings — `["flower","flow","flight"]` → `"fl"`.
12. **Is subsequence** — `"ace"` is a subsequence of `"abcde"`. *(two pointers)*
13. **Valid parentheses** — `"{[()]}"` → `true`, `"([)]"` → `false`. *(stack)*
14. **Convert camelCase ↔ snake_case ↔ kebab-case** — `"userProfileName"` → `"user_profile_name"`. *(very common in frontend rounds)*
15. **Truncate a string with ellipsis** — Truncate to `n` chars without cutting a word in half, add `...`.

---

## LEVEL 2: MEDIUM (core interview questions, 25–30 min each)

16. **Longest substring without repeating characters** — `"abcabcbb"` → `3`. *(sliding window)*
17. **Group anagrams** — `["eat","tea","tan","ate","nat","bat"]` → `[["eat","tea","ate"],["tan","nat"],["bat"]]`.
18. **Longest palindromic substring** — `"babad"` → `"bab"` or `"aba"`. *(expand around center)*
19. **Count palindromic substrings** — `"aaa"` → `6`.
20. **String compression** — `"aaabbc"` → `"a3b2c1"` (or `"a3b2c"`). Do it in place if given a char array.
21. **Longest repeating character replacement** — Replace at most `k` chars to get the longest run of one letter. `"AABABBA"`, `k=1` → `4`. *(sliding window)*
22. **Find all anagrams of `p` in `s`** — `s="cbaebabacd"`, `p="abc"` → `[0,6]`. *(fixed sliding window)*
23. **Permutation in string** — Does `s2` contain a permutation of `s1`?
24. **Decode string** — `"3[a2[c]]"` → `"accaccacc"`. *(stack)*
25. **Simplify Unix path** — `"/a/./b/../../c/"` → `"/c"`. *(stack)*
26. **String to integer (atoi)** — Handle whitespace, sign, overflow, invalid chars.
27. **Add two numbers given as strings** — `"123"` + `"456"` → `"579"`. No `BigInt`, no `Number()`.
28. **Minimum remove to make valid parentheses** — `"a)b(c)d"` → `"ab(c)d"`.
29. **Generate all valid parentheses** for `n` pairs. *(backtracking)*
30. **Permutations of a string** (with and without duplicates). *(backtracking)*
31. **Zigzag conversion** — `"PAYPALISHIRING"`, 3 rows → `"PAHNAPLSIIGYIR"`.
32. **Longest common subsequence** of two strings. *(DP)*
33. **Count and say** — `1, 11, 21, 1211, 111221...`
34. **Implement a simple template engine** — `render("Hi {{name}}, you are {{age}}", {name:"Ana", age:20})`. Handle missing keys and nested keys like `{{user.name}}`. *(frontend favorite)*
35. **Parse a URL query string** into an object (`"?a=1&b=2&b=3"` → `{a:"1", b:["2","3"]}`), and write the reverse (stringify). Handle encoding.
36. **Highlight search matches** — Given text and a query, wrap matches in `<mark>` tags, case-insensitive, without breaking on regex special characters.
37. **Validate / format a phone number or credit card** string as the user types (`"1234567890"` → `"(123) 456-7890"`).

---

## LEVEL 3: HARD (stretch, 40+ min each)

38. **Minimum window substring** — `s="ADOBECODEBANC"`, `t="ABC"` → `"BANC"`. *(sliding window + counts)*
39. **Edit distance** — Min insert/delete/replace to turn `"horse"` into `"ros"` → `3`. *(DP)*
40. **Longest palindromic subsequence** — `"bbbab"` → `4`. *(DP)*
41. **Regular expression matching** — Support `.` and `*`. `isMatch("aab","c*a*b")` → `true`. *(DP)*
42. **Wildcard matching** — Support `?` and `*`. *(DP or greedy)*
43. **Word break** — Can `"leetcode"` be split using `["leet","code"]`? Then **Word Break II**: return all possible sentences. *(DP + backtracking)*
44. **Text justification** — Format words into lines of exactly `maxWidth`, fully justified. *(great for frontend candidates, since it's layout logic)*
45. **Longest valid parentheses** — `")()())"` → `4`. *(stack or DP)*
46. **Distinct subsequences** — How many ways does `t` appear as a subsequence of `s`? *(DP)*
47. **Shortest palindrome** — Add chars only at the front to make a palindrome. *(KMP / rolling hash)*
48. **Implement `strStr` with KMP** — Find the first index of `needle` in `haystack` in O(n+m).
49. **Interleaving string** — Is `s3` an interleaving of `s1` and `s2`? *(DP)*
50. **Basic calculator** — Evaluate `"(1+(4+5+2)-3)+(6+8)"` with `+ - ( )`. Then extend to `* /`. *(stack)*
51. **Expression add operators** — Insert `+ - *` between digits to reach a target. *(backtracking)*
52. **Implement a trie-based autocomplete** — `insert`, `search`, `startsWith`, and return the top 5 suggestions for a prefix. *(frontend-style: search box)*
53. **Minimum number of operations to make a string a palindrome** / **Palindrome partitioning II** (min cuts). *(DP)*
54. **Smallest string after removing duplicate letters** (`"cbacdcbc"` → `"acdb"`) — keep the lexicographically smallest. *(monotonic stack)*

---

## Suggested 3-week plan
- **Week 1:** Questions 1–15, plus 16–19. Focus on two pointers and hash maps.
- **Week 2:** Questions 20–37. Focus on sliding window, stack, and the frontend-flavored ones (34–37).
- **Week 3:** Questions 38–54. Do 1–2 per day and review DP patterns. Re-solve the ones you got stuck on.

## Interview habits
- Restate the problem and ask about edge cases (empty string, Unicode, case sensitivity, spaces).
- Start with brute force, state its complexity, then optimize.
- Remember JS strings are immutable. Building with `+=` in a loop can be O(n²); use an array and `join`.
- Know `split`, `slice`, `substring`, `charCodeAt`, `localeCompare`, `Map`, `Set`, and `String.raw`.
- Write 3 test cases by hand before saying "done".
