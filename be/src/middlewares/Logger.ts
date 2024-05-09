import type { NextFunction, Request, Response } from 'express'

import Utils from '@utils'

const Logger = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('startAt', Number(new Date()).toString())
    res.on('finish', () => {
      const currentTime = Utils.getCurrentTime()
      const startAt = Number(res.getHeader('startAt'))
      const message = `${currentTime} ${req.method} ${req.originalUrl} ${res.statusCode} ${Number(new Date()) - startAt}ms`
      console.log(message)
      res.removeHeader('startAt')
    })
    next()
  }
}

export default Logger