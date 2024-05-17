import { sql } from '@databases'
import { BOOLEAN, INTEGER, TEXT, UUID, UUIDV4 } from 'sequelize'

const Chunk = sql.define('chunk', {
  chunkId: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  documentId: {
    type: UUID,
    allowNull: false
  },
  title: {
    type: TEXT,
    allowNull: false,
    defaultValue: ""
  },
  text: {
    type: TEXT,
    allowNull: false,
    defaultValue: ""
  },
  index: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  page: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  end: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  timestamps: true,
  tableName: 'chunks',
  indexes: [
    {
      name: 'chunk_title_index',
      fields: ['title'],
      type: 'FULLTEXT'
    },
    {
      name: 'chunk_text_index',
      fields: ['text'],
      type: 'FULLTEXT',
    },
  ]
})

export default Chunk