import type { NextFunction, Request, Response } from 'express'
import { STATUS_CODES, STATUS_NAMES } from '@configs'


const ErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  console.log(error)

  return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    status: STATUS_NAMES.FAIL
  })
}

export default ErrorHandler