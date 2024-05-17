import Conversation from './Conversation'
import Chunk from './Chunk'
import Document from './Document'
import Message from './Message'
import File from './File'
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
  Message.belongsTo(Conversation, {
    foreignKey: 'conversationId',
    as: 'conversation'
  })
  Document.hasMany(Chunk, {
    foreignKey: 'conversationId',
    as: 'messages'
  })
}

const initModel = async (alter = true, force = true) => {
  createAssociation()
  // return sql.sync({
  //   alter: alter,
  //   force: force
  // })
}

export {
  Conversation,
  Chunk,
  Document,
  Message,
  File,
  initModel
}