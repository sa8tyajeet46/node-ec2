const express=require("express");
const app=express();

app.get("/",async (req,res)=>{
    return res.json({
        "text":"hello world"
    })
})

app.listen(8080,()=>{
    console.log("app is running")
})