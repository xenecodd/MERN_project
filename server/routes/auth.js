import express from 'express';
import { register, login, refresh } from '../controllers/auth.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

function checkRefreshToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  
  const refreshToken = authHeader.split(' ')[1]; // Bearer token
  console.log('refresh',refreshToken)
  if (!refreshToken) {
    return res.status(401).json({ msg: 'No token exists' });
  }

  jwt.verify(refreshToken, "qeOUJz6FgEtJMKmDW6Mw3TiiFBBBQs2oDG8N8HKGCeJqKt2kynPx0RkcfS", (err, user) => {
    if (err) {
      return res.status(401).json({ msg: err.message });
    }
    req.user = user;
    console.log('check refresh req user', req.user);
    next();
  });
}

router.get('/', (req, res) => {
  setTimeout(() => {
    res.send('This is the profile page');
  }, 200); // 200ms delay
});

router.post('/register', register);
router.post('/login', login);
router.post('/refreshToken', checkRefreshToken, refresh);

export default router;
