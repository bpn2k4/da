import { sql } from '@databases'
import { BOOLEAN, INTEGER, STRING, TEXT, UUID, UUIDV4 } from 'sequelize'


const Conversation = sql.define('conversation', {
  conversationId: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'conversations',
})

export default Conversation