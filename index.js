const express = require("express");
const app=express();
app.get("/",(req,res)=>
{
    res.send("<h1> Hello in home page </h1>");
})

app.get("/about",(req,res)=>
{
    res.send("<p> Hello in about page </p>");
})

app.get("/contact",(req,res)=>
{
    res.send("<h2> Hello in contact page </h2>");
})

app.listen(8000,()=>
{
    console.log("Running in port 8000");
})