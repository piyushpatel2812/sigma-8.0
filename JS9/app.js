
// // selecting element
// //1. (getElementById(idName))
// document.getElementById(mainImg);
// let imgObj=document.getElementById("mainImg");
// console.log(imgObj);
// // //dir for acccess the object of Id(mainImg)
// console.dir(document.getElementById("mainImg"));

// // 2.getElementByClassName("className")
// document.getElementsByClassName("oldImg");
// console.log(document.getElementsByClassName("oldImg"));// it access the object of the classname
// console.log(document.getElementsByClassName("oldImg")[0]);// it print the which index can u access
// console.log(document.getElementsByClassName("oldImg")[0].src);

// // 3.getElementbyTagName
// document.getElementsByTagName("p");
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1]);
// document.getElementsByTagName("p")[1].innerText="piyush";
// console.log(document.getElementsByTagName("p")[1]);

// // 4. querySelectorAll or querySelector

// console.dir(document.querySelector("div a"));
// console.dir(document.querySelector("div"));
// console.dir(document.querySelectorAll("div"));

// using properties and methods
// let para=document.querySelector("p");
// console.dir(para.innerText);
// console.dir(para.textContent);
// console.dir(para.innerHTML);

// console.log(para.innerText);
// console.log(para.textContent);
// console.log(para.innerHTML);

// // Manipulating Attributes

// let image=document.querySelector("img");
// console.log(image);
// console.log(image.getAttribute('id'));
// console.log(image.setAttribute("id","hello"));

// //  manipulating style

// let heading=document.querySelector("h1");
// console.log(heading.style.color="red");
// let list=document.querySelectorAll(" li a");
// for(let i=0;i<list.length;i++){
//     list[i].style.color="green";
// }

// // .classList
// let heading=document.querySelector("h1");
// heading.classList.add('green');// add new class
// heading.classList.remove('green');// remove class
// console.log(heading.classList.contains("green"));// it check class exits or not
// heading.classList.toggle("green");// it work as a switch add ya remove

// // navigation
// // parentElement
// let head=document.querySelector("h4");
// console.log(head.parentElement);
// let box=document.querySelector(".box");
// console.log(box.children);
// console.log(box.childElementCount);

// let ul=document.querySelector("ul");
// console.log(ul.parentElement);
// console.log(ul.childElementCount);
// console.log(ul.children);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// // Adding 
// let newp=document.createElement('p');
// newp.innerText="heelooo im a new p"
// let box=document.querySelector('.box');
// box.appendChild(newp);
// newp.append("this is new text");

// box.prepend("heelo im prepand");/
let btn=document.createElement('button');
btn.innerHTML="NEW BTN";
console.log(btn);
let p=document.querySelector('p');
// p.insertAdjacentElement('beforebegin',btn); // add in starting point
// p.insertAdjacentElement('afterbegin',btn);  //add in start hine ke baad
p.insertAdjacentElement('afterend',btn);
// p.insertAdjacentElement('beforeend',btn);
//  // remove element
// let body=document.querySelector('body');
// body.removeChild(btn);
btn.remove();