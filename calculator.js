// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// urlencoded({extended: true}) is the special one that we use when we are trying to parse data that comes from an HTML form.
// it allows us to post objects

// app.get("/test",function(req,res){
  // res.sendFile(__dirname + "/index.html");
// });
// __dirname可以使html文件被找到，不管它在自己的桌面上，还是别人的电脑上，in a remote server or in the cloud上，都是成立的。所以比单纯输入自己电脑上它的文件名要更有普适性

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// app.post("/test",function(req,res){

// console.log(req.body);   this is the parsed version of HTTP request.
// console.log(req.body.num1);   we can tap into the value of the first one.
// var num1 = Number(req.body.num1);
// var num2 = Number(req.body.num2);
// var result = num1 + num2;

  // res.send("The result of the calculation is " + result);
// });

app.post("/bmicalculator",function(req,res){
  var bmi1 = parseFloat(req.body.bmi1);
  var bmi2 = parseFloat(req.body.bmi2);
  var result = bmi1 * bmi2;
  res.send("Your BMI is " + result);
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
