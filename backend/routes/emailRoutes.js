import express from "express";
import getEmailService from "../config/emailConfig.js";

const router = express.Router();

router.post('/', async(req,res) =>{
    try{
        const {to , subject , text, html}= req.body;
        const emailService = getEmailService();
        await emailService.sendEmail({to , subject , text, html});
        res.status(200).send('Email sent successfully');
    }
    catch(err){
        console.error("Failed to send email:",err);
        res.status(500).send("Failed to send email")
    }

});

export default router;