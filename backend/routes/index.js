import express from 'express';
import emailRoutes from './emailRoutes.js';
import templateRoutes from './templateRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the send email API');
});

router.use('/send-email', emailRoutes);
router.use('/templates', templateRoutes);

export default router;
