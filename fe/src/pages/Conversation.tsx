import ChatInput from "@components/ChatInput"
import { useNavigate } from 'react-router-dom'
import ItemMessage from "@components/ItemMessage"
import MessageList from "@components/MessageList"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { Message } from "@types"
import Api from "@apis"
import Utils from "@utils"
import { API_URL } from "@configs"



const Conversation = () => {

  const { conversationId = "" } = useParams()
  const navigate = useNavigate()

  const [messages, setMessages] = useState<Message[]>([])
  const [value, setValue] = useState("")
  const [placeHolderUserMessage, setPlaceHolderUserMessage] = useState(Utils.tmp.message)
  const [placeHolderSystemMessage, setPlaceHolderSystemMessage] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const getListMessage = async () => {
    const response = await Api.ConversationApi.getMessagesInConversation(conversationId)
    if (response.status == Api.STATUS.SUCCESS) {
      setMessages(response.messages)
    }
    else {
      navigate('/', { replace: true })
    }
  }

  const onClickSend = async () => {
    if (isStreaming) {
      return
    }
    if (value == "" || value.length < 5) {
      return
    }
    setPlaceHolderUserMessage(value)
    setValue("")
    sendChat(value)
  }

  const sendChat = async (message: string) => {
    try {
      const response = await fetch(
        `${API_URL}/api/v1/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            conversationId: conversationId,
            message: message
          })
        }
      )
      console.log(response.status);
      if (response.status != 200) {
        const res = await response.json()
        throw new Error()
      }
      if (response.body != null) {
        const reader = response.body
          .pipeThrough(new TextDecoderStream())
          .getReader()
        while (true) {
          setIsStreaming(true)
          const { value, done } = await reader.read()
          if (done) break
          try {
            const response = JSON.parse(value)
            setPlaceHolderUserMessage("")
            setPlaceHolderSystemMessage("")
            setMessages([...messages, response.userMessage, response.systemMessage])
          } catch (error) {
            setPlaceHolderSystemMessage((prev: string) => prev + value)
            ref.current?.scrollTo({
              top: ref.current.scrollHeight,
              behavior: 'smooth'
            })
          }
        }
        setIsStreaming(false)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    if (!placeHolderUserMessage) {
      getListMessage()
    }
    if (placeHolderUserMessage) {
      Utils.tmp.message = ""
      sendChat(placeHolderUserMessage)
    }
  }, [conversationId])

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <div className=" flex-1 overflow-y-auto" ref={ref}>
        <div className="w-full max-w-[800px] mx-auto">
          {messages.map(({ messageId, text, role }) => (
            <ItemMessage
              key={messageId}
              role={role}
              content={text} />
          ))}
          {placeHolderUserMessage && (
            <ItemMessage
              role="USER"
              content={placeHolderUserMessage} />
          )}
          {placeHolderSystemMessage && (
            <ItemMessage
              role="SYSTEM"
              content={placeHolderSystemMessage} />
          )}
        </div>
      </div>
      <ChatInput
        value={value}
        onChange={e => setValue(e.target.value)}
        maxRows={6}
        onClickSend={onClickSend} />
    </div>
  )
}

export default Conversation