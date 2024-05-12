import { File } from "@types"
import base from "./base"

type FileApiType = {
  getFiles: GetFilesApi
}

const FileApi: FileApiType = {
  getFiles: (params) => {
    const url = '/files'
    return base.get(url, { params: params })
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


export default FileApi