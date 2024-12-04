// routes/blogRoutes.js
import { Router } from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/blogController.js';

const router = Router();

// GET /api/blogs
router.get('/', getAllPosts);

// GET /api/blogs/:id
router.get('/:id', getPostById);

// POST /api/blogs
router.post('/', createPost);

// PUT /api/blogs/:id
router.put('/:id', updatePost);

// DELETE /api/blogs/:id
router.delete('/:id', deletePost);

export default router;
