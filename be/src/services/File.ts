import fs from 'fs/promises'

import { ENVIRONMENT } from '@configs'
import { JoiValidationError, NotFoundError, ValidationError } from '@errors'
import { File } from '@models'
import Utils from '@utils'
import { FileValidator } from '@validations'
import { sql } from '@databases'
import { Op, type WhereOptions } from 'sequelize'


const createFile = async ({ body: body_, file }: ServiceParams) => {
  const { body, error } = FileValidator.validateCreateFile({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  if (file) {
    if (body.content) {
      throw new ValidationError('Only one "file" or "content"')
    }
    const newFile = await File.create({
      ...body,
      size: file.size,
      path: file.path.replace(/\\/g, '/'),
      originName: file.originalname
    })
    const data = await newFile.toJSON()
    data.link = ENVIRONMENT.HOST + '/' + data.path.slice(5)
    delete data.path
    return data
  }
  if (!body.content) {
    throw new ValidationError('Required one of "file" or "content"')
  }
  if (body.extension != 'txt') {
    throw new ValidationError('"extension" must be txt when use field "content"')
  }
  const fileExtension = 'txt'
  const originName = Utils.slugify(body.filename)
  const filename = Utils.randomUUIDV4() + '-' + originName + '.' + fileExtension
  const filePath = ENVIRONMENT.FILE_DESTINATION + '/' + filename
  await Bun.write(filePath, body.content)
  const stat = await fs.stat(filePath)
  const newFile = await File.create({
    ...body,
    size: stat.size,
    path: filePath.replace(/\\/g, '/'),
    originName: originName + '.' + fileExtension
  })
  const data = await newFile.toJSON()
  data.link = ENVIRONMENT.HOST + '/' + data.path.slice(5)
  delete data.path
  return {
    file: data
  }
}

const updateFile = async ({ body: body_, params: params_ }: ServiceParams) => {
  const { body, params, error } = FileValidator.validateUpdateFile({ body: body_, params: params_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const file = await File.findOne({
    where: {
      fileId: params?.fileId,
      deleted: false
    }
  })
  if (!file) {
    throw new NotFoundError('')
  }
  const newFile = await file.update({
    ...body
  })
  const data = await newFile.toJSON()
  data.link = ENVIRONMENT.HOST + '/' + data.path.slice(5)
  delete data.path
  return {
    file: data
  }
}

const deleteFile = async ({ params: params_ }: ServiceParams) => {
  const { params, error } = FileValidator.validateDeleteFile({ params: params_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const file = await File.findOne({
    where: {
      fileId: params?.fileId,
      deleted: false
    }
  })
  if (!file) {
    throw new NotFoundError('')
  }
  await file.update({
    deleted: true
  })
  return { params }
}

const deleteFiles = async () => {

}

const getFile = async () => {

}
const getFiles = async ({ query: query_ }: ServiceParams) => {
  const { query, error } = FileValidator.validateGetFiles({ query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  let where: WhereOptions = {}
  if (typeof (query.q) != 'undefined') {
    where = {
      deleted: false,
      [Op.or]: [
        { filename: { [Op.like]: `%${query.q}%` } },
        { originName: { [Op.like]: `%${query.q}%` } }
      ]
    }
  }
  else {
    where = { deleted: false }
  }
  const { rows: files, count } = await File.findAndCountAll({
    where: where,
    limit: query.limit,
    offset: query.limit * query.page
  })
  files.forEach(item => {
    item.dataValues.link = ENVIRONMENT.HOST + '/' + item.dataValues.path.slice(5)
    delete item.dataValues.path
  })
  return {
    total: count,
    files,
  }
}


const FileService = {
  createFile,
  deleteFile,
  deleteFiles,
  getFile,
  getFiles,
  updateFile,
}

type ServiceParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
  file?: Express.Multer.File,
  files?: Express.Multer.File[],
}

export default FileService