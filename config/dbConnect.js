const mongoose = require('mongoose');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const { createClient } = require('@supabase/supabase-js');
const dbConfig = require('./database');

let connection;

const connectToDatabase = async () => {
  const { type, mongo, mysql: mysqlConfig, postgres, supabase, prisma } = dbConfig;

  switch (type) {
    case 'mongodb': {
      try {
        await mongoose.connect(mongo.url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('MongoDB connection error:', error.message);
      }
      break;
    }
    case 'mysql': {
      try {
        connection = await mysql.createConnection(mysqlConfig);
        console.log('Connected to MySQL');
      } catch (error) {
        console.error('MySQL connection error:', error.message);
      }
      break;
    }
    case 'postgres': {
      try {
        const sequelize = new Sequelize(
          postgres.database,
          postgres.user,
          postgres.password,
          {
            host: postgres.host,
            port: postgres.port,
            dialect: 'postgres',
          }
        );
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL');
      } catch (error) {
        console.error('PostgreSQL connection error:', error.message);
      }
      break;
    }
    case 'supabase': {
      try {
        const supabaseClient = createClient(supabase.url, supabase.key);
        console.log('Connected to Supabase');
      } catch (error) {
        console.error('Supabase connection error:', error.message);
      }
      break;
    }
    case 'prisma': {
      try {
        const { PrismaClient } = require('@prisma/client');
        const prisma = new PrismaClient();
        await prisma.$connect();
        console.log('Connected to Prisma');
      } catch (error) {
        console.error('Prisma connection error:', error.message);
      }
      break;
    }
    default:
      console.error('Invalid DB_TYPE. Please set DB_TYPE to "mongodb", "mysql", "postgres", "supabase", or "prisma".');
  }
};

module.exports = connectToDatabase;
