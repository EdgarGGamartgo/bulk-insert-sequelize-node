import { db } from './dbConnect'
import mysql from 'mysql2/promise'

const configDb = {
  host: process.env.DB_HOST,
  port: +process!.env!.DB_PORT!,
  user: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string
}

export const dbInit = async () => {
  try {
    const connection = await mysql.createConnection(configDb);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE as string}\`;`);
    await db.authenticate();
    await db.sync({ force: true, alter: false });
    //await db.query(seeds);
    console.log('Connection has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}