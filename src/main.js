const {config} = require('dotenv');
config();

const express = require('express');
const authRouter = require('./features/auth/auth.route');
const blogRouter = require('./features/blog/blog.route');
const userRouter = require('./features/user/user.route');
const app = express();


app.use('/auth',authRouter);
app.use('/blog',blogRouter);
app.use('/user',userRouter);
app.use((req,res)=>{
    res.json({message:"invalid route "});
})
app.listen(3000,()=>{
    console.log("Server started on port 3000");
});