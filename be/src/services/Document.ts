import fs from 'fs/promises'

import { ENVIRONMENT } from '@configs'
import { JoiValidationError, NotFoundError, ValidationError } from '@errors'
import { Document, File } from '@models'
import Utils from '@utils'
import { DocumentValidator, FileValidator } from '@validations'
import { sql } from '@databases'


const createDocument = async ({ body: body_ }: ServiceParams) => {
  const { body, error } = DocumentValidator.validateCreateDocument({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const file = await File.findOne({
    where: {
      fileId: body.fileId,
      deleted: false
    }
  })
  if (!file) {
    throw new NotFoundError('')
  }
  const document = await Document.create({
    ...body
  })
  return document
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
  return data
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
  return params
}

const deleteFiles = async () => {

}

const getFile = async () => {

}
const getDocuments = async ({ query: query_ }: ServiceParams) => {
  const { query, error } = FileValidator.validateGetFiles({ query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const { rows: files, count } = await File.findAndCountAll({
    where: {
      deleted: false
    },
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


const DocumentService = {
  createDocument,
  deleteFile,
  deleteFiles,
  getFile,
  getDocuments,
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

export default DocumentService