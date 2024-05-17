import { ConversationValidator } from "@validations"
import { JoiValidationError, NotFoundError } from "@errors"
import { Conversation, Message } from "@models"

const getMessagesInConversation = async ({ params: params_ }: ServiceParams) => {
  const { params, error } = ConversationValidator.validateGetMessagesInConversation({ params: params_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const conversation = await Conversation.findOne({
    where: {
      conversationId: params.conversationId,
    }
  })
  if (!conversation) {
    throw new NotFoundError(params.conversationId)
  }
  const { rows: messages, count } = await Message.findAndCountAll({
    where: { conversationId: params.conversationId }
  })
  return { messages, total: count }
}

const createConversation = async ({ body: body_ }: ServiceParams) => {
  const { body, error } = ConversationValidator.validateCreateConversation({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const conversation = await Conversation.create({
    title: body.title
  })
  const data = await conversation.toJSON()
  return { conversation: data }
}

const getConversations = async ({ query: query_ }: ServiceParams) => {
  const { query, error } = ConversationValidator.validateGetConversations({ query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const { rows: conversations, count } = await Conversation.findAndCountAll({
    limit: query.limit,
    offset: query.page * query.limit,
    order: [['createdAt', 'DESC']]
  })
  return {
    conversations,
    total: count
  }
}


const ConversationService = {
  getMessagesInConversation,
  createConversation,
  getConversations
}


export default ConversationService

type ServiceParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
  file?: Express.Multer.File,
  files?: Express.Multer.File[],
}