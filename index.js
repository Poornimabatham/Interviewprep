function sumArray(arr) {
    let total = 0; // Variable captured by closure
    function helper(index) {
      if (index >= arr.length) {
        return total; // Base case for recursion
      }
      total += arr[index]; // Closure retains 'total'
      return helper(index + 1); // Recursive call
    }
    return helper(0);
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  