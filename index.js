const express=require("express");
const cors=require("cors");
const fs=require("fs");
const port=process.env.PORT||9000;

const app=express();
app.use(cors());

app.get("/find",(req,res)=>{
      let num=req.query.number;
      let n=parseFloat(num);
      let r=n**0.5;
      let msg="square root of "+n+" is "+r.toFixed(2);

      let logdata=msg+""+new Date().toString()+ "\n";
      fs.appendFile("result.txt",logdata,(err)=>{
         if(err) 
            console.log(err);
      s});
    res.json({"msg":msg});

});
app.listen(port,()=>{console.log("ready @" + port);});