import { sql } from "@databases"
import { BOOLEAN, INTEGER, STRING, TEXT, UUID, UUIDV4 } from 'sequelize'


const File = sql.define('files', {
  fileId: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  filename: {
    type: STRING,
    allowNull: false
  },
  originName: {
    type: STRING,
    allowNull: false
  },
  extension: {
    type: STRING,
    allowNull: false
  },
  path: {
    type: STRING,
    allowNull: false
  },
  size: {
    type: INTEGER,
    allowNull: false
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  metadata: {
    type: TEXT,
    allowNull: false,
    defaultValue: "{}"
  }
}, {
  timestamps: true,
  tableName: 'files',
  indexes: [
    {
      name: 'file_manager_service_deleted_index',
      fields: ['deleted'],
    }
  ]
})

export default File