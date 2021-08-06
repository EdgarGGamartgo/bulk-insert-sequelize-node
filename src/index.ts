import { app } from './app'
import { dbInit } from './data-access/dbInit'

const start = async () => {

  await dbInit();

  app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port ${process.env.APP_PORT}!!!!!`)
  })
}

start()