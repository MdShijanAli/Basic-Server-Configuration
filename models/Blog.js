const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Blog = sequelize.define('Blog', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  author: { type: DataTypes.STRING },
  tags: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
});

module.exports = Blog;
