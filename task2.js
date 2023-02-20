// let studentDept=document.getElementById("d-text");
// let info=document.getElementById("subjects");
// let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
// let socialScience = "Accounting, Commerce, Marketing, Geography";
// let artsSubjects = "Government, Economics, Literature, History";
// let generalSubjects = "English, Mathematics";
// let message = " ";
// message= studentDept + " subjects are : " ;

// document.getElementById("submit-btn").addEventListener("click", ()=>{

//     studentDept = studentDept.value;
//     message= "Subjects for " + studentDept + " are : " ;


//     if (studentDept == "ART" || studentDept == "Art" || studentDept == "art"){
//         info.textContent = message + generalSubjects +  artsSubjects
//         // console.log(scienceSubjects + generalSubjects);
//     }else if (studentDept == "SCIENCE" || studentDept == "Science" || studentDept == "Science") {
//         info.textContent = message + generalSubjects +  scienceSubjects
//         // console.log(socialScience + generalSubjects)
//     }else if (studentDept == "SOCIAL SCIENCE" || studentDept == "social science" || studentDept == "Social science"){
//         info.textContent = message + generalSubjects +  socialScience
//         // console.log(artsSubjects + generalSubjects)
//     }else {
//         info.textContent =" General " + message  +   generalSubjects
//     };
    
    

// })


//Number 5
// let num = 14;
let num = prompt("Enter a number")
function highestPowerOf2(num) {
    let start =1
    for (i=0; i<20; i++){
        let curr = 1 << i;
        if (curr > num){
            break;
        }
        start = curr;
    }
    return start;
}
let pwr = highestPowerOf2(num);
alert("The number "+ pwr + " is the power of  2 nearest to "+ num + ".");
