import { sql } from "@databases"
import { BOOLEAN, STRING, UUID, UUIDV4 } from 'sequelize'

const Metadata = sql.define('files', {
  metadataId: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  fileId: {
    type: UUID,
    allowNull: false
  },
  fieldName: {
    type: STRING,
    allowNull: false
  },
  fieldValue: {
    type: STRING,
    allowNull: false
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  timestamps: true,
  tableName: 'files',
})

export default Metadata