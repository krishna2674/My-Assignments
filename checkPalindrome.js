let originalWord = "madam";
let charArray = originalWord.split("");
let revrsedWord ="";

function checkPalindrome(originalWord)
{
for (let i=originalWord.length-1; i>=0; i--)
{
	revrsedWord = revrsedWord+charArray[i];
}
console.log("The reversed word is  " +revrsedWord);
if (originalWord == revrsedWord)
console.log("The given word is palindorme");
else
console.log("The given word is not palindrome");

} checkPalindrome(originalWord);
