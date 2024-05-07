import type { Request } from 'express'
import multer, { type FileFilterCallback } from 'multer'
import path, { resolve } from 'path'
import { ENVIRONMENT } from '@configs'
import { FileFilterError } from '@errors'

const storage = multer.diskStorage({
  destination(req, file, callback) {
    return callback(null, './data/files')
  },
  filename(req, file, callback) {
    const fileName = crypto.randomUUID() + '-' + file.originalname
    return callback(null, fileName)
  },

})

const fileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
  const fileExtension = path.extname(file.originalname)
  if (!ENVIRONMENT.ALLOW_FILE_EXTENSIONS.includes(fileExtension)) {
    return callback(new FileFilterError(''))
  }
  return callback(null, true)
}

const Multer = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    // fileSize: ENVIRONMENT.FILE_MAX_SIZE * 1024 * 1024,

  }
})

const FileUpload = {
  single: (fieldName: string) => Multer.single(fieldName),
  multi: (fieldName: string) => Multer.array(fieldName, ENVIRONMENT.MAX_NUMBER_FILE_PER_REQUEST)
}

export default FileUpload