import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/modal.js'


const router = express.Router();

router.post('/createPost',createPost);

router.post('/getPost', getPost)
router.get('/getAllPosts', getAllPosts);
router.patch('/posts/:id', updatePost);
router.delete('/delete/:id', deletePost);

export default router