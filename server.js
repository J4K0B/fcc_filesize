var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer();
var path = require("path");

app.post('/', upload.single('datei'), function (req, res, next) {
    console.log("file came in");
  res.send({
      "size": req.file.size
  });
});

app.get("/", function(req, res) {
    console.log("someone visited us");
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen("8080", function(){
    console.log("Listening on 8080");
});