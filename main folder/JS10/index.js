// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick=function (){
//     alert("button was clicked");
// }

//  normale function which perform onclick
// function sayHello(){
//     alert("heelo buuton");
// }
// btn.onclick=sayHello;

// //  if multiple button there
// let btns=document.querySelectorAll("button");
// function sayHello(){
//     alert("heelo buuton");
// }
// for(btn of btns){// u use normal for loop also 
// btn.onclick=sayHello;
// btn.onmouseenter=function(){
//     console.log("you entered a button");
// };
// console.dir(btn);
// }

// // addEventListener
// let btns=document.querySelectorAll("button");
// function sayHello(){
//     alert("heelo buuton");
// }

// function sayName(){
//     alert("Apna college");
// }

// for(btn of btns){ 
// // btn.addEventListener("click",sayHello);
// // btn.addEventListener("click",sayName);
// btn.addEventListener("dblclick",function(){
//          console.log("you clicked double");
// }
// );
// };

// // activity JS10

// let btn=document.querySelector("button");
// btn.addEventListener("click",function (){
//     let h1=document.querySelector("h1");
//     let randomColor=getRandomColor();
//     h1.innerText=randomColor;

//     let div=document.querySelector("div");
//   div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);// generate the random value
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb (${red},${green},${blue})`;
//     return color;
// }

// // this in event listeners
// let btn=document.querySelector("button");
// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// // btn.addEventListener("click",function(){
// //     console.log(this.innerText);
// //     this.style.backgroundColor="blue";
// // })

// function colorChange(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// }
//     btn.addEventListener("click",colorChange);
//    p.addEventListener("click",colorChange);
//    h1.addEventListener("click",colorChange);
//    h3.addEventListener("click",colorChange);

// // keyword events
let input=document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("keyword events ")
// })

// input.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log("keyword events ")
// })


// input.addEventListener("keyup",function(event){
//     console.log("code=" ,event.code);
//     if(event.code=="ArrowUp"){
//         console.log("character moves forward");
//     }
//      else if(event.code=="ArrowLeft"){
//         console.log("character moves Left");
//     }
   
//      else if(event.code=="ArrowRight"){
//         console.log("character moves Right");
//     }
   
//      else if(event.code=="ArrowDown"){
//         console.log("character moves Down");
//     }
// })

// //  from event
let form=document.querySelector("form");
// form.addEventListener("submit",function (event){
//     event.preventDefault();
//     alert("form submited");
// })

//  // extracting data 
// // 1.
// form.addEventListener("submit",function (event){
//     event.preventDefault();
//     let inp=document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// })

// // //2.
// form.addEventListener("submit",function (event){
//     event.preventDefault();
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//    console.log(pass.value);
//    console.log(user.value);
//    alert(`usernamen ${user.value} and your password is ${pass.value}`)
// })

// // 3.using this.elemnts 
// form.addEventListener("submit",function (event){
//     event.preventDefault();
//     let user=this.elements[0];
//     let pass=this.elements[1];
//    console.log(pass.value);
//    console.log(user.value);
//    alert(`usernamen ${user.value} and your password is ${pass.value}`)
// })

// //change and input event
