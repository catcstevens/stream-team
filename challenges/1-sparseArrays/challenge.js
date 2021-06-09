/**
 * Solution 
 * 
 * The solution here creates an index first, then uses
 * that index to look up each query in queries in the
 * matchingStrings function.
 * 
 */

// createIndex
// Returns an object with each string in strings as a key and 
// the number of times that string occurs in strings as the value
function createIndex(strings) {
    // key: string
    // value: count of string in strings
    let index = {};
    for(let string of strings) {
        index[string] ? index[string]++ : (index[string] = 1)
    }
    return index;
}
/**
 * 
 * Complete the 'matchingStrings' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 * @param {Array[string]} strings 
 * @param {Array[string]} queries 
 * @returns {Array[number]}
 * 
 * @example
 * matchingStrings([aba, baba, aba, xzxb], [aba, xzxb, ab])
 * => [2, 1, 0]
 */
function matchingStrings(strings, queries) {
    // Return an array of number values in result
    let result = [];

    // 1. create an index (object with each string and the number of times it occurs) - O(n)
    const index = createIndex(strings);
    // 2. for each query in queries - check the index for the query 
    //    Using a forEach here just for demonstration - could also use another for-of loop
    queries.forEach((query) => {
        const queryCount = index[query];
        queryCount ? result.push(queryCount) : result.push(0);
    });
    return result;
}

// Example for testing
const strings1 = ['a', 'b', 'ab', 'a'];
const queries1 = ['a', 'b', 'c'];
console.log(matchingStrings(strings1,queries1));