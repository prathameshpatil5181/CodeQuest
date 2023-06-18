import express from 'express'
const port:number = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send("hello server is started");
});

app.listen(port,()=>{
    console.log(`app is listing on the port ${port}`)
})