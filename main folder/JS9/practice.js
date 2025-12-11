let para=document.createElement('p');
para.innerText="hey im  reed";
document.querySelector("body").append(para);
para.classList.add('red');

let heading=document.createElement('h3');
heading.innerText="hey im  blue";
document.querySelector("body").append(heading);
heading.classList.add('blue');

let div=document.createElement('div');
let h1=document.createElement('h1');
let p=document.createElement('p');
h1.innerText="hey im  div";
p.innerText='mee too';
div.append(h1);
div.append(p);
div.classList.add('box');
document.querySelector('body').append(div);
