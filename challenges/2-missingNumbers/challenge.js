// Helper function that returns the count of a value 
// in a sorted array, starting at a given index
function countValue(sortedArr, val, start) {
	let index = start;
	let count = 0;
	while(index < sortedArr.length) {
		if(sortedArr[index] === val){
			count++; 
		}
		else {
			return count;
		}  
		index++;
	}
	return count;
}

/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

// Return elements in original array (brr) that are missing
// in the target array (arr)
//
// An element is considered missing if:
// - it is in the original (brr) and not in the target (arr)
// - it is in both arrays, but in unequal numbers
// 
// Missing elements should be returned as 
// a set of integers (no repeats) in ascending order 
function missingNumbers(arr, brr) {
	// Track the missing elements
	let missing = [];
	// sort arr and brr so we can loop through them once (O(n))
	// Using v8 engine sort will cost us O(nlogn)
	// Passing a sort callback so it sorts numbers correctly
	const sortedTarget = arr.sort((a,b) => a - b);
	const sortedOriginal = brr.sort((a,b) => a - b);

	let next = 0	// tracks our position in the sortedOriginal array
	let tIndex = 0;	// tracks our position in the sortedTarget array

	// loop through the original list (brr) and look for values missing from the target list (arr)
	// this loop is linear complexity
	while(next < sortedOriginal.length) {
		let ele = sortedOriginal[next];		// ele to check for missing

		// case 1. skip over target elements not in original
		while(ele > sortedTarget[tIndex]) {
			tIndex++;	
			if(tIndex === sortedTarget.length) {
				// we reached the end of the target array
				// the rest of sortedOriginal is missing - increment next and push to missing
				// until we reach the end of sortedOriginal
				missing.push(ele);
				next++;
				break;
			}
		}
		// case 2. track elements missing in target
		// if ele is less than sortedTarget[tIndex], it's missing
		// if we haven't already noted it is missing, add it to missing, then move to the next element
		if(ele < sortedTarget[tIndex] && ele !== missing[missing.length - 1]) {
			missing.push(ele);
			next++
		}
		// case 3: count elements that appear in both arrays
		else if (ele === sortedTarget[tIndex]){
			const oCount = countValue(sortedOriginal, ele, next);
			const tCount = countValue(sortedTarget, ele, tIndex);
			if(oCount !== tCount) {
				// counts unequal so ele is considered missing
				missing.push(ele);
			}
			// move past this element in both arrays using counts
			next += oCount;
			tIndex += tCount;
		}
	}
	return missing;
}

const a1= [2,3,3,3,5,6];
const b1= [0,1,2,2,3,7];

const a2 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const b2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]

console.log(missingNumbers(a1, b1));
console.log(missingNumbers(a2, b2));
