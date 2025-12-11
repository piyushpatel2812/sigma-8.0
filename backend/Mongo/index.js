const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');// connect node.js to databse 1st

main()// connect node.js to databse 1st
.then(() => {
    console.log("connection successfull");
})
.catch((err) => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
    
}
// create user schema
const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

// const User = mongoose.model("User", userSchema);//create model/document
// const employee = mongoose.model("employee", userSchema);
// const user1 = new User({
//     name:"piyush",
//     email:"piyush@gmail.com",
//     age:48
// })
// user1.save();// save data to database

// const user2 = new User({// insert one data at a time
//     name:"uday",
//     email:"yush@gmail.com",
//     age:15,
// });
// user2.save()
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// // insert multipe data at a time
const User = mongoose.model("User", userSchema);

// User.insertMany([
//     {name:"piyush",email:"piyush124@gmail.com",age:45},
//     {name:"adam",email:"adam124@gmail.com",age:25},
//     {name:"Billu",email:"billu124@gmail.com",age:35},
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// // find method
// User.find({age:{$gte:35}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// // updateOne 
// User.updateOne({name:"adam"},{age:12}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// // updateMany
// User.updateMany({age:{$gt:35}},{age:12}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// // deleeteONe
// User.deleteOne({name:"adam"}).then((res)=>{
//     console.log(res);
// })

// //deletMany
// User.deleteMany({age:{$gt:12}}).then((res)=>{
//     console.log(res);
// })

User.findOneAndDelete({age:{$gte:12}}).then((res)=>{
    console.log(res);
})