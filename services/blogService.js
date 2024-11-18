const Blog = require('../models/Blog');

const createBlog = async (blogData) => {
  return await Blog.create(blogData);
};

const getBlogs = async () => {
  return await Blog.findAll();
};

const getBlogById = async (id) => {
  return await Blog.findByPk(id);
};

const updateBlog = async (id, blogData) => {
  const blog = await Blog.findByPk(id);
  if (!blog) throw new Error('Blog not found');
  return await blog.update(blogData);
};

const deleteBlog = async (id) => {
  const blog = await Blog.findByPk(id);
  if (!blog) throw new Error('Blog not found');
  return await blog.destroy();
};

module.exports = { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
