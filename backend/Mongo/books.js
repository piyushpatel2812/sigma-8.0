const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');// connect node.js to databse 1st

main()// connect node.js to databse 1st
.then(() => {
    console.log("connection successfull");
})
.catch((err) => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    
}

const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
});

// create collection OR model
const Book =mongoose.model("Book",bookSchema);
let book1=new Book({
    title:"Mathematics XII",
    author:"R.D Sharma",
    price:1200
});

book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});