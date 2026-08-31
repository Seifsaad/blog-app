const {config} = require('dotenv');
config();
const pool = require('./common/db/db')
const express = require('express');
const authRouter = require('./app/auth/auth.route');
const blogRouter = require('./app/blog/blog.route');
const userRouter = require('./app/user/user.route');
const e = require("express");
const app = express();

// app.get('/health', async (req,res)=>{
//     const {rows} = await pool.query('SELECT 1+1 as result')
//     res.json(rows[0])
// })
app.use(express.json())

app.use('/auth',authRouter);
app.use('/blog',blogRouter);
app.use('/user',userRouter);
app.use((req,res)=>{
    res.json({message:"invalid route "});
})

app.use((error,req,res,next)=>{
    res.json({
        message: error.message,
        success: false,
        stack: error.stack
    })
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});