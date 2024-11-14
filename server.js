const express = require('express');
const Router = express();
const port=3000;

Router.get('/',(req,res)=>{
    res.status(200).json({message:'this is fast application in grp by ally and emmy'})
});

Router.post('/',(req,res)=>{
    res.status(200).json({message:'this is the posted valiable'})
});


Router.listen(port,()=>{
    console.log(`server is running at localhost:${port}`)
});