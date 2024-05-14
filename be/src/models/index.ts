import Document from './Document'
import File from './File'
import Chunk from './Chunk'
import { sql } from '@databases'

const createAssociation = () => {
  Document.belongsTo(File, {
    foreignKey: 'fileId',
    as: 'file'
  })
  File.hasMany(Document, {
    foreignKey: 'fileId',
    as: 'documents'
  })
  Chunk.belongsTo(Document, {
    foreignKey: 'documentId',
    as: 'document'
  })
  Document.hasMany(Chunk, {
    foreignKey: 'documentId',
    as: 'chunks'
  })
}

const initModel = async (alter = true, force = false) => {
  createAssociation()
  // return sql.sync({
  //   alter: alter,
  //   force: force
  // })
}

export {
  Document,
  File,
  initModel
}