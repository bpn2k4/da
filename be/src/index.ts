console.clear()
import express from 'express'
import cors from 'cors'
import { routerV1 } from '@routers'
import { ErrorHandler } from '@middlewares'

const main = async () => {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    return res.status(200).send("<h1>Hello World</h1>")
  })
  app.use('/api/v1', routerV1)
  app.use('/files', express.static('./data/files'))

  app.use(ErrorHandler)

  const PORT = Bun.env.PORT ?? 4000
  app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`)
  })
}

main()