// // console.log('Hello => number 1');
// // process.nextTick(() => {
// //     console.log('Running at next tick');
// //   });
// // setImmediate(() => {
// //   console.log('Running before the timeout');
// // });

// // setTimeout(() => {
// //   console.log('The timeout running last');
// // }, 0);




// // // let count = 0; 

// // // const intervalId = setInterval(() => { 
// // // console.log('HELLO GEEK'); 
// // // count++; 

// // // if (count === 5) { 
// // // 	console.log('Clearing the interval id after 5 executions'); 
// // // 	clearInterval(intervalId); 
// // // } 
// // // }, 1000); 
// // // console.log('Interval ID: ', intervalId);




// // let count = 0; 
  
// // // The arguments passed after the  
// // // delay (in milliseconds) will 
// // // be received in our function  
// // // inside the setInterval() method 
// // const intervalId = setInterval( 
// //   (a, b) => { 
// //     console.log(`The sum of ${a} and ${b} is ${a + b} and count is ${count}`); 
// //     count++; 
  
// //     if (count === 5) { 
// //       console.log("Clearing the interval id after 5 executions"); 
// //       clearInterval(intervalId); 
// //     } 
// //   }, 
// //   1000, 
// //   5, 
// // //   10 
// // // ); 

// // let text = "Blue has a blue house";
// // for (let i = 0; i < text.length; i++) {
// //   console.log(text[i]==="Blue");

// // }
// // let position = text.search("Blue");
// // console.log(position);


// // let text1 = "W3Schools";
// // let character = text1.at(0);
// // let text2 = "HELLO WORLD";
// // let letter = text2.charAt(0);
// // console.log(character,"text",letter);

// // let items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'g'];

// // let uniqueItems = new Set();

// // let duplicateFound = false;

// // for (let item of items) {
// //   if (uniqueItems.has(item)) {
// //     console.log("Duplicate item: " + item);
// //     duplicateFound = true;
// //     break; // Exit the loop
// //   }
// //   uniqueItems.add(item);
// // }

// // if (!duplicateFound) {
// //   console.log("No duplicate items found");
// // }

// // console.log("Unique items:", uniqueItems);


// //  // Javascript program to find sum of first 
// // // n natural numbers. 
// // function findSum(n) { 
// // 	let sum = 0; 
// // 	for (let i = 1; i <= n; i++) 
// // 		sum = sum + i; 
// // 	return sum; 
// // } 

// // // Driver code 
// // const n = 5; 
// // console.log(findSum(n));




// // Define function to check last digit of number
// function haveSameLastDigit(num1, num2) {

//   // Getting last digit using % operator
//   const lastDigit1 = num1 % 10;
//   const lastDigit2 = num2 % 10;

//   // Return if last digits are same or not
//   return lastDigit1 === lastDigit2;
// }

// const number1 = 123;
// const number2 = 456;

// // Calling function with arguements
// const result = haveSameLastDigit(number1, number2);

// // Giving output
// console.log(result);


// function myFunction(...kids) {
//   console.log("The youngest child is " + kids.length);
//   let i =0
//    while(i < kids.length){
//     console.log(kids[i]);
//     i++;
   
//    }
// }

// myFunction("Emil", "Tobias", "Linus");



// function myFunction(kid) {
//   console.log("His first name is " + kid.fname); // Corrected line
//   console.log("His last name is " + kid.lname);
// }

// let kid = { fname: "John", lname: "Doe" };
// myFunction(kid);


// // let n = 5
// // for (let i = 1; i < n; i++) {
// //   let row=""
// //   for (let j = 1; j <= i; j++) {
// //     row+="x"
// //   }
// //   console.log();

// // }



// // function numberTrianglePatternModified(rows) {
// //   for (let i =1 ; i <= rows; i++) {
// //     let row = "";
// //     for (let j = 1; j <= i; j++) {
// //       row += 'x' + " "; // Add the row number and a space
// //     }
// //     console.log(row);
// //   }
// // }

// // // Example usage:
// // numberTrianglePatternModified(5);



// function numberTrianglePatternModified(rows) {
//   for (let i =1 ; i <= rows; i++) {
//       row += 'x' + " "; // Add the row number and a space
//     for (let j = 1; j <= i; j++) {
//     }
//     console.log(row);
//   }
// }

// // Example usage:
// numberTrianglePatternModified(5);

// // User-defined function to find intersection
// function findIntersection(array1, array2) {
//   const result = [];
  
//   // Loop through the first array
//   for (let i = 0; i < array1.length; i++) {
//     // Check if the element exists in array2 and not already added to result
//     if (array2.includes(array1[i]) && !result.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
  
//   return result;
// }

// // Example usage
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// const intersection = findIntersection(arr1, arr2);
// console.log("Intersection:", intersection); // Output: [3, 4, 5]
// User-defined function to find intersection
function findIntersection(array1, array2) {
    const result = [];
    
    // Loop through the first array
    for (let i = 0; i < array1.length; i++) {
      // Check if the element exists in array2 and not already added to result
      if (!array2.includes(array1[i]) && !result.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
    
    return result;
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5,6,7,8,9,10];
  const arr2 = [3, 4, 5, 6, 7];
  
  const intersection = findIntersection(arr1, arr2);
  console.log("Intersection:", intersection); // Output: [3, 4, 5]
  
  
  
  