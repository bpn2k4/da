import { twMerge } from "tailwind-merge"

const ItemMessage = ({ content, role }: ItemMessageProps) => {

  return (
    <div className={twMerge(
      "p-4 dark:bg-rgb-40 bg-rgb-255 my-6 rounded-3xl",
      role == 'user' ? 'ml-10 rounded-br-none' : 'mr-10 rounded-bl-none'
    )}>
      {content}
    </div>
  )
}

type ItemMessageProps = {
  role: 'user' | 'bot',
  content?: any
}

export default ItemMessage