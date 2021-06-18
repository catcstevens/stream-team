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

## Discussion

For this challenge, we can create an index with a count of all of the string values in linear time, and use that index to do lookups for each query. You might think that the complexity of object property lookup is constant (O(1)), there are a lot of interesting things about the way that objects are actually implemented and used in the V8 engine that is used by node.js. For a large number of properties, the complexity tends to be O(logn).

This means the complexity of the overall solution here is O(nlogn).

**`forEach` vs `for` loops**

In the stream, we have a little discussion of `forEach` vs `for` loops for performance. There is [a nice write up about it here](https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/), with a repo that you can use to test it out yourself.