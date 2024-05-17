import { Document } from "@types"
import base from "./base"

const getDocuments: GetDocumentsApi = (params) => {
  const url = '/documents'
  return base.get(url, { params: params })
}

const createDocument: CreateDocumentApi = (data) => {
  const url = '/documents'
  return base.post(url, data)
}
const deleteDocument: DeleteDocumentApi = (documentId) => {
  const url = `/documents/${documentId}`
  return base.delete(url)
}
const DocumentApi = {
  getDocuments,
  createDocument,
  deleteDocument
}

export default DocumentApi


type GetDocumentsApi = (params: {
  page: number,
  limit: number,
  q?: string
}) => Promise<{
  status: 'success' | 'fail',
  total: number,
  documents: Document[]
}>

type CreateDocumentApi = (data: {
  fileId: string,
  name: string
}) => Promise<{
  status: 'success' | 'fail',
  document: Document
}>
type DeleteDocumentApi = (documentId: string) => Promise<{
  status: 'success' | 'fail',
}>