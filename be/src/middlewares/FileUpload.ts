import type { Request } from 'express'
import multer, { type FileFilterCallback } from 'multer'
import path from 'path'
import { ENVIRONMENT } from '@configs'
import { FileFilterError } from '@errors'
import Utils from '@utils'

const storage = multer.diskStorage({
  destination(req, file, callback) {
    return callback(null, './data/files')
  },
  filename(req, file, callback) {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    const extension = file.originalname.split('.').at(-1)
    const name = file.originalname.split('.').slice(0, -1).join('.')
    const fileName = Utils.randomUUIDV4() + '-' + Utils.slugify(name) + '.' + extension
    return callback(null, fileName)
  },

})

const fileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
  const fileExtension = path.extname(file.originalname).slice(1) // .txt -> txt
  if (!ENVIRONMENT.ALLOW_FILE_EXTENSIONS.includes(fileExtension)) {
    return callback(new FileFilterError(''))
  }
  return callback(null, true)
}

const Multer = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
  }
})

const FileUpload = {
  single: (fieldName: string) => Multer.single(fieldName),
  multi: (fieldName: string) => Multer.array(fieldName, ENVIRONMENT.MAX_NUMBER_FILE_PER_REQUEST)
}

export default FileUpload