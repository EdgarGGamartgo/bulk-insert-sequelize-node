import { Product } from './../models/Product'

export const bulkInsertProductsByBatches = async (products: { name: string }[], inserterCb: () => void) => {
  try {
    await Product.bulkCreate(products);
    inserterCb();
  } catch (e) {
    throw new Error(`Error from bulkInsertProductsByBatches service ${e}`);
  }
}
