'use strict';
let name = prompt ("What's your name dear ")
alert("WELCOME WELCOME " + name + " I `m start testing your information of what you know about me")

let nationality = prompt (" Is my nationality Jordanian? ").toLowerCase();
switch(nationality.toLowerCase())
{    case  nationality =`yes`:
        console.log(`yes`) ;
        alert ("correct, my nationality is Jordanian ");
        break ;

    case  nationality =`y`:
        console.log(`yes`) ;
        alert ("correct, my nationality is Jordanian ");
        break ;

    case nationality = `no` :
        alert("Sorry your answer is wrong , i`m Jordanian ");
        console.log(`no`) ;
        break;
    
    case nationality = `n` :
        alert("Sorry your answer is wrong , i`m Jordanian ");
        console.log(`no`) ;
        break;

}



let work = prompt("Do i work as Dr");
switch(work.toLowerCase())
 {
 case  work =`yes`:
    console.log(`yes`) ;
    alert ("Sorry your answer is wrong , i`m Industrial engineer ");
    break ;

case  work =`y`:
    console.log(`yes`) ;
    alert ("Sorry your answer is wrong , i`m Industrial engineer");
    break ;

case work = `no` :
    alert("correct, i`m Industrial engineer ");
    console.log(`no`) ;
    break;

case work = `n` :
    alert("correct, i`m Industrial engineer");
    console.log(`no`) ;
    break;

}

let age = prompt("Am I a underage ?  هل انا قاصرة؟");
switch(age.toLowerCase())
 {
 case  age =`yes`:
    console.log(`yes`) ;
    alert ("Sorry your answer is wrong , i`m 23 years ");
    break ;

case  age =`y`:
    console.log(`yes`) ;
    alert ("Sorry your answer is wrong , i`m 23 years ");
    break ;

case age = `no` :
    alert("correct,i`m 23 ");
    console.log(`no`);
    break;

case age = `n` :
    alert("correct, i`m 23 ");
    console.log(`no`) ;
    break;

}

let uni = prompt("Did i graduate from the University of Jordan?");
switch(uni.toLowerCase())
 {
 case  uni =`yes`:
    console.log(`yes`) ;
    alert ("Sorry your answer is wrong , i`m graduted from Hasheimte University ");
    break ;

case  uni =`y`:
    console.log(`yes`) ;
    alert ("Sorry your answer is wrong , i`m graduted from Hasheimte University ");
    break ;

case uni = `no` :
    alert("correct, i`m graduted from Hasheimte University ");
    console.log(`no`) ;
    break;

case uni = `n` :
    alert("correct,i`m graduted from Hasheimte University");
    console.log(`no`) ;
    break;

}




let food = prompt (" Another thing to know about me hahahah ,Is pasta my favorite dish? ");

switch(food.toLowerCase())
{    case  food =`yes`:
        console.log(`yes`) ;
        alert ("correct, it`s my favorite");
        break ;

    case  food =`y`:
        console.log(`yes`) ;
        alert ("correct, it`s my favorite");
        break ;

    case food = `no` :
        alert("Sorry your answer is wrong , it`s my favorite ");
        console.log(`no`) ;
        break;
    
    case food = `n` :
        alert("Sorry your answer is wrong , it`s my favorite ");
        console.log(`no`) ;
        break;

}


alert (" Thank you " + name + " i hope you will Wait for the next episode of know more about Sarah Darwish hahahaah")