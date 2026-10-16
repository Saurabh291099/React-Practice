# Frontend Interview DSA Practice (Detailed)
Built around your topic list. Each topic has related questions that go from easy to hard, with examples, hints and follow-ups.

**How to use this:**
1. Solve in JavaScript without looking at the hint first.
2. Say the brute force, then the optimized approach, with time and space complexity.
3. Write 3 edge-case tests (empty, single item, large or weird input).
4. Do the follow-up. Interviewers almost always ask one.

Legend: 🟢 Easy · 🟡 Medium · 🔴 Hard

---

# LEVEL 1: Fundamentals

## 1. Reverse a string
- 🟢 **Reverse a string** without using `.reverse()`.
  - `"hello"` → `"olleh"`
  - *Hint:* two pointers swapping from both ends (convert to array first, since strings are immutable).
- 🟢 **Reverse words in a sentence** — `"the sky is blue"` → `"blue is sky the"`. Handle leading, trailing and multiple spaces.
- 🟡 **Reverse each word but keep word order** — `"I love JS"` → `"I evol SJ"`.
- 🟡 **Reverse only letters, keep special characters in place** — `"a-bC-dEf"` → `"f-Ed-Cba"`.
- 🔴 **Reverse a string with Unicode/emoji safely** — `"hi👋"` should not break the emoji. *Hint:* `Array.from(str)` or `[...str]` handles code points.
- **Follow-up:** Why is `str += char` in a loop potentially O(n²)? How do you avoid it?

## 2. Check palindrome
- 🟢 **Valid palindrome (simple)** — `"madam"` → `true`.
- 🟢 **Palindrome ignoring case and non-alphanumerics** — `"A man, a plan, a canal: Panama"` → `true`.
- 🟡 **Valid palindrome II** — You may delete at most one character. `"abca"` → `true`.
- 🟡 **Longest palindromic substring** — `"babad"` → `"bab"` or `"aba"`. *Hint:* expand around each center.
- 🟡 **Is a number a palindrome without converting to a string?** — `121` → `true`, `-121` → `false`.
- 🔴 **Palindrome partitioning** — Return all ways to split a string into palindromic parts. `"aab"` → `[["a","a","b"],["aa","b"]]`. *(backtracking)*
- **Follow-up:** Can you do the check in O(1) extra space?

## 3. Character frequency
- 🟢 **Count the frequency of every character** — `"banana"` → `{b:1, a:3, n:2}`.
- 🟢 **Most frequent character** — return the char and its count.
- 🟡 **Sort characters by frequency** — `"tree"` → `"eert"` or `"eetr"`. *(bucket sort / sort by count)*
- 🟡 **Check if two strings have the same character frequency** (anagram check without sorting).
- 🟡 **Ransom note** — Can `note` be built from letters in `magazine`, each used once?
- 🔴 **Minimum deletions to make character frequencies unique** — `"aaabbbcc"` → `2`. *(greedy + Set)*
- **Follow-up:** Use `Map` instead of an object. When is `Map` better? (non-string keys, insertion order, no prototype keys, `.size`.)

## 4. Remove duplicates
- 🟢 **Remove duplicates from an array** — `[1,2,2,3,1]` → `[1,2,3]` (keep first occurrence).
- 🟢 **Remove duplicates from a string** — `"programming"` → `"progamin"`.
- 🟡 **Remove duplicates from a sorted array in place** — return the new length. *(two pointers)*
- 🟡 **Remove duplicates from an array of objects by key** — unique users by `id`.
- 🟡 **Remove adjacent duplicates** — `"abbaca"` → `"ca"`. *(stack)*
- 🔴 **Remove duplicate letters so the result is the smallest lexicographically** — `"cbacdcbc"` → `"acdb"`. *(monotonic stack)*
- **Follow-up:** Solve it 3 ways: `Set`, `filter + indexOf`, and a `Map`/object. Compare complexity.

## 5. Find duplicate numbers
- 🟢 **Contains duplicate** — return `true` if any value appears twice.
- 🟢 **Find all duplicates in an array** — `[1,2,3,2,4,1]` → `[1,2]`.
- 🟡 **Find the duplicate in `n+1` numbers from `1..n`** (one duplicate, O(1) space, don't modify the array). *(Floyd's cycle detection)*
- 🟡 **Find all duplicates where values are in `1..n`** — O(n) time, O(1) space. *Hint:* mark visited by negating the value at `index = |num| - 1`.
- 🟡 **Contains duplicate within distance k** — same value at indices `i` and `j` with `|i-j| ≤ k`. *(sliding window + Set)*
- 🔴 **Contains nearby almost duplicate** — `|nums[i]-nums[j]| ≤ t` and `|i-j| ≤ k`. *(bucketing)*

## 6. Find max / min
- 🟢 **Find the max and min in one pass.**
- 🟢 **Find max/min of an array of objects by a property** — oldest and youngest user.
- 🟡 **Find the max and min using the fewest comparisons** (pair comparison trick, ~3n/2).
- 🟡 **Maximum difference between two elements where the larger comes after the smaller** — `[7,1,5,3,6,4]` → `5`.
- 🔴 **Sliding window maximum** — max of each window of size `k`. *(monotonic deque)*
- **Follow-up:** Why can `Math.max(...arr)` crash on very large arrays? (argument limit / stack size.)

## 7. Find second largest
- 🟢 **Second largest in one pass** — `[3,7,1,9,9]` → `7`.
- 🟡 **Third maximum number** — if it doesn't exist return the max. *(Set + three variables)*
- 🟡 **Kth largest element** — `[3,2,1,5,6,4]`, `k=2` → `5`. *(sort, min-heap, quickselect)*
- 🔴 **Kth largest in a stream** — class with `add(val)` returning the current kth largest. *(min-heap of size k)*
- **Follow-up:** Handle duplicates, arrays with fewer than 2 elements, and all-equal arrays.

## 8. Count vowels
- 🟢 **Count vowels in a string** — case-insensitive.
- 🟢 **Count vowels and consonants separately.**
- 🟡 **Reverse only the vowels** — `"hello"` → `"holle"`. *(two pointers)*
- 🟡 **Count vowel substrings** — substrings containing all 5 vowels. `"aeiouu"` → `2`.
- 🔴 **Longest substring with vowels occurring an even number of times** — *(bitmask + prefix map)*
- **Follow-up:** Do it with a regex and without one. Which is faster?

## 9. Reverse an array
- 🟢 **Reverse in place** — no extra array.
- 🟢 **Reverse without mutating** — return a new array.
- 🟡 **Rotate an array by k steps** — `[1,2,3,4,5,6,7]`, `k=3` → `[5,6,7,1,2,3,4]`. *(three-reverse trick, O(1) space)*
- 🟡 **Reverse a subarray between indices `i` and `j`.**
- 🟡 **Reverse a linked list-style array recursively.**
- 🔴 **Rotate a matrix 90° in place** — transpose then reverse each row.
- **Follow-up:** `arr.reverse()` mutates. Which array methods mutate and which don't?

## 10. Sum of array
- 🟢 **Sum of numbers** with a loop and with `reduce`.
- 🟢 **Sum of only even numbers / only positive numbers.**
- 🟡 **Sum of a nested array** — `[1,[2,[3,4]],5]` → `15`.
- 🟡 **Running sum (prefix sum)** — `[1,2,3,4]` → `[1,3,6,10]`.
- 🟡 **Pivot index** — index where left sum equals right sum. `[1,7,3,6,5,6]` → `3`.
- 🔴 **Subarray sum equals k** — count of subarrays with sum `k`. *(prefix sum + hash map)*
- **Follow-up:** Floating-point issue: `0.1 + 0.2`. How do you handle money sums?

---

# LEVEL 2: Core Patterns

## 11. Two Sum
- 🟢 **Two sum (unsorted)** — return indices. `[2,7,11,15]`, `9` → `[0,1]`. *(hash map, O(n))*
- 🟢 **Two sum on a sorted array** — *(two pointers, O(1) space)*
- 🟡 **Two sum — return all unique pairs** that add up to target.
- 🟡 **Three sum** — all unique triplets that sum to 0. *(sort + two pointers, skip duplicates)*
- 🟡 **Four sum** — all unique quadruplets that sum to target.
- 🟡 **Two sum with a data-structure design** — class with `add(n)` and `find(sum)`.
- 🔴 **Subarray sum divisible by k** / **Continuous subarray sum** — *(prefix sum modulo)*
- **Follow-up:** Why is brute force O(n²)? What do you trade for O(n)? (space)

## 12. Flatten nested array
- 🟢 **Flatten one level** — `[1,[2,3],4]` → `[1,2,3,4]`.
- 🟡 **Flatten completely (recursive)** — `[1,[2,[3,[4]]]]` → `[1,2,3,4]`.
- 🟡 **Flatten to depth `n`** — implement `flat(arr, depth)` yourself.
- 🟡 **Flatten iteratively using a stack** (no recursion, avoids call-stack overflow).
- 🟡 **Nested list iterator** — class with `next()` and `hasNext()` over a nested array.
- 🔴 **Flatten with cycles / mixed values** — handle arrays, `null`, `undefined`, and circular references.
- **Follow-up:** Compare recursion, `reduce + concat`, and `toString().split(",")` hacks. Which breaks and when?

## 13. Group objects by property
- 🟢 **Group by a key** — `groupBy(users, "city")` → `{ Delhi: [...], Mumbai: [...] }`.
- 🟡 **Group by a function** — `groupBy(nums, n => n % 2 ? "odd" : "even")`.
- 🟡 **Group and count** — `{ Delhi: 3, Mumbai: 2 }`.
- 🟡 **Group by multiple keys** — city then age bracket (nested grouping).
- 🟡 **Group anagrams** — `["eat","tea","tan","ate","nat","bat"]`.
- 🔴 **Group a flat list into a tree** — items with `id` and `parentId` become nested `children`. *(very common in frontend: menus, comments, folders)*
- **Follow-up:** Implement `Object.groupBy` / lodash `groupBy` yourself. Use `Map` vs object, and discuss the `__proto__` key risk.

## 14. Sort array of objects
- 🟢 **Sort numbers correctly** — why does `[10,9,1].sort()` give `[1,10,9]`?
- 🟢 **Sort objects by one field** — by `age` ascending.
- 🟡 **Sort by multiple fields** — age desc, then name asc.
- 🟡 **Sort strings case-insensitively / with locale** — `localeCompare`, accents, numeric option.
- 🟡 **Stable sort** — prove or show that equal elements keep their order.
- 🟡 **Custom sort order** — sort tasks by priority `["high","medium","low"]`.
- 🔴 **Implement merge sort and quick sort** — compare their complexity and stability.
- **Follow-up:** Sort a table by clicked column, toggling asc/desc, and handle `null`/`undefined` values last.

## 15. Find missing number
- 🟢 **Missing number in `0..n`** — *(sum formula, XOR, or Set)*
- 🟡 **Missing number in a sorted array** — O(log n). *(binary search)*
- 🟡 **Find the missing and duplicate number together** — `[1,2,2,4]` → `{dup:2, missing:3}`.
- 🟡 **Missing ranges** — `[0,1,3,50,75]`, range `0..99` → `["2","4->49","51->74","76->99"]`.
- 🔴 **First missing positive** — `[3,4,-1,1]` → `2`. O(n) time, O(1) space. *(cyclic sort)*
- **Follow-up:** Overflow concerns with the sum formula; why XOR avoids it.

## 16. Intersection of arrays
- 🟢 **Intersection (unique values)** — `[1,2,2,1]`, `[2,2]` → `[2]`.
- 🟡 **Intersection with duplicates** — result `[2,2]`. *(frequency map)*
- 🟡 **Intersection of sorted arrays** — *(two pointers, O(1) extra space)*
- 🟡 **Union, difference and symmetric difference** of two arrays.
- 🟡 **Intersection of k arrays** — values present in all of them.
- 🔴 **Intersection of two arrays of objects by deep equality / key.**
- **Follow-up:** When one array is tiny and the other is huge, which should go in the Set?

## 17. Merge two arrays
- 🟢 **Merge two arrays** with spread, `concat`, and a loop.
- 🟡 **Merge two sorted arrays into one sorted array** — *(two pointers)*
- 🟡 **Merge sorted array in place** — `nums1` has trailing space for `nums2`. Fill from the back.
- 🟡 **Merge two arrays without duplicates.**
- 🟡 **Merge arrays of objects by `id`** — later value overrides, or merge fields.
- 🔴 **Merge k sorted arrays** — *(min-heap or divide and conquer)*
- 🔴 **Median of two sorted arrays** — O(log(min(m,n))). *(binary search on partition)*

## 18. Frequency counter
- 🟢 **Frequency of elements in an array** — `[1,1,2,3,3,3]` → `{1:2,2:1,3:3}`.
- 🟡 **Top K frequent elements** — `[1,1,1,2,2,3]`, `k=2` → `[1,2]`. *(bucket sort)*
- 🟡 **Majority element** — appears more than `n/2` times. *(Boyer–Moore voting, O(1) space)*
- 🟡 **Find the element that appears once; others appear twice** — *(XOR)*
- 🟡 **Sort array by increasing frequency** — ties broken by value descending.
- 🔴 **Least number of unique integers after removing k elements.**
- **Follow-up:** Compare object vs `Map` as a counter; mention `Object.create(null)`.

## 19. First non-repeating character
- 🟢 **First non-repeating character index** — `"leetcode"` → `0`, `"aabb"` → `-1`.
- 🟡 **First non-repeating char in a stream** — after each character, return the first unique so far. *(queue + counts)*
- 🟡 **Find the first repeating character.**
- 🟡 **Find the only unique char in a string** where all others repeat.
- 🔴 **Longest substring with at most k distinct characters.** *(sliding window)*
- **Follow-up:** Do it in a single pass with one `Map` that stores the first index.

## 20. Anagram
- 🟢 **Valid anagram** — `"listen"`, `"silent"` → `true`. *(sort or frequency)*
- 🟡 **Group anagrams** — sort-key approach and count-key approach (O(n·k)).
- 🟡 **Find all anagrams of `p` in `s`** — `s="cbaebabacd"`, `p="abc"` → `[0,6]`. *(fixed sliding window)*
- 🟡 **Permutation in string** — does `s2` contain a permutation of `s1`?
- 🔴 **Minimum steps to make two strings anagrams** — count replacements needed.
- 🔴 **Minimum window substring** — smallest window in `s` containing all chars of `t`. `"ADOBECODEBANC"`, `"ABC"` → `"BANC"`.

---

# LEVEL 3: Frontend-Specific + Advanced

## 21. Debounce
- 🟡 **Basic debounce** — delay `fn` until `wait` ms after the last call.
  - Must preserve `this` and arguments.
- 🟡 **Debounce with `leading` option** — call at the start of the burst instead of the end.
- 🟡 **Debounce with `cancel()` and `flush()`.**
- 🔴 **Debounce with `maxWait`** — guarantee a call at least every `maxWait` ms even if events keep coming.
- 🔴 **Debounced async search** — ignore stale responses (race conditions). Use a request id or `AbortController`.
- **Real use cases:** search box, window resize, autosave.
- **Follow-up:** Write unit tests using fake timers. What changes in a React `useEffect`? (`useDebounce` hook, cleanup.)

## 22. Throttle
- 🟡 **Basic throttle** — run `fn` at most once per `wait` ms.
- 🟡 **Throttle with leading and trailing options.**
- 🟡 **Throttle using `requestAnimationFrame`** for scroll/animation handlers.
- 🔴 **Throttle that always runs the last call** — don't lose the final event.
- 🔴 **Rate limiter** — allow at most `N` calls per time window. Then implement token bucket and sliding window variants.
- **Follow-up:** Explain debounce vs throttle with an example for each (typing vs scrolling).

## 23. Implement Promise.all (and friends)
- 🟡 **Promise.all** — resolves with an array in input order; rejects on the first rejection. Handle non-promise values and empty input.
- 🟡 **Promise.allSettled** — return `{status, value|reason}` for each.
- 🟡 **Promise.race** and **Promise.any** (AggregateError when all fail).
- 🟡 **Promise.resolve / reject** polyfills; **`promisify`** a callback function.
- 🔴 **Promise pool with concurrency limit** — run at most `n` tasks at a time. `pool(tasks, 3)`.
- 🔴 **Run promises sequentially** (`reduce` chain) and **retry each with timeout**.
- 🔴 **Implement a simple Promise from scratch** — `then`, `catch`, `finally`, chaining, async resolution.
- **Follow-up:** What is the order of `console.log` across sync code, microtasks (`then`) and macrotasks (`setTimeout`)?

## 24. Flatten nested object
- 🟡 **Flatten an object with dot keys** — `{a:{b:1,c:{d:2}}}` → `{"a.b":1,"a.c.d":2}`.
- 🟡 **Unflatten** — reverse the above.
- 🟡 **Handle arrays** — `{a:[1,{b:2}]}` → `{"a.0":1,"a.1.b":2}`.
- 🟡 **Get / set a nested value by path** — `get(obj, "a.b[0].c", default)` (lodash `get`/`set`).
- 🔴 **Deep clone** with dates, maps, sets, and circular references.
- 🔴 **Deep equal** of two objects. Then **deep diff** returning changed paths.
- 🔴 **Deep merge** objects (arrays replaced vs concatenated).
- **Follow-up:** Edge cases: `null`, `Date`, empty object, keys that already contain dots, prototype pollution (`__proto__`).

## 25. LRU-style cache concept
- 🟡 **Simple cache with TTL** — `set(key, val, ttl)`, `get(key)` expires old entries.
- 🟡 **Memoize a function** — cache results by arguments (handle multiple args via `JSON.stringify` or a key function).
- 🔴 **LRU Cache** — `get(key)` and `put(key, value)` both O(1), evicting the least recently used when full.
  - *Hint:* `Map` keeps insertion order. Delete and re-set a key to mark it as recently used. Or use a hash map plus a doubly linked list.
- 🔴 **LFU Cache** — evict the least frequently used (ties by least recent).
- 🔴 **Memoize with LRU size limit and `clear()`**, plus async memoization that caches in-flight promises.
- **Follow-up:** Where do frontends use caches? (API responses, React Query/SWR, image caches, selectors.) How would you invalidate?

## 26. Sliding window
- 🟡 **Maximum sum of subarray of size k** — `[2,1,5,1,3,2]`, `k=3` → `9`.
- 🟡 **Smallest subarray with sum ≥ target** — variable window.
- 🟡 **Maximum average subarray** of length k.
- 🟡 **Longest subarray with sum ≤ k** (positive numbers).
- 🟡 **Longest repeating character replacement** — `"AABABBA"`, `k=1` → `4`.
- 🔴 **Sliding window maximum** — monotonic deque, O(n).
- 🔴 **Minimum window substring** — see anagram section.
- 🔴 **Fruits into baskets / longest subarray with at most 2 distinct values.**
- **Follow-up:** How do you decide between a fixed and a variable window? What are the "expand" and "shrink" conditions?

## 27. Longest substring without repeating characters
- 🟡 **Longest substring without repeating characters** — `"abcabcbb"` → `3`. *(sliding window + Map of last index)*
- 🟡 **Return the substring itself**, not just the length.
- 🟡 **Longest substring with at most k distinct characters.**
- 🟡 **Longest substring with at most two distinct characters.**
- 🔴 **Longest substring with at least k repeating characters** — `"aaabb"`, `k=3` → `3`. *(divide and conquer / sliding window)*
- 🔴 **Longest repeating substring** and **longest common substring** of two strings. *(DP / binary search + hash)*
- **Follow-up:** What changes if the string contains Unicode? Walk through your window dry-run on `"abba"` (classic bug: `left` moving backwards).

## 28. Merge intervals
- 🟡 **Merge overlapping intervals** — `[[1,3],[2,6],[8,10],[15,18]]` → `[[1,6],[8,10],[15,18]]`. *(sort by start)*
- 🟡 **Insert interval** into a sorted non-overlapping list.
- 🟡 **Can attend all meetings?** — any overlap means `false`.
- 🟡 **Interval intersection** of two sorted interval lists.
- 🔴 **Meeting rooms II** — minimum rooms needed. *(sort + min-heap or sweep line)*
- 🔴 **Non-overlapping intervals** — minimum removals to avoid overlaps. *(greedy by end time)*
- 🔴 **Employee free time** and **Skyline problem.**
- **Follow-up:** Frontend angle: merge overlapping calendar events and lay them out in columns.

## 29. Pagination logic
- 🟡 **Basic paginate** — `paginate(items, page, pageSize)` returns `{ data, page, totalPages, hasNext, hasPrev }`. Handle `page` out of range, empty list, and `pageSize` of 0.
- 🟡 **Page-number window** — show `1 … 4 5 [6] 7 8 … 20` (ellipsis logic). Write `getPageNumbers(current, total, siblings)`.
- 🟡 **Infinite scroll / "load more"** — append pages, avoid duplicate fetches, handle end of data.
- 🟡 **Cursor-based pagination** — explain vs offset pagination; implement a simple version.
- 🔴 **Pagination with search and sort** — reset to page 1 on filter change; keep state in the URL.
- 🔴 **Virtualized list window** — given `itemHeight`, `containerHeight`, `scrollTop`, `overscan`, compute `startIndex` and `endIndex`.
- **Follow-up:** Offset vs cursor trade-offs (stability under inserts, performance on large tables).

## 30. API retry logic
- 🟡 **Retry a failing async function up to N times.**
- 🟡 **Retry with delay** — fixed delay between attempts.
- 🟡 **Exponential backoff** — `delay = base * 2^attempt`, with a max cap.
- 🔴 **Backoff with jitter** — add randomness to avoid thundering herd.
- 🔴 **Retry only on retryable errors** — network errors, `429`, `5xx`; not `400/401/404`. Respect the `Retry-After` header.
- 🔴 **Retry with timeout and `AbortController`** — cancel in-flight requests; stop retrying when aborted.
- 🔴 **Request deduplication** — if the same request is in flight, return the same promise.
- 🔴 **Circuit breaker** — stop calling a failing API for a cooldown period.
- **Follow-up:** How would you test this? (fake timers, mocked `fetch`.) Which operations are safe to retry (idempotent GET vs POST)?

---

# Bonus: Mixed Challenge Round (interview-style)
1. **Autocomplete search:** debounce the input, cancel stale requests, cache previous queries (LRU), and highlight matches. *(combines 21, 25, 3)*
2. **Batch API caller:** given 100 URLs, fetch with concurrency 5, retry failures twice with backoff, and return results in input order. *(23, 30)*
3. **Nested comments renderer:** flat list with `parentId` → tree → flattened visible list with depth for indentation. *(13, 12)*
4. **Event calendar layout:** merge overlapping events and assign columns. *(28)*
5. **Search-as-you-type word counter:** a stream of characters; keep the top 3 most frequent words. *(18, 7)*

---

# Study Plan (4 weeks)
| Week | Focus | Goal |
|------|-------|------|
| 1 | Level 1: all topics, 🟢 and 🟡 | Fast, bug-free basics |
| 2 | Level 2: all topics | Patterns: hash map, two pointers, sorting |
| 3 | Level 3: debounce, throttle, Promise.*, flatten, deep clone | Frontend machine-coding round |
| 4 | Level 3: LRU, sliding window, intervals, pagination, retry; 🔴 questions; mock rounds | Speed + communication |

# Checklist Before You Say "Done"
- [ ] Empty input, single element, all-duplicates
- [ ] Negative numbers, zeros, `null`/`undefined`
- [ ] Large input (what is the complexity?)
- [ ] Mutation: did I change the input accidentally?
- [ ] Time and space complexity stated
- [ ] Follow-up ready (how would this change in React / with async / at scale?)
