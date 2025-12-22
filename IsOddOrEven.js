var number = 10
function isOddOrEven(num) {
   if(num % 2 === 0) {
       return "Even";
   } else {
       return "Odd";
   }

}

console.log("The given number is " + isOddOrEven(10));