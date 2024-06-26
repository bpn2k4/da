import { sql } from '@databases'
import { BOOLEAN, INTEGER, STRING, TEXT, UUID, UUIDV4 } from 'sequelize'
import { DOCUMENT_CHUNKING_METHOD, DOCUMENT_STATUS } from '@configs'


const Document = sql.define('document', {
  documentId: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false
  },
  fileId: {
    type: UUID,
    allowNull: false
  },
  numberChunk: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  chunkMethod: {
    type: STRING,
    allowNull: false,
    defaultValue: DOCUMENT_CHUNKING_METHOD.STRUCT
  },
  status: {
    type: STRING,
    allowNull: false,
    defaultValue: DOCUMENT_STATUS.CREATED
  },
  note: {
    type: TEXT,
    allowNull: true
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

}, {
  timestamps: true,
  tableName: 'documents',
  indexes: [
    {
      name: 'document_status_index',
      fields: ['status'],
    },
    {
      name: 'document_name_index',
      fields: ['name'],
      type: 'FULLTEXT',
    }
  ]
})

export default Document