function list(...args) {
    return args;
  }
  
  function addArguments(arg1, arg2) {
    return arg1 + arg2;
  }
  
//   console.log(list(1, 2, 3)); // [1, 2, 3]
  
//   console.log(addArguments(1, 2)); // 3
  
  // Create a function with a preset leading argument
  const leadingThirtySevenList = list.bind(null, 37,98);
  
  // Create a function with a preset first argument.
  const addThirtySeven = addArguments.bind(null, 37);
  
  console.log(leadingThirtySevenList()); // [37]
  console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
  console.log(addThirtySeven(5)); // 42
  console.log(addThirtySeven(5, 10)); // 42
  // (the last argument 10 is ignored)
  




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
  


  const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // Expected output: 42
  