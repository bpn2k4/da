import Joi, { type ValidationError } from 'joi'

const option = { abortEarly: false }

const validateCreateChat: ValidateCreateChat = ({ body }) => {
  const bodySchema = Joi.object({
    conversationId: Joi.string().required(),
    message: Joi.string().required()
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, option)
  return { body: bodyValue, error: bodyError }
}

const ChatValidator = {
  validateCreateChat
}

export default ChatValidator
type ValidationParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
}

type ValidateCreateChat = (params: ValidationParams) => ({
  body: {
    conversationId: string,
    message: string
  },
  error?: ValidationError
})