export type File = {
  fileId: string,
  filename: string,
  originName: string,
  extension: 'pdf' | 'doc' | 'docx' | 'txt' | 'raw',
  size: number,
  deleted: string,
  metadata: string,
  link: string,
  createdAt: string,
  updatedAt: string,
  checked: boolean,
}

export type Document = {
  documentId: string,
  name: string,
  fileId: string,
  file: File
  numberChunk: number,
  chunkMethod: 'STRUCT' | 'TREE',
  status: 'CREATED' | 'EXTRACTED' | 'PROCESSING' | 'ERROR',
  note: string,
  deleted: string,
  createdAt: string,
  updatedAt: string,
  checked: boolean,
}

export type Chunk = {
  chunkId: string,
  documentId: string,
  document: Document,
  title: string,
  text: string,
  index: number,
  page: number,
  end: boolean,
  createdAt: string,
  updatedAt: string,
  checked: boolean,
}