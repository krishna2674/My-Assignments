let myName = "krishnamurthy";
//let reversedString ="";
function reverseString(myName){
	let reversedString ="";
	for(let i=myName.length-1;i>=0;i--)
     
	{
       
		reversedString = reversedString + myName[i];
	}
	console.log("The reversedString is   " + reversedString);
}
reverseString(myName)

