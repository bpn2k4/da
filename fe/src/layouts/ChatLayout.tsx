import ChatHistory from "@components/ChatHistory"
import Container from "./Container"


const ChatLayout = ({ children }: ChatLayoutProps) => {

  return (
    <Container className="flex flex-row overflow-hidden">
      <div>
        <ChatHistory />
      </div>
      <div className="flex-1">
        {children}
      </div>
      <div>

      </div>
    </Container>
  )
}

type ChatLayoutProps = {
  children?: React.ReactNode
}

export default ChatLayout