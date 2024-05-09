import type { NextFunction, Request, Response } from 'express'
import { ERROR_NAME, STATUS_CODE, STATUS_NAME } from '@configs'


const ErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  console.log("error", error)
  switch (error.name) {
    case ERROR_NAME.JOI_VALIDATION_ERROR:
    case ERROR_NAME.VALIDATION_ERROR:
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({
          status: STATUS_NAME.FAIL,
          error: error.name,
          message: error.message
        })
  }

  return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
    status: STATUS_NAME.FAIL
  })
}

export default ErrorHandler