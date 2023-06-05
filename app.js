import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors'


const app= express();
//configure dotenv
dotenv.config()

//middlewares
app.use(cors())
app.use(express.json())

//database config
connectDB();



//routes
app.use('/api/v1/auth',authRoute)

app.get('/',(req, res)=>{
    res.send({message:'hello'})
})
let PORT=process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`)
})