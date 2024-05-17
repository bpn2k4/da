import type { NextFunction, Request, Response } from 'express'
import { ConversationService } from '@services'
import { STATUS_CODE, STATUS_NAME } from '@configs'

const createConversation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const data = await ConversationService.createConversation({ body })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}

const getConversations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req
    const data = await ConversationService.getConversations({ query })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const getMessagesInConversation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = req
    const data = await ConversationService.getMessagesInConversation({ params })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}

const ConversationController = {
  createConversation,
  getMessagesInConversation,
  getConversations
}

export default ConversationController