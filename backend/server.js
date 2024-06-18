import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import getEmailService from "./config/emailConfig.js"
import emailRoutes from './routes/emailRoutes.js'

dotenv.config();

const app = express();


//Middleware 
app.use(cors());
app.use(bodyParser.json());

//Connecting to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=> console.log("Connected to MongoDB"))
// .catch(err => console.log("Connection to MongoDB was unsucessful",err))

//Get email service
const emailService = getEmailService();

//Root Router
app.get('/', (req,res)=>{
    res.send('Welcome to send email API')
})


//Routes
app.use('/send-email',emailRoutes);



//Server Port
const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))