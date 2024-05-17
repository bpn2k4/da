import { Conversation, Message } from "@types"
import base from "./base"

const createConversation: CreateConversationApi = (data) => {
  const url = '/conversations'
  return base.post(url, data)
}

const getMessagesInConversation: GetMessagesInConversation = (conversationId) => {
  const url = `/conversations/${conversationId}/messages`
  return base.get(url)
}
const getConversations: GetConversations = (params) => {
  const url = `/conversations`
  return base.get(url, { params: params })
}

const ConversationApi = {
  createConversation,
  getMessagesInConversation,
  getConversations
}

export default ConversationApi

type CreateConversationApi = (data: {
  title: string
}) => Promise<{
  status: 'success' | 'fail',
  conversation: Conversation
}>
type GetMessagesInConversation = (conversationId: string) => Promise<{
  status: 'success' | 'fail',
  total: number,
  messages: Message[]
}>
type GetConversations = (params: {
  page: number,
  limit: number
}) => Promise<{
  status: 'success' | 'fail',
  total: number,
  conversations: Conversation[]
}>