import base from './base'

const createChat: CreateChatApi = (data) => {
  const url = '/chat'
  return base.post(url, data)
}


const ChatApi = {
  createChat
}

export default ChatApi

type CreateChatApi = (data: {
  conversationId: string,
  message: string
}) => Promise<{
  status: 'success' | 'fail'
}>