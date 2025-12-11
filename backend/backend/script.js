// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello",i);
// }

// // console.argv
// console.log(process.argv);
// let args=process.argv;
// for(let i=2;i<args.length;i++){
// console.log("hello to",args[i]);
// }

// // module .exports

// const info=require("./fruits");
// console.log(info);

// // require the package which u installed in the directory

// const figlet=require("figlet");
// figlet("Piyush", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// // import and export from math.js file
import{sum,pi} from "./math.js";

console.log(sum(1,5));
console.log(pi);
import { generateSlug } from "random-word-slugs";

console.log(generateSlug());