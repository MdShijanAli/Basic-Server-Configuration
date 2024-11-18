const blogService = require('../services/blogService');

const createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog };
