// jashint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extented:true}));
app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("Thes result of the calculation is " + result);

});
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmicalci.html");
})
app.post("/bmicalculator",function(req,res){
    var w=parseFloat(req.body.weight);
    var h=parseFloat(req.body.height);
    var result=w/(h*h);
    res.send("The result of bmi calculation is " + result);
})
app.listen(3000, function(){
    console.log("server started at port 3000");
});