import express from 'express';
import getEmailService from '../config/emailConfig.js';
import { getTemplateById } from '../controllers/templateController.js'; // Import the function to fetch template by ID

const router = express.Router();

// Route to send an email with selected or default template
router.post('/', async (req, res) => {
  const { to, templateId } = req.body;

  try {
    let emailContent = {};

    if (templateId) {
      // Fetch the selected template by ID
      const selectedTemplate = await getTemplateById(templateId);

      if (!selectedTemplate) {
        return res.status(404).json({ message: 'Template not found' });
      }

      // Use the selected template content
      emailContent = {
        to,
        subject: selectedTemplate.subject,
        text: selectedTemplate.body,
        html: selectedTemplate.bodyHtml, // Assuming you have an HTML body in your template model
      };
    } else {
      // Default email content
      emailContent = {
        to: to || 'aakarshsolar@gmail.com', // Use provided 'to' or default email
        subject: 'Test Email',
        text: 'This is a default test email, no template selected',
        html: '<p>This is a default test email, no template selected.</p>',
      };
    }

    const emailService = getEmailService();
    await emailService.sendEmail(emailContent);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).send('Failed to send email');
  }
});

export default router;





// import express from "express";
// import getEmailService from "../config/emailConfig.js";

// const router = express.Router();

// router.post('/', async(req,res) =>{
//     try{
//         const {to , subject , text, html}= req.body;
//         const emailService = getEmailService();
//         await emailService.sendEmail({to , subject , text, html});
//         res.status(200).send('Email sent successfully');
//     }
//     catch(err){
//         console.error("Failed to send email:",err);
//         res.status(500).send("Failed to send email")
//     }

// });

// export default router;