// // callback

// function hello(){
//     console.log("inside hello fnx");
//     console.log("hello im ");
// }

// function demo(){
//         hello();
//     console.log("calling hello fnx")

// }

// console.log("calling demo fnx");
// demo();
// console.log("done ,bye");

// // visualisation the call stack
// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();

// // JS is single threaded

// let a=25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b);

// setTimeout(() => {
//     console.log("apna colleegge");
// },2000);
//     console.log("helloo ...");

// // callback hell

// h1=document.querySelector("h1");
//  function changeColor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color=color;
//         if(nextColorChange)nextColorChange();
//     }, delay);
//  }

//  changeColor("red",1000,()=>{
//     changeColor("orange",1000,() => {
//         changeColor("green",1000,() => {
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
//  });


// // promises

// function saveDb(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed > 4){
//        success();

//     }else{
//         failure();
//     }
// }
// saveDb("apna college", () =>{
//      console.log("success:your data waas sved:");
//      saveDb("hello world",()=>{
//         console.log("success2:data2 saved");
//      },()=>{
//         console.log("failure2:weaak connection");
//      });
// },()=>{
//         console.log("failure: weak connection. data not saved");
// } );

// // uses of promises 

// function savetoDb(data){
//    return new Promise((resolve,reject)=>{
//  let internetspeed=Math.floor(Math.random()*10)+1;
//    if(internetspeed >4){
//         resolve("resolve:data was saved");
//    }else{
//       reject("reject:weak connection");
//    }
//    });
  
// }
// console.log(savetoDb("apna college"));

// // then and catch

// function savetoDb(data){
//    return new Promise((resolve,reject)=>{
//  let internetspeed=Math.floor(Math.random()*10)+1;
//    if(internetspeed >4){
//         resolve("success:data was saved");
//    }else{
//       reject("failure:weak connection");
//    }
//    });
  
// }
// //   1 method to use then and catch

// let request=savetoDb("apna college");//req=promise object
// request.then(()=>{
//    console.log("promise was resolved");
//    console.log(request);
// })
// .catch(()=>{
//    console.log("promise was rejeected");
// })

// // 2nd method to use(use direct then and catch)

// savetoDb("apna college")
// .then(()=>{
//    console.log("promise was resolved");

// })
// .catch(()=>{
//    console.log("promise was rejeected");
// })

// // 3rd is promises chaning 
// savetoDb("apna college")
// .then(()=>{
//    console.log("data1 is saved");
//     return savetoDb("helloworld");
// })
// .then(()=>{
//       console.log("data2 is saved");
//       return savetoDb("piyush");
//     })
//     .then(()=>{
//       console.log("data3is saved");
//     })
// .catch(()=>{
//    console.log("promise was rejeected");
// })

// // 4th is promises return valid result nd error 
// function savetoDb(data){
//    return new Promise((resolve,reject)=>{
//  let internetspeed=Math.floor(Math.random()*10)+1;
//    if(internetspeed >4){
//         resolve("success:data was saved");
//    }else{
//       reject("failure:weak connection");
//    }
//    });
  
// }
// savetoDb("apna college")
// .then((result)=>{
//    console.log("data1 is saved");
//    console.log("result of promises:",result);
//     return savetoDb("helloworld");
// })
// .then((result)=>{
//       console.log("data2 is saved");
//        console.log("result of promises:",result);
//       return savetoDb("piyush");
//     })
//     .then((result)=>{
//       console.log("data3 is saved");
//        console.log("result of promises:",result);
//     })
// .catch((error)=>{
//    console.log("promise was rejeected");
//    console.log("error of promises:",error);
// })

// // callback hell solve using promises

// h1=document.querySelector("h1");
//  function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//  setTimeout(() => {
//         h1.style.color=color;
//         console.log(`color change to ${color}!`);
// resolve("colore will be changes");
        
//     }, delay);
//    })
//    }


//  let requestPromise=changeColor("green",1000);
//  console.log(requestPromise);


// changeColor("red",1000)
// .then(()=>{
//    console.log("red color was changed");
//    return changeColor("orange",1000);
// })
// .then(()=>{
//    console.log("orange color was changed");
//    return changeColor("green",1000)
// })
// .then(()=>{
//    console.log("green color was completed");
// })


// // using await keyword 
// async function demo(){
//    await changeColor("red",1000);
//    await changeColor("blue",1000);
//    await changeColor("green",1000);
//    await changeColor("voilet",1000);
//    await changeColor("orange",1000);
// }
// console.log(demo());



// h1=document.querySelector("h1");
//  function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//  setTimeout(() => {
//    let num=Math.floor(Math.random()*10)+1;
//    if(num>5){
//       reject("promise will we rejected");
//    }
//         h1.style.color=color;
//         console.log(`color change to ${color}!`);
// resolve("colore will be changes");
        
//     }, delay);
//    })
//    }

//    async function demo(){

//       try{
//  await changeColor("red",1000);
//    await changeColor("blue",1000);
//    await changeColor("green",1000);
//    await changeColor("voilet",1000);
//       }catch (err){
//          console.log("error is caught");
//          console.log(err);
//       }
//    }
//    console.log(demo());
