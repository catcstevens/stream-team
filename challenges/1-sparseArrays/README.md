# Sparse Arrays

This challenge is from Hackerrank and can be [found here](https://www.hackerrank.com/challenges/sparse-arrays/problem).

## Description

For this challenge, you need to implement the matchingStrings function, which has the following signature:

```javascript
/**
 *  @params
 *      strings: an array of strings
 *      queries: an array of strings
 *  @returns 
 *      Array of numbers 
 *      of size equal to the size of queries 
 *  @example
 *      matchingStrings(['a','b','a'], ['a','c']) 
 *      => [2,0]
 */
function matchingStrings(strings, queries)
```

This function should return a count for each query string in `queries` that indicates how many times that query string occurs in `strings`.