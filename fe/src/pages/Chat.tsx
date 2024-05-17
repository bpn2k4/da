import ChatInput from "@components/ChatInput"
import logo from "@assets/images/logo-bka.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Api from "@apis"
import Utils from "@utils"

const Chat = () => {

  const [value, setValue] = useState("")

  const navigate = useNavigate()

  const onClickSend = async () => {
    if (value == "" || value.length < 5) {
      return
    }
    const response = await Api.ConversationApi.createConversation({ title: value })
    if (response.status == Api.STATUS.SUCCESS) {
      Utils.tmp.message = value
      navigate(`/c/${response.conversation.conversationId}`)
    }
  }

  const welcomeMessages = [
    { title: 'Đại học Bách Khoa Hà Nội', question: 'Đại học Bách Khoa Hà Nội được thành lập vào năm nào?' },
    { title: 'Thông tin tuyển sinh', question: 'Chỉ tiêu tuyển sinh của Đại học Bách Khoa Hà Nội năm 2024?' },
    { title: 'Đại học Bách Khoa Hà Nội', question: 'Đại học Bách Khoa Hà Nội được thành lập vào năm nào?' },
  ]

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1">
        </div>
        <div className="w-full max-w-[800px] mx-auto">
          <div className="flex flex-col px-3 lg:flex-row lg:mx-0 text-[13px] gap-3 mb-8">
            {welcomeMessages.map(({ question, title }, index) => (
              <div key={index} className="flex-1 p-4 rounded-lg bg-rgb-255 dark:bg-rgb-40 cursor-pointer">
                <div className="w-full flex flex-row mb-4 items-center gap-2">
                  <div className="w-6 h-6 center">
                    <img
                      className="h-6"
                      src={logo} />
                  </div>
                  <span>{title}</span>
                </div>
                <span>
                  {question}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatInput
        value={value}
        onClickSend={onClickSend}
        onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default Chat