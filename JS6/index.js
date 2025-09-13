// //  create a function and call the function
// function hello(){
//     console.log("hello");
// }
//    hello();   // is called funtion call

// function print(){
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// }
// print();
 
// function isAdult(){
//     let age=48;
//     if(age>=18){
//     console.log("R u adult");
//     }else{
//         console.log("R u not adult");
//     }
    
// }
// isAdult();

// //  print the poem

// function poem(){
//     console.log("Twinkle twinkle little star");
//     console.log("how I wonder what to our");
// }
// poem();
// // poem();

// //  create  the function to roll dice and give number between 1 -6;
// function rollDice(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();

//  function with arguments
// function sum(a,b){
//     console.log(a+b);
// }
// sum(4,6);
// sum(59,84);

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("piyush",45);

//  create a function that gives us the average of 3 numbers.
// function cal(a,b,c){
//     avg=(a+b+c)/3;
//     console.log(avg);

// }
// cal(1,5,9);

// // create a fuction that prints the manipulation table of a number 
// function printTable(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// printTable(5);

//return  keyword
// function isAdult(age){
//     if(age>=18){
//         return "adult";

//     }
//     else{
//         return "minor";
//     }
// }
// //  how to call
// let adult=isAdult(15);
// console.log(adult);
//     //  OR
// // isAdult(18);
// // console.log(isAdult(18));

// //  create a function that retuns the sum of number from 1 to n.
// function sum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum(5));

// // create a function thaat returns the concatenation of all strings in an array.
// let str=["hii","hello","bye","!"];
// function concate(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result +=str[i];
//     }
//     return result;
// }
// console.log(concate(str));

