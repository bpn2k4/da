import Joi, { type ValidationError } from 'joi'
import { DOCUMENT_STATUS, ENVIRONMENT } from '@configs'

const option = { abortEarly: false }

const validateCreateDocument: ValidateCreateDocument = ({ body }) => {
  const bodySchema = Joi.object({
    name: Joi.string().required(),
    fileId: Joi.string(),
    note: Joi.string(),
    status: Joi.string().allow(DOCUMENT_STATUS.ERROR, DOCUMENT_STATUS.EXTRACTED, DOCUMENT_STATUS.PROCESSING),
    numberChunk: Joi.number().min(0)
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, option)
  return { body: bodyValue, error: bodyError }
}

const validateUpdateDocument: ValidateUpdateDocument = ({ body, params }) => {

  const paramsSchema = Joi.object({
    DocumentId: Joi.string().required()
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, option)
  if (paramsError) {
    return { params: paramsValue, error: paramsError }
  }

  const bodySchema = Joi.object({
    Documentname: Joi.string(),
    metadata: Joi.string(),
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, option)
  if (bodyError) {
    return { params: bodyValue, error: bodyError }
  }

  return { params: paramsValue, body: bodyValue, error: undefined }
}

const validateGetDocuments: ValidateGetDocuments = ({ query }) => {
  const schema = Joi.object({
    page: Joi.number().min(0).default(0),
    limit: Joi.number().min(1).max(100).default(20),
  })
  const { value: queryValue, error: queryError } = schema.validate(query, option)
  return { query: queryValue, error: queryError }
}

const validateDeleteDocument: ValidateDeleteDocument = ({ params }) => {
  const paramsSchema = Joi.object({
    DocumentId: Joi.string().required()
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, option)
  return { params: paramsValue, error: paramsError }
}

const DocumentValidator = {
  validateCreateDocument,
  validateUpdateDocument,
  validateGetDocuments,
  validateDeleteDocument
}

type ValidateCreateDocument = (params: ValidationParams) => ({
  body: {
    name: string,
    fileId: string,
    note: string,
    status: string,
    numberChunk: number
  },
  error?: ValidationError
})
type ValidateUpdateDocument = (params: ValidationParams) => ({
  params?: {
    DocumentId: string
  },
  body?: {
    Documentname: string,
    metadata?: string,
  },
  error?: ValidationError
})
type ValidateGetDocuments = (params: ValidationParams) => ({
  query: {
    page: number,
    limit: number,
  },
  error?: ValidationError
})
type ValidateDeleteDocument = (params: ValidationParams) => ({
  params: {
    DocumentId: string,
  },
  error?: ValidationError
})

type ValidationParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
}

export default DocumentValidator