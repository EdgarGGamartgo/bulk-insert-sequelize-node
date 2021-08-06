import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import { ProductController } from './controllers/ProductController'
import { errorHandler, NotFoundError } from '@oregtickets/common'
import cors from 'cors'

const app = express()
app.use(cors())
app.set('trust proxy', true)
app.use(json())

app.use('/api/products', ProductController)

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }