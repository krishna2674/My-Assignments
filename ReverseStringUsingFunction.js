let myName = "HelloWorld";
function reverseName(myName){
    let reversedName = "";  
 /*   for(let i = myName.length - 1; i >= 0; i--) {
        reversedName += myName[i];
    }   
    console.log("The reversed name is: " + reversedName);
}     
myName.split('').forEach(char => {
    reversedName = char + reversedName;
});
console.log("The reversed name is: " + reversedName);
}   */

    reversedName = myName.split('').reverse().join('');
    console.log("The reversed name is: " + reversedName);
}   
reverseName(myName);
