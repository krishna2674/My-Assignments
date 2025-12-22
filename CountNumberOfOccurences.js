let mySentence = "I've told you again and again not to do that.";
let toSearch = "again";


function searchCountOfWords(mySentence){
let myArray = mySentence.split(" ");
 let wordCount=0;
console.log(myArray);
console.log
("The length of the array is  " + myArray.length);

for( let i=0;i<=myArray.length;i++){
   
  if (myArray[i] === toSearch){
    console.log[myArray[i]];
		wordCount=wordCount+1;
  }
  
}
  console.log("The number of accurences of the word  " +toSearch  +"    is   " +wordCount);
}
searchCountOfWords(mySentence);
