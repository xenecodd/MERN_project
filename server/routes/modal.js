import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/modal.js'
import jwt from 'jsonwebtoken';


const router = express.Router();

function authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(authHeader);

        if (token == null) {
                return res.status(401).json({ msg: 'No token exists' });
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                        return res.status(500).json({ msg: err.message });
                }
                req.user = user;
                next();
        });
}


router.post('/createPost', authenticateToken, createPost);

router.post('/getPost', authenticateToken, getPost)
router.get('/getAllPosts', authenticateToken, getAllPosts);
router.put('/posts/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

export default router