// controllers/blogController.js
import BlogPost from '../models/BlogPost.js';

// @desc    Get all blog posts
// @route   GET /api/blogs
// @access  Public
export async function getAllPosts(req, res) {
  try {
    const posts = await BlogPost.find().sort({ date: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching all posts:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc    Get single blog post
// @route   GET /api/blogs/:id
// @access  Public
export async function getPostById(req, res) {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc    Create new blog post
// @route   POST /api/blogs
// @access  Private
export async function createPost(req, res) {
  const { title, content, author, category, imageUrl } = req.body;
  try {
    const newPost = new BlogPost({
      title,
      content,
      author,
      category,
      imageUrl,
    });
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating new post:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc    Update blog post
// @route   PUT /api/blogs/:id
// @access  Private
export async function updatePost(req, res) {
  const { title, content, author, category, imageUrl } = req.body;
  try {
    let post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Update fields
    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;
    post.category = category || post.category;
    post.imageUrl = imageUrl || post.imageUrl;

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc    Delete blog post
// @route   DELETE /api/blogs/:id
// @access  Private
export async function deletePost(req, res) {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    await post.deleteOne();
    res.status(200).json({ message: 'Post removed' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}
