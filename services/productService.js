const Product = require('../models/Product');

const createProduct = async (productData) => {
  return await Product.create(productData);
};

const getProducts = async () => {
  return await Product.findAll();
};

const getProductById = async (id) => {
  return await Product.findByPk(id);
};

const updateProduct = async (id, productData) => {
  const product = await Product.findByPk(id);
  if (!product) throw new Error('Product not found');
  return await product.update(productData);
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) throw new Error('Product not found');
  return await product.destroy();
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
