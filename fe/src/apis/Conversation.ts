import { Conversation } from "@types"
import base from "./base"

const createConversation: CreateConversationApi = () => {
  const url = '/conversations'
  return base.post(url)
}

const ConversationApi = {
  createConversation
}

export default ConversationApi

type CreateConversationApi = () => Promise<{
  status: 'success' | 'fail',
  conversation: Conversation
}>