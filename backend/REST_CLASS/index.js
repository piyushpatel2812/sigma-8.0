const express=require("express");
const app=express();
const port=3030;
const path=require("path");
const {v4:uuidv4}=require('uuid');


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
   {
         id:uuidv4(),
        username:"apnacollege",
        content:"i love coding",
    },
     {
            id:uuidv4(),
        username:"piyush",
        content:"Hard Work is important to achive sucess"
    },
     {
            id:uuidv4(),
        username:"rahul kumar",
        content:"I m selected in my first intership",
    },
];
// //  first route
app.get("/posts",(req,res)=>{
    // res.send("serving working well!");
    res.render("index.ejs",{posts});
});
// // seecond route
app.get("/posts/new",(req,res)=>{
    // res.send("serving working well!");
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
   let { username,content}=req.body;
   let id=uuidv4();
   posts.push({id,username,content});
    // res.send("post request working");
    res.redirect("/posts")
});


// third api
// app.get("/posts/:id",(req,res)=>{
//  let {id}=req.params;
// //  console.log(id);

// let post = posts.find( (p) => id == p.id);

// // console.log(post);
//  res.render("show.ejs",{post});
// });

 app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  if (!post) {
    return res.send("Post not found");
  }

  res.render("show.ejs", { post });
});


app.patch("/posts/:id",(req,res)=>{

    let {id}=req.params;
    // console.log(id);
      let newContent=req.body.content;
    // console.log(newContent);
    let post=posts.find((p)=> id===p.id);
    post.content=newContent;
    console.log(post);
    res.send("patch request working");
})

app.get("/post/:id/edit",(req,res)=>{
       let {id}=req.params;
       let post=posts.find((p)=> id===p.id);-
       res.render("edit.ejs");

       
});


app.listen(port,()=>{
    console.log(`listening the port ${port}`);
})