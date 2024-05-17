import ChatInput from "@components/ChatInput"
import MessageList from "@components/MessageList"

const Conversation = () => {

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <MessageList />
      <ChatInput />
    </div>
  )
}

export default Conversation