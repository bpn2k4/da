import Joi, { type ValidationError } from 'joi'

const option = { abortEarly: false }

const validateCreateConversation: ValidateCreateConversation = ({ body }) => {
  const bodySchema = Joi.object({
    title: Joi.string().required()
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, option)
  return { body: bodyValue, error: bodyError }
}

const validateGetConversations: ValidateGetConversations = ({ query }) => {
  const schema = Joi.object({
    page: Joi.number().min(0).default(0),
    limit: Joi.number().min(1).max(100).default(20),
  })
  const { value: queryValue, error: queryError } = schema.validate(query, option)
  return { query: queryValue, error: queryError }
}

const validateGetMessagesInConversation: ValidateGetMessagesInConversation = ({ params }) => {
  const paramsSchema = Joi.object({
    conversationId: Joi.string().required()
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, option)
  return { params: paramsValue, error: paramsError }
}


const ConversationValidator = {
  validateCreateConversation,
  validateGetConversations,
  validateGetMessagesInConversation
}

export default ConversationValidator

type ValidationParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
}

type ValidateCreateConversation = (params: ValidationParams) => ({
  body: {
    title: string
  },
  error?: ValidationError
})

type ValidateGetConversations = (params: ValidationParams) => ({
  query: {
    page: number,
    limit: number,
  },
  error?: ValidationError
})

type ValidateGetConversation = (params: ValidationParams) => ({
  params: {
    conversationId: string,
  },
  error?: ValidationError
})
type ValidateGetMessagesInConversation = (params: ValidationParams) => ({
  params: {
    conversationId: string,
  }
  error?: ValidationError
})