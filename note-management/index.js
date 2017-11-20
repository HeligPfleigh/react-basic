var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

var mang = ["Android", "IOS", "Winphone"];

app.get("/", function(req, res){
    res.render("trangchu");
});

app.post("/getNotes", function(req, res){
    res.send(mang);
});

app.post("/add", parser, (req, res)=>{
    var newNote = req.body.note;
    mang.push(newNote);
    res.send(mang);
});

app.post("/delete", parser, (req, res)=>{
    var id = req.body.idXoa;
    mang.splice(id, 1);
    res.send(mang);
});

app.post("/modify", parser, (req, res)=>{
    var id = req.body.idModify;
    var content = req.body.content;
    mang[id] = content;
    res.send(mang);
});