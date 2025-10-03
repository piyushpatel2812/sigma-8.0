// create the guessing game by usin the math function

const max=prompt("enter teh max number");

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    

if(guess== random){
    console.log("you are right! congrats!!" ,random);
    break;
}else if(guess < random){
    guess=prompt("hint:you guess was too small ,please try again");
}else{
    guess=prompt("hint:you guess was too large ,please try again")
}


// else{
//     guess=prompt("your guess was wrong. pls try again");
// }
}
