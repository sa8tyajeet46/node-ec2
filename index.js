const express=require("express");
const app=express();

app.get("/",async (req,res)=>{
    return res.json({
        "text":"hello world"
    })
})

app.listen(5001 || process.env.PORT,()=>{
    console.log("app is running")
})