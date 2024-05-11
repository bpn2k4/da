import ChatInput from "@components/ChatInput"
import MessageList from "@components/MessageList"

const Chat = () => {

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <MessageList />
      <ChatInput />
    </div>
  )
}

export default Chat