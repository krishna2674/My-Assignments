let studentScore = 180;

function returnGrade(studentScore){ 
switch (true) {

    case 90 :
        console.log("Grade A"); 
        break;
    case 80 :
        console.log("Grade B");         
        break;
    case 70 :
        console.log("Grade C");         
        break;
    case 60 :
        console.log("Grade D");         
        break;
    default :
        console.log("Grade F");         

    }
}
returnGrade(studentScore);
