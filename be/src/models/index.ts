import Document from './Document'
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
}

const initModel = async (alter = true, force = false) => {
  createAssociation()
  return sql.sync({
    alter: alter,
    force: force
  })
}

export {
  Document,
  File,
  initModel
}