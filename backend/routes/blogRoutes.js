// routes/blogRoutes.js
import { Router } from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/blogController.js';
import { adminAuth } from '../middleware/adminAuth.js';
import upload from '../middleware/upload.js'; // File upload middleware


const router = Router();

// GET /api/blogs
router.get('/', getAllPosts);

// GET /api/blogs/:id
router.get('/:id', getPostById);

// Admin Routes (Protected)
// POST /api/blogs - Create a new blog post with optional image upload
router.post('/', adminAuth, upload.single('image'), createPost);

// PUT /api/blogs/:id - Update a blog post with optional image upload
router.put('/:id', adminAuth, upload.single('image'), updatePost);

router.delete('/:id', adminAuth, deletePost);

export default router;
