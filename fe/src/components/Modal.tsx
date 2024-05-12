

import { twMerge } from 'tailwind-merge'

import { useDebounce } from '@hooks'

export const Modal = (props: ModalProps) => {

  const { className, show, children, onClickOutsize } = props

  const _show = useDebounce(show, show ? 0 : 400)
  const __show = useDebounce(show, show ? 100 : 0)

  return _show ? (
    <div
      className={twMerge(
        "z-[99] text-sm fixed offset-0 bg-black/50 center transition-all duration-300 origin-top",
        __show ? "opacity-100" : "opacity-0",
        className
      )}>
      <div
        className="absolute offset-0 z-[1]"
        onClick={onClickOutsize} />
      {children}
    </div>
  ) : <></>
}

type ModalProps = {
  className?: string,
  show?: boolean,
  children?: React.ReactNode,
  onClickOutsize?: () => void
}

export default Modal