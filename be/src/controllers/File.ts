import type { NextFunction, Request, Response } from 'express'
import { FileService } from '@services'
import { STATUS_CODE } from '@configs'


const createFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, file } = req
    const data = await FileService.createFile({ body, file })
    return res.status(STATUS_CODE.SUCCESS).json(data)
  } catch (error) {
    next(error)
  }
}

const FileController = {
  createFile
}

export default FileController