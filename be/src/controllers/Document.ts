import type { NextFunction, Request, Response } from 'express'
import { DocumentService, FileService } from '@services'
import { STATUS_CODE, STATUS_NAME } from '@configs'


const createDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, file } = req
    const data = await DocumentService.createDocument({ body })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const updateDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, params } = req
    const data = await FileService.updateFile({ body, params })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const deleteDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = req
    const data = await FileService.deleteFile({ params })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const deleteDocuments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, file } = req
    const data = await FileService.createFile({ body, file })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const getDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = req
    const data = await DocumentService.getDocument({ params })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const getDocuments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req
    const data = await DocumentService.getDocuments({ query })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const getChunksInDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req
    const data = await DocumentService.getDocuments({ query })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const syncDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req
    const data = await DocumentService.getDocuments({ query })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}
const chunkDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req
    const data = await DocumentService.getDocuments({ query })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}



const DocumentController = {
  createDocument,
  deleteDocument,
  deleteDocuments,
  getDocument,
  getDocuments,
  updateDocument,
  getChunksInDocument,
  syncDocument,
  chunkDocument
}

export default DocumentController