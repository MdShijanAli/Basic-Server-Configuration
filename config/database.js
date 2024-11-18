require('dotenv').config();

const dbConfig = {
  type: process.env.DB_TYPE || 'mysql', // Default database
  mongo: {
    url: process.env.MONGO_URI || 'mongodb://localhost:27017/myapp',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'myapp',
  },
  postgres: {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    user: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || '',
    database: process.env.PG_DATABASE || 'myapp',
  },
  supabase: {
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_KEY || '',
  },
  prisma: {
    database: process.env.PRISMA_DATABASE || 'myapp',
  },
};

module.exports = dbConfig;
