export type File = {
  fileId: string,
  filename: string,
  originName: string,
  extension: string,
  size: number,
  deleted: string,
  metadata: string,
  link: string,
  createdAt: string,
  updatedAt: string,
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
}