import { Router } from 'express'
import { FileUpload } from '@middlewares'
import { FileController } from '@controllers'

const router = Router()

router.post('/files', FileUpload.single('file'), FileController.createFile)
router.get('/files', FileController.getFiles)
router.get('/files/:fileId', FileController.getFile)
router.patch('/files/:fileId', FileController.updateFile)
router.delete('/files', FileController.deleteFiles)
router.delete('/files/:fileId', FileController.deleteFile)

export default router
