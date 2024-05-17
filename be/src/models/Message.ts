import { sql } from '@databases'
import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize'

const Message = sql.define('message', {
  messageId: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  conversationId: {
    type: UUID,
    allowNull: false
  },
  role: {
    type: STRING,
    allowNull: false
  },
  text: {
    type: TEXT,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'messages',
})
export default Message