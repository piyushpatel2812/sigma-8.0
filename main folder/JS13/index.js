// //  http resquest by using axios

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let fact=await getFacts();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// })

// let url="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("error - ",e);
//         return "No return found"
//     }
// }



// let btn = document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random"
// btn.addEventListener("click",async ()=>{
//     let link=await getImage();
//    let img=document.querySelector("#result");
//  img.setAttribute("src",link);
//  console.log(link);
// }
// async function getImage(){
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//     }catch(e){
//         console.log("error - ",e);
//         return "No return found"
//     }
// }


// axios (sending headers)
// const url="https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config={headers:{Accept:"application/jsoon"}};
//         let res=await axios.get(url,config);
//         console.log(res.data);
// }catch(err){
// console.log(err);
// }
// }
// console.log(getJokes());

//  activity using Query string 
let url ="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let colArr=await getColleges(country);
    show(colArr);
});
function show(colArr){
    let list =document.querySelector("#list");
  list.innerText="";
  for(col of colArr){
    console.log(col.name);

    let li =document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);
  }
}

async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        return res.data;


    }catch(e){
        console.log("error",e);
    }
}


// // // state-province
// let url ="http://universities.hipolabs.com/search?name=";
// let btn=document.querySelector("button");

// btn.addEventListener("click",async()=>{
//     let state=document.querySelector("input").value;
//     console.log(state);

//     let colArr=await getColleges(state);
//     show(colArr);
// });
// function show(colArr){
//     let list =document.querySelector("#list");
//   list.innerText="";
//   for(col of colArr){
//     console.log(col.name);

//     let li =document.createElement("li");
//     li.innerText=col.name;
//     list.appendChild(li);
//   }
// }

// async function getColleges(state){
//     try{
//         let res=await axios.get(url+state);
//         return res.data;


//     }catch(e){
//         console.log("error",e);
//     }
// }








































