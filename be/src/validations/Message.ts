import Joi, { type ValidationError } from 'joi'

const option = { abortEarly: false }

const validateGetMessages: ValidateGetMessages = ({ query }) => {
  const schema = Joi.object({
    page: Joi.number().min(0).default(0),
    limit: Joi.number().min(1).max(100).default(20),
  })
  const { value: queryValue, error: queryError } = schema.validate(query, option)
  return { query: queryValue, error: queryError }
}

const MessageValidator = {
  validateGetMessages
}

export default MessageValidator
type ValidationParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
}
type ValidateGetMessages = (params: ValidationParams) => ({
  query: {
    page: number,
    limit: number,
  },
  error?: ValidationError
})