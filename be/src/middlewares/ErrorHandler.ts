import type { NextFunction, Request, Response } from 'express'
import { STATUS_CODE, STATUS_NAME } from '@configs'


const ErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  console.log(error)

  return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
    status: STATUS_NAME.FAIL
  })
}

export default ErrorHandler