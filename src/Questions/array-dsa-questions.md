# Array DSA Practice Set (Easy → Hard)
For frontend developer interviews. Solve in JavaScript. Before coding, say the time and space complexity out loud.

**Patterns to know:** two pointers, sliding window, prefix sum, hash map / set, sorting + greedy, binary search, Kadane's algorithm, monotonic stack, intervals, in-place swaps, cyclic sort, DP on arrays.

---

## LEVEL 1: EASY (warm-up, 15 min each)

1. **Find the max and min** in an array without `Math.max`/`Math.min`.
2. **Second largest element** — `[3,7,1,9,9]` → `7`. Single pass.
3. **Reverse an array in place** — no extra array.
4. **Remove duplicates from a sorted array** in place and return the new length. *(two pointers)*
5. **Move all zeros to the end** — `[0,1,0,3,12]` → `[1,3,12,0,0]`, keeping the order of non-zeros.
6. **Two sum** — Return indices of two numbers that add up to a target. `[2,7,11,15]`, `9` → `[0,1]`. *(hash map)*
7. **Contains duplicate** — Return `true` if any value appears twice. *(Set)*
8. **Check if array is sorted** (and rotated, as a follow-up).
9. **Rotate an array by k steps** — `[1,2,3,4,5,6,7]`, `k=3` → `[5,6,7,1,2,3,4]`. Try the 3-reverse trick for O(1) space.
10. **Missing number** — Array has `n` distinct numbers from `0..n`. Find the missing one. *(sum or XOR)*
11. **Single number** — Every element appears twice except one. Find it. *(XOR)*
12. **Intersection of two arrays** — `[1,2,2,1]`, `[2,2]` → `[2,2]` (or unique `[2]`).
13. **Merge two sorted arrays** into one sorted array. *(two pointers)*
14. **Best time to buy and sell stock** — One transaction, maximize profit. `[7,1,5,3,6,4]` → `5`.
15. **Flatten a nested array** without `.flat()`. `[1,[2,[3,[4]]]]` → `[1,2,3,4]`. *(frontend favorite)*
16. **Remove falsy values** and **unique values** from an array without using `Set`.
17. **Chunk an array** — `chunk([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`.

---

## LEVEL 2: MEDIUM (core interview questions, 25–30 min each)

18. **Maximum subarray sum** — `[-2,1,-3,4,-1,2,1,-5,4]` → `6`. *(Kadane)*
19. **Product of array except self** — No division, O(n). `[1,2,3,4]` → `[24,12,8,6]`. *(prefix/suffix)*
20. **Three sum** — Find all unique triplets that sum to 0. *(sort + two pointers)*
21. **Container with most water** — Pick two bars to hold the most water. *(two pointers)*
22. **Sort colors (Dutch national flag)** — Sort an array of 0s, 1s and 2s in one pass, in place.
23. **Subarray sum equals k** — Count subarrays whose sum is `k`. *(prefix sum + hash map)*
24. **Longest consecutive sequence** — `[100,4,200,1,3,2]` → `4`. O(n). *(Set)*
25. **Top K frequent elements** — `[1,1,1,2,2,3]`, `k=2` → `[1,2]`. *(hash map + bucket sort / heap)*
26. **Merge intervals** — `[[1,3],[2,6],[8,10],[15,18]]` → `[[1,6],[8,10],[15,18]]`.
27. **Insert interval** into a sorted list of non-overlapping intervals.
28. **Search in a rotated sorted array** — O(log n). *(binary search)*
29. **Find first and last position of a target** in a sorted array. *(binary search)*
30. **Next permutation** — Rearrange into the next lexicographically greater order, in place.
31. **Rotate a matrix 90°** in place. Then do **spiral order traversal**.
32. **Set matrix zeroes** — If a cell is 0, set its whole row and column to 0, in O(1) extra space.
33. **Find the duplicate number** — `n+1` numbers in `1..n`, one duplicate, no modifying the array. *(Floyd's cycle detection)*
34. **Maximum product subarray** — Handle negatives and zeros. *(track max and min)*
35. **Subsets** and **Combination sum** — Generate all subsets / all combos that hit a target. *(backtracking)*
36. **Group an array of objects by a key** — `groupBy(users, "city")`. *(frontend favorite)*
37. **Implement `Array.prototype.map`, `filter`, `reduce`** from scratch (polyfills). *(asked in nearly every frontend round)*
38. **Sort an array of objects** by multiple fields (e.g. age desc, then name asc).
39. **Deep clone an array/object** with nested arrays, dates and cycles handled.
40. **Paginate an array** — `paginate(items, page, pageSize)` returning items plus total pages, with edge cases.

---

## LEVEL 3: HARD (stretch, 40+ min each)

41. **Trapping rain water** — `[0,1,0,2,1,0,1,3,2,1,2,1]` → `6`. *(two pointers or monotonic stack)*
42. **Largest rectangle in histogram** — `[2,1,5,6,2,3]` → `10`. *(monotonic stack)*
43. **Sliding window maximum** — Max of every window of size `k` in O(n). *(deque)*
44. **First missing positive** — `[3,4,-1,1]` → `2`. O(n) time, O(1) space. *(cyclic sort / index as hash)*
45. **Median of two sorted arrays** — O(log(min(m,n))). *(binary search on partitions)*
46. **Merge k sorted arrays** — Merge k sorted lists into one. *(min-heap or divide and conquer)*
47. **Maximum sum of a rectangle in a matrix** no larger than k, or **Maximal rectangle of 1s** in a binary matrix. *(histogram reuse)*
48. **Longest increasing subsequence** — O(n²) DP first, then O(n log n) with binary search.
49. **Jump game I and II** — Can you reach the end? Then, minimum jumps to reach it. *(greedy)*
50. **Candy / Gas station** — Classic greedy array problems with two-pass reasoning.
51. **Count of smaller numbers after self** — `[5,2,6,1]` → `[2,1,1,0]`. *(merge sort or BIT)*
52. **Maximum sum of 3 non-overlapping subarrays** of length k. *(DP + prefix sums)*
53. **Minimum number of platforms / Meeting rooms II** — Overlapping intervals count. *(sort + heap or sweep line)*
54. **Skyline problem** — Merge building outlines into a skyline. *(sweep line + heap)*
55. **Implement a virtual-list windowing helper** — Given item height, container height and scroll offset, return the visible index range with overscan. *(frontend-style, shows real-world thinking)*
56. **Diff two arrays of keyed items** — Return added, removed, moved and unchanged items, like a simplified React reconciliation.

---

## Suggested 3-week plan
- **Week 1:** Questions 1–17, then 18–19. Focus on two pointers, hash maps and prefix sums.
- **Week 2:** Questions 20–40. Focus on sliding window, binary search, intervals, and the polyfills and frontend utilities (36–40).
- **Week 3:** Questions 41–56. Do 1–2 per day. Re-solve anything you needed hints for.

## Interview habits
- Ask: Can the array be empty? Sorted? Contain negatives or duplicates? Can I mutate it?
- Say the brute force first, then improve it. Name the pattern you're using.
- Know which methods mutate (`sort`, `splice`, `reverse`, `push`, `pop`) and which don't (`slice`, `map`, `filter`, `concat`).
- `sort()` without a comparator sorts as strings. Always pass `(a, b) => a - b` for numbers.
- `shift()` and `unshift()` are O(n); avoid them in loops.
- Test with: empty array, one element, all same, negatives, already sorted, and large input.
