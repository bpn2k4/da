import Joi, { type ValidationError } from 'joi'
import { ENVIRONMENT } from '@configs'

const option = { abortEarly: false }

const validateCreateFile: ValidateCreateFile = ({ body }) => {
  const schema = Joi.object({
    filename: Joi.string().required(),
    metadata: Joi.string(),
    content: Joi.string(),
    extension: Joi.string().valid(...ENVIRONMENT.ALLOW_FILE_EXTENSIONS).required()
  })
  const { value: bodyValue, error: bodyError } = schema.validate(body, option)
  return { body: bodyValue, error: bodyError }
}

const validateUpdateFile: ValidateUpdateFile = ({ body, params }) => {

  const paramsSchema = Joi.object({
    fileId: Joi.string().required()
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, option)
  if (paramsError) {
    return { params: paramsValue, error: paramsError }
  }

  const bodySchema = Joi.object({
    filename: Joi.string(),
    metadata: Joi.string(),
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, option)
  if (bodyError) {
    return { params: bodyValue, error: bodyError }
  }

  return { params: paramsValue, body: bodyValue, error: undefined }
}

const validateGetFiles: ValidateGetFiles = ({ query }) => {
  const schema = Joi.object({
    page: Joi.number().min(0).default(0),
    limit: Joi.number().min(1).max(100).default(20),
    q: Joi.string()
  })
  const { value: queryValue, error: queryError } = schema.validate(query, option)
  return { query: queryValue, error: queryError }
}

const validateDeleteFile: ValidateDeleteFile = ({ params }) => {
  const paramsSchema = Joi.object({
    fileId: Joi.string().required()
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, option)
  return { params: paramsValue, error: paramsError }
}

const FileValidator = {
  validateCreateFile,
  validateUpdateFile,
  validateGetFiles,
  validateDeleteFile
}

type ValidateCreateFile = (params: ValidationParams) => ({
  body: {
    filename: string,
    metadata?: string,
    content: string,
    extension: 'doc' | 'docx' | 'pdf' | 'txt'
  },
  error?: ValidationError
})
type ValidateUpdateFile = (params: ValidationParams) => ({
  params?: {
    fileId: string
  },
  body?: {
    filename: string,
    metadata?: string,
  },
  error?: ValidationError
})
type ValidateGetFiles = (params: ValidationParams) => ({
  query: {
    page: number,
    limit: number,
    q?: string
  },
  error?: ValidationError
})
type ValidateDeleteFile = (params: ValidationParams) => ({
  params: {
    fileId: string,
  },
  error?: ValidationError
})

type ValidationParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
}

export default FileValidator