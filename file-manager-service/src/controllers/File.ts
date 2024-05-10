import type { NextFunction, Request, Response } from 'express'
import { FileService } from '@services'
import { STATUS_CODE, STATUS_NAME } from '@configs'


const createFile = async (req: Request, res: Response, next: NextFunction) => {
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
const updateFile = async (req: Request, res: Response, next: NextFunction) => {
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
const deleteFile = async (req: Request, res: Response, next: NextFunction) => {
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
const deleteFiles = async (req: Request, res: Response, next: NextFunction) => {
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
const getFile = async (req: Request, res: Response, next: NextFunction) => {
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
const getFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query } = req
    const data = await FileService.getFiles({ query })
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      ...data
    })
  } catch (error) {
    next(error)
  }
}


const FileController = {
  createFile,
  deleteFile,
  deleteFiles,
  getFile,
  getFiles,
  updateFile,
}

export default FileController