import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { notFoundMiddleware, errorMiddleware } from './middlewares/index.mjs'
import { authRouter } from './routers/auth.router.mjs'

export function getApp () {
  const app = express()
  app.use(express.json())
  app.use(morgan('common'))
  app.use(cors())
  app.use(authRouter())
  app.use(notFoundMiddleware())
  app.use(errorMiddleware())

  return app
}
