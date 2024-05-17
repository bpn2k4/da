import type { NextFunction, Request, Response } from 'express'
import { STATUS_CODE, STATUS_NAME } from '@configs'


const createChat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
    })
  } catch (error) {
    next(error)
  }
}

const ChatController = {
  createChat
}

export default ChatController