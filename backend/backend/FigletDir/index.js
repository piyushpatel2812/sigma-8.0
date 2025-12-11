// // require the package which u installed in the directory

const figlet=require("figlet");
figlet("Piyush Patel!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


