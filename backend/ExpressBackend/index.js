const express=require("express");
const app=express();
// console.dir(app); // print the onject 

let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
});
// app.use((req,res)=>{
//     // console.log(req);
// console.log("request recevied");
// // sending response
// res.send("Respones will be send ");
// // sending object
// res.send({
//     name:"piyush",
//     age:17,
//     color:"red",
// });
// });

// // routing 
app.get("/",(req,res)=>{
    res.send("you contaced root path");
});

app.get("/help",(req,res)=>{
    res.send("hello this is a server request ");
});

// app.get("/search",(req,res)=>{
//     res.send("you contaced search path");
// });
// app.get(/.*/,(req,res)=>{
//     res.send("this path is nnot defined ");
// });

// //  for post request 
// app.post("/",(req,res)=>{
//     res.send("ypu sent the post request ");
// });

// // path parameters
app.get("/:username/:id",(req,res)=>{
let{ username ,id}=req.params;
// console.log(req.params);
// res.send(`welcome to the page of @${username}.`);

// // send html string 
// let htmlstr=`<h1>welcome to the page of @${username}.<h1>`
// res.send(htmlstr);
});

// query string 
app.get("/search",(req,res)=>{
    // console.log(req.query);
    // // extrect the query value
    let{q}=req.query;

    // res.send(`search result for query:${q}`);
    // res.send(`<h1>search result for query:${q}<h1>`);

    // // agr asia case aaata hai jha query exist hi krti hia wha
   if(!q){
    res.send("<h1>nothing searched<h1>"); 
   }
    res.send(`<h1>search result for query:${q}<h1>`);

});