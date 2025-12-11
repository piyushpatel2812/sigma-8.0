// const { faker } = require('@faker-js/faker');

// let createRandomUser=() => {
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };
// console.log(createRandomUser());

// // practice QS
// let getRandomUser=() => {
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//      password: faker.internet.password(),
    
//   };
// };

// console.log(getRandomUser());

// // install pakcage to connect node to sql (MYSQL2)
// const mysql=require('mysql2');

// const connection =mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   database:'sigma_app',
//   password:'Piyush@2005'
// });


// // inserting new data 
// // let q="INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
// // let user=["123","123_newuser","abc@gmail.com","abc"];// agr single user ka data inser tkaran hai tho 

// let q="INSERT INTO user(id,username,email,password) VALUES ?";
// let users=[
// ["123b","123_newuserb","abc@gmail.comb","abcb"],
// ["123c","123_newuserc","abc@gmail.comc","abccc"],
// ];


// try{
//   connection.query(q,[users],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// }catch(err){
//   console.log(err);
// }

// connection.end();// to end the connection direct 


////  insert in bulk by using faker
// const mysql=require('mysql2');

// const connection =mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   database:'sigma_app',
//   password:'Piyush@2005'
// });

// let getRandomUser=() => {
//   return [ 
//      faker.string.uuid(),
// faker.internet.username(),
//  faker.internet.email(),
//       faker.internet.password(),
//     ]
  
    
//   };

//   let q="INSERT INTO user(id,username,email,password) VALUES ?";
// let data=[];
// for(let i=1;i<=100;i++){
//   // console.log(getRandomUser());
//   data.push(getRandomUser());//100 fake user ka data aa rha hai 
// }

// try{
//   connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// }catch(err){
//   console.log(err);
// }

// connection.end();// to end the connection direct 


                                               // // routing 

// const { faker } = require('@faker-js/faker');
// const mysql=require('mysql2');
// const express=require("express");
// const app=express();
// const path=require("path");

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"));




// const connection =mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   database:'sigma_app',
//   password:'Piyush@2005'
// });

// let getRandomUser=() => {
//   return [ 
//      faker.string.uuid(),
// faker.internet.username(),
//  faker.internet.email(),
//       faker.internet.password(),
//     ]
//   };5432

//   // // home route
// app.get("/",(req,res)=>{
//   let q=`SELECT count(*) FROM user`;

//   try{
//   connection.query(q,(err,result)=>{
//     if(err) throw err;
//     // console.log(result[0]["count(*)"]);
//     // res.send("success");
//     let count =result[0]["count(*)"];
//     res.render("home.ejs",{count});
//   });
// }catch(err){
//   console.log(err);
//   res.send("some error in DB");
// }
//  });// isme connection.end ki need hai kyuki jab aap.get close hoga ve automatic bnd ho jayega 

// // // show user route
// app.get("/user",(req,res)=>{
//   let q=`SELECT * FROM user`;
//     try{
//   connection.query(q,(err,users)=>{
//     if(err) throw err;
//   res.render("showuser.ejs",{users});

//   });
// }catch(err){
//   console.log(err);
//   res.send("some error in DB");
// }
//  });

//  // // edit route 
//  app.get("/user/:id/edit",(req,res)=>{
//   let {id}=req.params;
//   console.log(id);
//   res.render("edit.ejs");
//  })


// app.listen(8080,()=>{
//   console.log("server is listing to port 8080");
// });


const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");

const app = express();

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to read form data
app.use(express.urlencoded({ extended: true }));

// mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sigma_app",
  password: "Piyush@2005",
});

// random user generator (not used now but kept)
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


// Home route -> show total users count
app.get("/", (req, res) => {
  const q = "SELECT COUNT(*) AS count FROM user";

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      let count = result[0].count;
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Database error");
  }
});

// Show all users
app.get("/user", (req, res) => {
  const q = "SELECT * FROM user";

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;

      res.render("showuser.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Database error");
  }
});

// Edit page -> show edit form for a single user
app.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;

  const q = "SELECT * FROM user WHERE id = ?";

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database error");
    }

    if (result.length === 0) {
      return res.send("User not found");
    }

    const user = result[0];
    res.render("edit.ejs", { user });
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
}); 

