import { Router } from 'express'
import { FileUpload } from '@middlewares'
import { FileController } from '@controllers'

const router = Router()


router.post('/files', FileUpload.single('file'), FileController.createFile)

export default router
