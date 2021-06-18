# Missing Numbers

This challenge is from HackerRank and can be [found here](https://www.hackerrank.com/challenges/missing-numbers/problem).

## Description

For this challenge, you are given two arrays of integers as arguments to a function called `missingNumbers`. The function should return elements in the second array (the original array) that are missing in the first array (the target array).

An element is considered missing if:
 - it is in the original (brr) and not in the target (arr)
 - it is in both arrays, but in unequal numbers
 
Missing elements should be returned as a set of integers (no repeats) in ascending order.

Here is the function signature:

```javascript
/**
 * @params
 * 	arr: integer array
 * 	brr: integer array 
 * @returns
 * 	integer set in ascending order
 * @example
 * 	missingNumbers([3,4,5,2,5], [8,3,1,4,5,2])
 *	=> [1,5,8]
 */ 
 function missingNumbers(arr, brr)
```

## Discussion
The most straightforward ways to solve this problem involve nested loops, probably using array methods. In order to optimise, we could use optimised sorting and a single loop to get a O(nlogn) solution.

The basic idea is that if we sort the 2 input arrays, we can walk through them once, and determine what is missing.

**1. Sort the arrays**

We can use the built-in sort, which when run with node.js uses a nicely optimised sorting algorithm that has O(nlogn) complexity in a worst case.

If we sort both arrays, we still have O(nlogn) complexity, because the sorts will be successive steps (no nesting), and we just add them.

**2. One big loop**

Once the arrays are sorted, we can walk through them - we walk through the original list (brr), and compare it to what we see in the target list (arr). Since they are sorted, we can just skip over elements in the target that aren't in the original, and easily identify elements in the original that are missing in the target - and we can do it with a single loop iteration. 

That means this second step is linear - in a worst case, we look at every element in both lists once for this step.