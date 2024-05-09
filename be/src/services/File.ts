import { FileValidator } from '@validations'
import { JoiValidationError, ValidationError } from '@errors'
import Utils from '@utils'
import { ENVIRONMENT } from '@configs'
import { File } from '@models'
import fs from 'fs/promises'

const createFile = async ({ body, file }: CreateFileParams) => {
  const { value, error } = FileValidator.validateCreateFile({ body })
  if (error) {
    throw new JoiValidationError(error)
  }
  if (file) {
    if (value.content) {
      throw new ValidationError('Only one "file" or "content"')
    }
    const newFile = await File.create({
      ...value,
      size: file.size,
      path: file.path.replace(/\\/g, '/'),
      originName: file.originalname
    })
    const data = await newFile.toJSON()
    data.link = ENVIRONMENT.HOST + '/' + data.path.slice(5)
    delete data.path
    return data
  }
  if (!value.content) {
    throw new ValidationError('Required one of "file" or "content"')
  }
  if (value.extension != 'txt') {
    throw new ValidationError('"extension" must be txt when use field "content"')
  }
  const fileExtension = 'txt'
  const filename = Utils.randomUUIDV4() + '.' + fileExtension
  const filePath = ENVIRONMENT.FILE_DESTINATION + '/' + filename
  await Bun.write(filePath, value.content)
  const stat = await fs.stat(filePath)
  const newFile = await File.create({
    ...value,
    size: stat.size,
    path: filePath.replace(/\\/g, '/'),
    originName: filename
  })
  const data = await newFile.toJSON()
  data.link = ENVIRONMENT.HOST + '/' + data.path.slice(5)
  delete data.path
  return data
}

const FileService = {
  createFile
}


type CreateFileParams = {
  body: any,
  file?: Express.Multer.File | undefined
}

export default FileService