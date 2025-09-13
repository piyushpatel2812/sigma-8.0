// // function scope
// let sum=54;// global scope
// function calSum(a,b){
//     let sum=a+b;
//     console.log(sum);//print funnction scope
// }
// calSum(2,5);

// console.log(sum);// print global scope

// {
//     let a=25;
    
// console.log(a);// block scope

// }
// console.log(a);// a is not access outside the block becoz it is blocke scope

// //lexical function
// function outerFun(){
//     let x=5;
//     let y=8;
//     console.log(x);
//     function innerFun(){
//         // let a=10;
//         console.log(x);
//         console.log(y);
//     }
//     // console.log(a);
//     innerFun();
// }
// outerFun();

// //  practice question 
// let greet="hello";
// function changeGreet(){
//     let greet="namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     // innerGreet();
// }
// console.log(greet);
// changeGreet();

//  function expression
//  it is called nameless function
// const sum=function(a,b){
//     return a+b;
// }
// sum(2,3);

// function multipleGreet(func,n){// higher order function
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }
// multipleGreet(greet,2);

//  methods
// const calculator={
//      num:45,
//     add:function(a,b){
//         return a+b;
//     },
//      sub:function(a,b){
//         return a-b;
//     },
//      mul:function(a,b){
//         return a*b;
//     }
// }
// console.log(calculator.num);
// console.log(calculator.add(1,2));

const calculator={
   
    add(a,b){
        return a+b;
    },
     sub(a,b){
        return a-b;
    },
     mul(a,b){
        return a*b;
    }
}

console.log(calculator.add(1,2));