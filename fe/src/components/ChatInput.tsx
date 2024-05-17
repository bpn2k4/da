import { ChangeEventHandler, KeyboardEventHandler } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

const ChatInput = (props: ChatInputProps) => {

  const { onChange, value, maxRows = 6, onKeyDown, onClickSend } = props

  return (
    <div className="w-full max-w-[800px] mx-auto pb-4 px-3 lg:px-0">
      <div className="w-full bg-rgb-255 dark:bg-rgb-0 rounded-xl pt-4 pb-3 pl-6 pr-1 border-2 dark:border-rgb-65 relative dark:focus-within:border-rgb-80">
        <ReactTextareaAutosize
          className="bg-transparent outline-none resize-none w-full text-sm pr-12"
          value={value}
          onKeyDown={onKeyDown}
          onChange={onChange}
          maxRows={maxRows} />
        <button className="absolute size-8 rounded right-4 top-1/2 -translate-y-1/2 dark:bg-rgb-55" onClick={onClickSend}>
        </button>
      </div>
    </div>
  )
}

type ChatInputProps = {
  value?: any,
  onChange?: ChangeEventHandler<HTMLTextAreaElement>,
  maxRows?: number,
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>,
  onClickSend?: () => void
}

export default ChatInput