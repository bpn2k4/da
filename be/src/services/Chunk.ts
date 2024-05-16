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
    },
    raw: true
  })
  if (!file) {
    throw new NotFoundError(`Can not found file ${body.fileId}`)
  }
  const document = await Document.create({
    ...body
  })
  const data = await document.toJSON()
  data.file = file
  data.file.link = ENVIRONMENT.HOST + '/' + data.file.path.slice(5)
  delete data.file.path
  return data
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
    },
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

const getDocument = async ({ params: params_ }: ServiceParams) => {
  const { error, params } = DocumentValidator.validateGetDocument({ params: params_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const document = await Document.findOne({
    where: {
      documentId: params.documentId,
      deleted: false
    },
    include: [
      { model: File, as: 'file' }
    ]
  })
  return document
}

const getDocuments = async ({ query: query_ }: ServiceParams) => {
  const { query, error } = DocumentValidator.validateGetDocuments({ query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const { rows: documents, count } = await Document.findAndCountAll({
    where: {
      deleted: false
    },
    include: [
      { model: File, as: 'file' }
    ],
    limit: query.limit,
    offset: query.limit * query.page
  })
  documents.forEach(item => {
    item.dataValues.file.dataValues.link = ENVIRONMENT.HOST + '/' + item.dataValues.file.dataValues.path.slice(5)
    delete item.dataValues.file.dataValues.path
  })
  return {
    total: count,
    documents,
  }
}
const getChunks = async ({ query: query_ }: ServiceParams) => {
  const { query, error } = DocumentValidator.validateGetDocuments({ query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const { rows: documents, count } = await Document.findAndCountAll({
    where: {
      deleted: false
    },
    include: [
      { model: File, as: 'file' }
    ],
    limit: query.limit,
    offset: query.limit * query.page
  })
  documents.forEach(item => {
    item.dataValues.file.dataValues.link = ENVIRONMENT.HOST + '/' + item.dataValues.file.dataValues.path.slice(5)
    delete item.dataValues.file.dataValues.path
  })
  return {
    total: count,
    documents,
  }
}


const DocumentService = {
  createDocument,
  deleteFile,
  deleteFiles,
  getDocument,
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