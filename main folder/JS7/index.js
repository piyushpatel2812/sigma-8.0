// //  creating object
// const student={
//     name:"piyush",
//     age:45,
//     eng:45,
//     math:21,
//     phy:78,
//     // create a method/function
//     getAvg(){
//         // console.log(this)// this print whole object
//         let avg=(this.eng+this.phy+this.math)/3;
//         console.log(`${this.name} got avg marks= ${avg}`);
//     }
// }
// student.getAvg();

// // try and catch

// console.log("hello");
// try{
//     console.log(a);
// }
// catch{
//     console.log("caught an error ..a is not defined ");
//     // console.log();
// }
// console.log("hello545");
//                                 //  OR

//                                 console.log("hello");
// try{
//     console.log(a);
// }
// catch(err){
//     console.log("caught an error ..a is not defined ");
//     console.log(err);
// }
// console.log("hello545");

// //  arrow function
// const sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(2,9);

// //  arrow function impplicite
// const mul=(a,b)=>( a*b);
// mul(2,3);
// // console.log(mul(2,3));

// //  setTimeout fuction
// console.log("hiii there");
// setTimeout(()=>{
//     console.log("Apna college");
// },4000);
// console.log("welcome to");
// console.log("welcome to ");

// // setINterval
// console.log("comeee");
// let id=setInterval(()=>{
//     console.log("hello");
// },2000);

// // to stop the setInterval ,storre the setinterval in id and after the setinterval code write clearInterval(id)
// console.log(id);

// let id2=setInterval(()=>{
//     console.log("hello2");
// },1000);
// console.log(id2);
// //  jab bhi setinterval ko rokna hogA TAB call krdunga 
// clearInterval(id);


          // // arrow function with this keyword

// const student={
//     name:"piyush",
//     marks:95,
//     prop:this,//globsl scope(window object for this keyword)
//    getName:function(){
//         console.log(this);//student is object for this because call the student
//     return this.name;
//     },
//     getMarks:()=>{
//         // parent's scope-> window object
//     console.log(this);//student is object fro this because calll the student
//     return this.marks;
//     },
//     getInfo1: function (){
//         // this ka parent function hai aur function ka this calling object pe depnd hota hai
//         setTimeout(()=>{
//             console.log(this);// student object
//         },2000);
//     },
//        getInfo2: function (){
//         // yha pe window object call kr rhi hai kyuki settimeout inbuild function hai
//         setTimeout(function() {
//             console.log(this);// window object
//         },3000);
//     },
// }
// // student.getName();
// // console.log(student.getName());
// // console.log(student.getMarks());
// console.log(student.getInfo1());
// console.log(student.getInfo2());

//                 // practice question
//                 // 1
// const square=(n) => n*n;
// console.log(square(4));

let id=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
clearInterval(id);
console.log("clear interval run");
},10000);// 10s baad stop kr dega setInterval ko