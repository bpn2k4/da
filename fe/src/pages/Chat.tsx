import ChatInput from "@components/ChatInput"
import logo from "@assets/images/logo-bka.png"
import { useState } from "react"

const Chat = () => {

  const [value, setValue] = useState("")

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1">
        </div>
        <div className="w-full max-w-[800px] mx-auto">
          <div className="flex flex-row text-[13px] gap-3 mb-8">
            <div className="flex-1 p-4 rounded-lg bg-rgb-255 dark:bg-rgb-40 cursor-pointer">
              <div className="w-full flex flex-row mb-4 items-center gap-2">
                <div className="w-6 h-6 center">
                  <img
                    className="h-6"
                    src={logo} />
                </div>
                <span>Đại học Bách Khoa Hà Nội</span>
              </div>
              <span>
                Đại học Bách Khoa Hà Nội được thành lập vào năm nào?
              </span>
            </div>
            <div className="flex-1 p-4 rounded-lg bg-rgb-255 dark:bg-rgb-40 cursor-pointer">
              <div className="w-full flex flex-row mb-4 items-center gap-2">
                <div className="w-6 h-6 center">
                  <img
                    className="h-6"
                    src={logo} />
                </div>
                <span>Thông tin tuyển sinh</span>
              </div>
              <span>
                Chỉ tiêu tuyển sinh của Đại học Bách Khoa Hà Nội năm 2024?
              </span>
            </div>
            <div className="flex-1 p-4 rounded-lg bg-rgb-255 dark:bg-rgb-40 cursor-pointer">
              <div className="w-full flex flex-row mb-4 items-center gap-2">
                <div className="w-6 h-6 center">
                  <img
                    className="h-6"
                    src={logo} />
                </div>
                <span>Cẩm nang sinh viên</span>
              </div>
              <span>
                Yêu cầu chuẩn đầu ra ngoại ngữ đối với K64?
              </span>
            </div>
          </div>
        </div>
      </div>
      <ChatInput
        value={value}
        onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default Chat