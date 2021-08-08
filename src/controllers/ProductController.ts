import express, { Request, Response } from 'express'
import { validateRequest } from '@oregtickets/common'
import { ErrorHandler } from './../handlers/ErrorHandler'
import { bulkInsertProductsByBatches } from './../services/ProductService'
import { csvToDb } from './../utils/csvToDb';

const router = express.Router()

router.post('/',
  async (req: Request, res: Response) => {
    const { method } = req
    try {
      await csvToDb('testData.csv', bulkInsertProductsByBatches)
      return res.status(201).send();
    } catch (e) {
      ErrorHandler(req.params, method, e, 'Cant insert products')
    }
  })

export { router as ProductController }