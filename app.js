const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let items=[];
app.get("/", function(req,res){
  let today = new Date();
  let currentDay = today.getDay();
  let options = {
    day: "numeric",
    weekday : "long",
    month : "long"
  }
  let day = today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay:day, newListItems:items });
});
app.post("/", function(req,res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})
app.listen("3000", function(){
  console.log("app running at port 3000")
});
