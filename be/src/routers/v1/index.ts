import { Router } from 'express'
import { FileUpload } from '@middlewares'
import {
  ChatController,
  ConversationController,
  DocumentController,
  FileController,
  MessageController
} from '@controllers'

const router = Router()

router.post('/files', FileUpload.single('file'), FileController.createFile)
router.get('/files', FileController.getFiles)
router.get('/files/:fileId', FileController.getFile)
router.patch('/files/:fileId', FileController.updateFile)
router.delete('/files', FileController.deleteFiles)
router.delete('/files/:fileId', FileController.deleteFile)

router.post('/documents', DocumentController.createDocument)
router.get('/documents', DocumentController.getDocuments)
router.get('/documents/:documentId', DocumentController.getDocument)
router.patch('/documents/:documentId', DocumentController.getDocument)
router.delete('/documents', DocumentController.getDocument)
router.delete('/documents/:documentId', DocumentController.getDocument)
router.get('/documents/:documentId/chunks', DocumentController.getChunksInDocument)
router.post('/documents/:documentId/chunk', DocumentController.chunkDocument)
router.get('/documents/:documentId/sync', DocumentController.syncDocument)

router.post('/conversations', ConversationController.createConversation)
router.get('/conversations', ConversationController.getConversations)
router.get('/conversations/:conversationId/messages', ConversationController.getMessagesInConversation)

router.get('/messages', MessageController.createMessage)

router.post('/chat', ChatController.createChat)

export default router
