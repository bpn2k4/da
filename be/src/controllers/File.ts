import type { NextFunction, Request, Response } from 'express'
import { FileService } from '@services'
import { STATUS_CODE } from '@configs'


const createFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, file } = req
    const data = await FileService.createFiles({ body, file })
    return res.status(STATUS_CODE.SUCCESS).json(data)
  } catch (error) {
    next(error)
  }
}

const FileController = {
  createFiles
}

export default FileController