for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output:
// 4
// 4
// 4
// Explanation: The var keyword is function-scoped, so the variable 'i' is shared across all iterations of the loop. By the time the setTimeout callbacks execute, the loop has completed and 'i' has a value of 4.


for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log(j), 100);
} 