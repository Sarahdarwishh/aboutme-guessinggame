'use strict';
let scoore = 0
let name = prompt ("What's your name dear ")
    alert("WELCOME WELCOME"  + name + " Im start testing your information of what you know about me")

function y_or_n_question(question, answer_yes, answer_no, result)
 {
    while (question !== "yes" && question !== "no" && question !== "y" && question !== "n") {
        question = prompt("Please enter yes or no , y or n just ")

    }

    switch (question.toLowerCase()) {
        case `yes`:
        case `y`:
            console.log(`yes`);
            alert(answer_yes);
            if (result === true) {
                scoore++;
            }
            break;


        case `no`:
        case `n`:
            alert(answer_no);
            console.log(`no`);
            if (result === false) {
                scoore++;
              } 
            break;
    }
}

function get_old (){

    for (let i = 0 ; i < 4 ; i++ )
    {
        let old = prompt("Guess how old i will be in ten years ?")
        old = Number(old)
            if(old > 33)
            {
                alert("NO, too high");
            }
            else if (old < 33){
                alert("No , too low");
            }
            else{
                alert("It`s correct answere , i will be 33 years old");
                console.log(scoore)
               return scoore++
                console.log(scoore)
               
                 break;
            }
    
    }
    alert ("The correct answer is 33 ")
 }

 



function fields(){
    
    let x = false ;
    let ie =["safety engineer","procurement engineer" ,"project engineer", "sales engineer","production engineer","planning engineer"];
    for (let s=0;s<6;s++){
    let seven = prompt("Guess one of the fields in which an industrial engineer can work it")
    
    for(let i=0;i<ie.length;i++){
        console.log(seven +' ' +ie[i])
    
        if (seven === ie[i]){
            alert ("Well done you guessed");
            x = true;
            return scoore++;
            break;
        }
         }
    if(x) {
        break;
    }
    }
    alert("the fields in which an industrial engineer can work it are " + ie );
    
    }
    





let nationality = prompt (" Is my nationality Jordanian? ").toLowerCase();
y_or_n_question (nationality, "correct, my nationality is Jordanian","Sorry your answer is wrong, i`m Jordanian ", true)

let work = prompt("Do i work as Dr");
y_or_n_question(work, "Sorry your answer is wrong", "correct, i`m Industrial engineer ", false)


let age = prompt("Am I a underage ?  هل انا قاصرة؟");
y_or_n_question (age, "Sorry your answer is wrong , i`m 23 years " ,"correct,i`m 23 ", false)

let uni = prompt("Did i graduate from the University of Jordan?");
y_or_n_question (uni, "Sorry your answer is wrong , i`m graduted from Hasheimte University " ,"correct, i`m graduted from Hasheimte University ", false)


let food = prompt (" Another thing to know about me hahahah ,Is pasta my favorite dish? ");
y_or_n_question (food, "correct, it`s my favorite" ,"Sorry your answer is wrong , it`s my favorite ", true)



get_old();

fields();

alert(`your scoore is ${scoore} `)






