import { Sequelize } from 'sequelize'

export const db = new Sequelize(process.env.DATABASE as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  omitNull: true,
  port: +process!.env!.DB_PORT!,
  dialectOptions: {
    multipleStatements: true
  }
});