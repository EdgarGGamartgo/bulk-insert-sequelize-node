import { DataTypes, Sequelize } from 'sequelize';
import { ProductStatic } from './../types/ProductTypes';
import { db } from '../data-access/dbConnect'

export function ProductFactory(sequelize: Sequelize): ProductStatic {
  return <ProductStatic>sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    // },
  }, {
    timestamps: false
  });
}

export const Product = ProductFactory(db)