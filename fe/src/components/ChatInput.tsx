import { useState } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"

const ChatInput = () => {

  const [value, setValue] = useState("")

  return (
    <div className="w-full max-w-[800px] mx-auto pb-4">
      <div className="w-full rounded-xl pt-4 pb-3 pl-6 pr-1 border-2 dark:border-rgb-65 relative dark:focus-within:border-rgb-80">
        <ReactTextareaAutosize
          className="bg-transparent outline-none resize-none w-full text-sm pr-12"
          value={value}
          onChange={e => setValue(e.target.value)}
          maxRows={7} />
        <button className="absolute size-8 rounded right-4 top-1/2 -translate-y-1/2 dark:bg-rgb-55">
        </button>
      </div>
    </div>
  )
}

export default ChatInput