var express = require("express");

var app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Home Route !</h1>");
});


app.get("/about", (req, res)=>{
    res.send("<h1>about Route !<h1>");
});


app.get("/contact", (req, res)=>{
    res.send("<h1>contact Route !</h1>");
});
app.listen(4000, ()=>{
    console.log("port is started !");
});

