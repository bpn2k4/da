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
  return schema.validate(body, option)
}

const FileValidator = {
  validateCreateFile
}

type ValidateCreateFile = (params: { body: any }) => ({
  value: {
    filename: string,
    metadata?: string,
    content: string,
    extension: 'doc' | 'docx' | 'pdf' | 'txt'
  },
  error?: ValidationError
})

export default FileValidator