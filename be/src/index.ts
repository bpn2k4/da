console.clear()
import cors from 'cors'
import express from 'express'
import { resolve } from 'path'

import { ENVIRONMENT } from '@configs'
import { sql } from '@databases'
import { ErrorHandler, Logger } from '@middlewares'
import { initModel } from '@models'
import { routerV1 } from '@routers'

const main = async () => {
  const app = express()

  app.use(Logger())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  await sql.authenticate()
  console.log('Connect to database successfully!')
  await initModel()

  app.get('/favicon.ico', (req, res) => {
    return res.status(200).sendFile(resolve('./logo.webp'))
  })
  app.get('/monitor/liveness', (req, res) => {
    return res.status(200).send('Alive')
  })
  app.get('/monitor/readiness', async (req, res, next) => {
    try {
      await sql.query('SELECT 1+1 AS result')
      return res.status(200).send('Ready')
    } catch (error) {
      next(error)
    }
  })

  app.get('/', (req, res) => {
    return res.status(200).send("<h1>Hello World</h1><br /><b>document-manager-service</b>")
  })
  app.use('/api/v1', routerV1)
  app.use('/files', express.static('./data/files'))

  app.use(ErrorHandler)

  app.listen(ENVIRONMENT.PORT, () => {
    console.log(`App is running at http://localhost:${ENVIRONMENT.PORT}`)
  })
}

main()