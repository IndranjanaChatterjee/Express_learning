const express = require("express");
const path = require("path");
const app=express();

const source=path.join(__dirname,"../files");
console.log(source);

// to use the view engine
app.set("view engine","hbs");
app.use(express.static(source));

app.get("/",(req,res)=>
{
    res.render('index',{
        USER:"PIU",
    });
})
app.get("/",(req,res)=>
{
    res.send("<h1> Hello in home page </h1>");
})



app.listen(8000,()=>
{
    console.log("Running in port 8000");
})