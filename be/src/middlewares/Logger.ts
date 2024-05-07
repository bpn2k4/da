import type { NextFunction, Request, Response } from 'express'

import Utils from '@utils'

const Logger = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.on('finish', () => {
      const currentTime = Utils.getCurrentTime()
      const message = `${currentTime} ${req.method} ${req.originalUrl} ${res.statusCode}`
      console.log(message)
    })
    next()
  }
}

export default Logger