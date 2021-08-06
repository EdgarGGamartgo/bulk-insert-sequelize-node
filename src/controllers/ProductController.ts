import express, { Request, Response } from 'express'
import { validateRequest } from '@oregtickets/common'
import { ErrorHandler } from './../handlers/ErrorHandler'
import { bulkInsertProductsByBatches } from './../services/ProductService'

const router = express.Router()

router.get('/',
  async (req: Request, res: Response) => {
    const { page, size }: any = req.query;
    const { method } = req
    try {
      const products = await bulkInsertProductsByBatches(page, size)
      res.status(200).send(products);
    } catch (e) {
      ErrorHandler(req.params, method, e, 'Cant insert products')
    }
  })

export { router as ProductController }