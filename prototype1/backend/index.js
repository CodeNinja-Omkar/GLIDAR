import express from "express";
import path from "path";


const app = express();

app.set("view engine","ejs");
app.set("views",path.resolve('./views'));


app.get("/",(req,res)=>{

  res.render('index');

})


app.post("/",(req,res)=>{

})


app.listen(4000,()=>{
  console.log('server up');
})
