// routes/blogRoutes.js
import { Router } from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/blogController.js';
import { adminAuth } from '../middleware/adminAuth.js';


const router = Router();

// GET /api/blogs
router.get('/', getAllPosts);

// GET /api/blogs/:id
router.get('/:id', getPostById);

// Admin Routes (Protected)
router.post('/', adminAuth, createPost);
router.put('/:id', adminAuth, updatePost);
router.delete('/:id', adminAuth, deletePost);

export default router;
