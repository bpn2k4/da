import { File } from "@types"
import base from "./base"

type FileApiType = {
  getFiles: GetFilesApi,
  createFile: CreateFileApi,
  deleteFile: DeleteFileApi
}

const FileApi: FileApiType = {
  getFiles: (params) => {
    const url = '/files'
    return base.get(url, { params: params })
  },
  createFile: (data) => {
    const url = '/files'
    return base.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  deleteFile: (fileId) => {
    const url = `/files/${fileId}`
    return base.delete(url)
  }
}

type GetFilesApi = (params: {
  page: number,
  limit: number,
  q?: string
}) => Promise<{
  status: 'success' | 'fail',
  total: number,
  files: File[]
}>

type CreateFileApi = (data: FormData) => Promise<{
  status: 'success' | 'fail',
  file: File
}>
type DeleteFileApi = (fileId: string) => Promise<{
  status: 'success' | 'fail',
}>


export default FileApi