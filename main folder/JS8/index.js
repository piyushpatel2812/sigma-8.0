// let arr=[1,2,3,4,5];
// let print=function (el){
//     console.log(el);
// }
// console.log(print);
// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// }); 

// //  map function

// let num=[1,2,3,4,5];

// let double=num.map((el)=>{
//     return el*el;
// });
// console.log(double);

// let student=[{
//     name:"piyush",
//     marks:45,
// },
// {
//      name:"aman",
//     marks:87, 
// },
// {  name:"vivek",
//     marks:65,},
    
// {
//     name:"udy",
//     marks:95,
//     }
// ];
// let gpa=student.map((el)=>{
//     return el.marks/10;
// });
// console.log(gpa);

// //  filter
// let nums=[1,2,3,7,8,45,24,56];
// let ans=nums.filter((el)=>(
//     // el%2==0
//     el%2!=0

// ))
// console.log(nums);
// console.log(ans);


// // reduce method
// let nums=[1,2,3,4];
// let finalVal=nums.reduce((res,el)=>(res+el));
// console.log(finalVal);

//  // finding mximum in an array
// let nums=[2,3,4,5,6,7,8];
// let max=-1;
// let result=nums.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(result);

// // Practice QS
// let arr=[10,20,30,40];
// let result=arr.every((el)=>
//      el/10==0
// )
// console.log(result);


//  // finding minimum in an array
// let nums=[2,3,4,5,6,7,8];
// let result=nums.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
// console.log(result);

// // default parameter
// function sum(a,b=2){
//     return a+b;
// }
// // console.log(sum(1,6));
// console.log(sum(1));

// // spread
// // array literals
// let arr=[1,2,3,4,5,5454,45];
// let newArr=[...arr];
// console.log(newArr);
// console.log(arr);

// let char=[..."hello"];
// console.log(char);


// // object literals with spred
// let data={
//     email:"piyush@gnai",
//     pass:"54scchdc",
// };
// let datacopy={...data,id:15662};
// console.log(data);
// console.log(datacopy);

// // destructuring
// let names=["tony","piyush","aman","deep"];
// let[winner,runnerup]=names;
// console.log(winner," ",runnerup);
// // or
// let names=["tony","piyush","aman","deep"];
// let[winner,runnerup,...other]=names;
// console.log(winner," ",runnerup,other);

// // object destructing
const student={
    name:"piyush",
    age:45,
    marks:3,
};
let {age:agePiyu,marks:piyuMark}=student;
console.log(agePiyu,piyuMark);