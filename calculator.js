//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,res){

   var Weight = parseFloat(req.body.n1);
   var Height = parseFloat(req.body.n2);
  
   var sum = Weight / (Height*Height);
    res.send("your BMI is " + sum);
});

app.listen(3000,function(){
    console.log("Server started on port 3000")
});