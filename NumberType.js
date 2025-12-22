function checkNumberType(num) {
   if(num > 0) {
       return "Positive";
   } else if(num < 0) {
       return "Negative";
   } else {
       return "Zero";
   }
}

console.log(checkNumberType(10));   // Output: Positive
console.log(checkNumberType(-5));  // Output: Negative
console.log(checkNumberType(0));    // Output: Zero 