import Joi, { type ValidationError } from 'joi'

const option = { abortEarly: false }

const validateCreateFiles: ValidateCreateFiles = ({ body }) => {
  const schema = Joi.object({
    filename: Joi.string().required(),
    metadata: Joi.object().pattern(
      Joi.string(),
      Joi.string().required()
    )
  })
  return schema.validate(body, option)
}

const FileValidator = {
  validateCreateFiles
}

type ValidateCreateFiles = (params: { body: any }) => ({
  value: {

  },
  error?: ValidationError
})

export default FileValidator