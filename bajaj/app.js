const express=require('express')
const app=express()
require('dotenv').config()
const postData=require('./routes/postData')
app.use(express.json())
app.use('/challenge/bhfl',postData);
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})