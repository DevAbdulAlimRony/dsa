//It's important to have a precise vocabulary to talk about how our code performs. Useful for discussing trade-offs between different approaches. When your code shows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications. Consider a function adding numbers 1 to n
function addNumber(n){
    total = 0;
    for(i=1; i<=n ; i++){
        total += i;
    }
    return total;
}

function addNumber2(n){
    return n * (n + 1) / 2;
}
//What does better mean?- Faster? Less Memory Intensive? More Readable? Let's Check time-
let t1 = performance.now();
addNumber(1000000000);
let t2 = performance.now();
console.log(`Time Needed: ${(t2 - t1) / 1000} seconds`);

//The Problem with Time: Different Machines will record different times, The same machine will record different times, For fast algorithms- speed measurements may not be precise enough. Rather than checking like that, we can check time using Big O Notation. Rather than counting seconds, which are so variable...Let's count the number of simple operations the computer has to perform. So, the time will be determined by the number of operations so that we can use that rather than the exact times.

//1. addNumber2(): It is performing three operations - multiplication, addition and division.
//2. addNumber(): The operation will be as the value of i, because of the loop. We have addition and assignment(=) inside the loop. If n is 5, then 5 times of addition and assignment operation. On the other hand, total = 0 and i = 1 another two static operation. Here increase the complexity of counting. Here comes Big O. Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

//An algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases. f(n) could be,
//1. linear (f(n) = n): As scales the input, runtime scales.
//2. quadratic (f(n) = n^2): Where n grows the run time square is related to the square event.
//3. constant (f(n) = 1): No impact if no grows.
//4. Something entirely different.
// Worst Case Scenario/Upper Bound for runtime

//fun2 always 3 operation- O(1), fun1 has many operations- O(n).
//Number of operations is bounded by a multiple of n for an example 10 for loops one after another- O(n). O(n) operation inside of an O(n) operation like a nested loop- O(n^2)

//Simplifying Big O Notation: When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions. These rules of thumb are consequences of the definition of big O notation.
    //1. Constants Don't Matter. O(2n)- simplified to O(n). O(500) simplified to O(1). O(13O^2) simplified to O^2.
    //2. Smaller Terms don't matter. O(n + 10) simplified to O(n). O(1000n + 50) simplified to O(n). O(n^2 + 5n + 8) simplified to O(n^2).

//There are some rules that won't always work, but a helpful straight point:
    //1. Arithmetic Operations are constant
    //2. Variable assignments is constant.
    //3. Accessing elements in an array by index or object by key is constant.
    //4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

//More Examples
function logAtLeast5(n){
    for(var i = 0; i <= Math.max(5, n); i++){
        console.log(i);
    }
} //If n is greater than 5, it has impact; if n grows operation grows that is- O(n)
function logAtMost5(n){
    for(var i = 0; i <= Math.min(5, n); i++){
        console.log(i);
    }
} //If n is greater than 5, it always 5; if n grows operation doesn't grow that is- O(1)


//We can also use big O notation to analyze space complexity- how much additional memory do we need to allocate in order to run the code in our algorithm.
    //1. Most primitive (booleans, numbers, undefined, null) are constant space.
    //2. Strings require O(n) space where n is the length of the string.
    //3. Reference types are generally O(n), where n is the length for arrays or the number of keys for objects.
function sum(num) {
    let total = 0;
    for(let i = 0; i< num.length; i++){
        total += num[i];
    }
    return total;
} //here, total = 0 and i = 0 is constant, doesn't matter we are adding elements into the array- it does matter for the time complexity. So, space complexity is O(1).

function double(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]);
    }
    return newArr;
} //New Array size increase if old array increase- O(n)

//Big O of Objects: Insertion- O(1), Removal- O(1), Searching- O(N), Access- O(1).
//Gig O Object Methods: object.keys - O(N), object.values - O(N), object.entries- O(N), hasOwnProperty- O(1)

//Big O of Array: Insertion- It Depends, Removal- It Depends, Searching- O(N), Access- O(1). If we insert into or remove from beginning, all index should be changed. So, depends on where we are inserting or removing.
//Big O of Array Operations: push- O(1), pop- O(1), shift- O(N), unshift- O(N), concat- O(N), slice- O(N), splice- O(N), sort- O(N * log N), forEach/map/filter/reduce- O(N).

