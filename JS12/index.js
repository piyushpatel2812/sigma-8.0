// async
// async function greet (){
// // throw "404 page not found"
// return " hello !";

// }
// console.log(greet());

// greet()
// .then((result)=>{
// console.log("promise waas resolved");
// console.log(result,": this is ur result");
// })
// .catch((err)=>{
// console.log("promise was rejected with err :",err);
// })

// //  arrow function async
// let demo =async ()=>{
//     return 55;
// }
// console.log(demo());


// // await keyword

// function getNUm(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000)
//     });
//     }
//     async function demo(){
//         await getNUm();
//         await getNUm();
//         await getNUm();
//         await getNUm();
//         getNUm();
//          getNUm();
//           getNUm();
//     }
// console.log(demo());

// // what is API

// our first request
// // using fetch

// let url="https://catfact.ninja/fact";
// // fetch(url);
// // console.log(fetch(url));
// fetch(url)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("error:",err);
// })
 

// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     // console.log(data);
//       console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("error:",err);
// })

// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//       console.log("data1",data.fact);
//       return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2:",data2.fact);
// })
// .catch((err)=>{
//     console.log("error:",err);
// })
 


// // by using aysnc and await keyword for call the API

// let url="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res=await fetch(url);
//         let data =await res.json();
//         console.log(data.fact);
//     }catch(e){
//         console.log("error",e);
//     }
//     console.log("im a poyush");
// }
// console.log(getFacts());


