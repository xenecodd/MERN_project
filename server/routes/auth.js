import express from 'express';
import { register, login } from '../controllers/auth.js';


const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.send('This is the profile page');
  }, 200); // 2ms'lik bir gecikme
});

router.post('/register', register)

router.post('/login', login)

export default router;