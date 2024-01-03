const express =require('express')
const app =express()
app.get('/hello',(req,res)=>{
    res.send("welcome to home")
});




app.listen(4000,()=>{
    console.log("statred  on port 3000")
});