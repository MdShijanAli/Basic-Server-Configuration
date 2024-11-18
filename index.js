const express = require('express');
const connectToDatabase = require('./config/dbConnect');
const productRoutes = require('./routes/productRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());

// Connect to the database
connectToDatabase();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/blogs', blogRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
