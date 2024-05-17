import type { NextFunction, Request, Response } from 'express'
import { DocumentService, FileService } from '@services'
import { STATUS_CODE, STATUS_NAME } from '@configs'

const createMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, file } = req
    const data = await DocumentService.createDocument({ body })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}

const MessageController = {
  createMessage,
}

export default MessageController