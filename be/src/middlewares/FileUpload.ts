import type { Request } from 'express'
import multer, { type FileFilterCallback } from 'multer'
import path from 'path'

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
  const allowImageExtensions = ['.docx', '.pdf']
  const fileExtension = path.extname(file.originalname)
  if (!allowImageExtensions.includes(fileExtension)) {
    // return callback(new FileFilterError('Image required', file.fieldname, allowImageExtensions))
  }
  return callback(null, true)
}

const FileUpload = {
  single: (fieldName: string) => multer({ storage: storage, fileFilter: fileFilter }).single(fieldName)
}

export default FileUpload