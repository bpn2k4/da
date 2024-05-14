import { Document } from "@types"
import base from "./base"

type DocumentApiType = {
  getDocuments: GetDocumentsApi,
  createDocument: CreateDocumentApi,
  deleteDocument: DeleteDocumentApi
}

const DocumentApi: DocumentApiType = {
  getDocuments: (params) => {
    const url = '/documents'
    return base.get(url, { params: params })
  },
  createDocument: (data) => {
    const url = '/documents'
    return base.post(url, data)
  },
  deleteDocument: (documentId) => {
    const url = `/documents/${documentId}`
    return base.delete(url)
  }
}

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


export default DocumentApi