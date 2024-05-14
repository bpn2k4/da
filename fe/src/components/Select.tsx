import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { IconArrow } from "./Icon"

const Select = (props: SelectProps) => {

  const { className, disable = false, options = [], onSelect, cx, checkBox, value, label, closeAfterSelect = true, position = 'bottom' } = props

  const [show, setShow] = useState(false)

  const menuRef = useRef<any>(null)
  const buttonRef = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) setShow(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const _onSelect = onSelect ?? (_ => { })

  return (
    <div
      className={twMerge(
        'w-40 h-10 rounded border border-[##DBE3EF] flex flex-row items-center pl-2 relative transition-all ring-0 pr-5',
        disable && 'cursor-default opacity-70',
        className,
        cx?.wrapper
      )}>
      <span className={twMerge(
        'absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-300',
        show ? '-rotate-90' : 'rotate-0',
        cx?.icon
      )}>
        <IconArrow className="fill-[#b8bdd2]" />
      </span>
      <span className={twMerge(
        'absolute top-1/2 left-1 -translate-y-1/2 px-1 bg-primary transition-all duration-300 text-primary text-sm',
        value && 'top-0 text-xs font-semibold',
        show && 'top-0 text-xs font-semibold',
        cx?.label
      )}>
        {label}
      </span>
      <span className={twMerge('text-[#5180FB] font-semibold', cx?.value)}>{value}</span>
      <div
        className={twMerge(
          'absolute z-[8] bg-rgb-255 text-[#4A5677] py-[2px] rounded left-0 right-0 transition-all duration-300 overflow-y-auto shadow-primary',
          options.length > 0 && "py-[2px]",
          position == 'bottom' ? 'origin-top top-[calc(100%+4px)]' : 'origin-bottom bottom-[calc(100%+4px)]',
          show ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0',
          cx?.menu
        )}
        ref={menuRef}>
        {options.map((item, index) => (
          <button
            key={index}
            className={twMerge(
              'w-full flex flex-row h-8 items-center gap-1 px-1',
              !item.disable && 'hover:bg-base-242 hover:dark:bg-base-54',
              cx?.item
            )}
            onClick={() => {
              _onSelect(item)
              if (closeAfterSelect) setShow(false)
            }}>
            {checkBox && (
              <CheckBox />
            )}
            <span>{item.display}</span>
          </button>
        ))}
      </div>
      <button
        className='absolute offset-0'
        onClick={() => disable ? 1 : setShow(!show)}
        ref={buttonRef} />
    </div>
  )
}

const CheckBox = (props: CheckBoxProps) => {

  const { checked, onClick, label, className } = props

  return (
    <button
      className={twMerge("flex flex-row text-xs items-center gap-2 text-[#4A5677]", className)} onClick={onClick}>
      <div className="w-4 h-4 rounded center overflow-hidden bg-[#dbe3ef]">
        <Check
          className={twMerge("transition-all origin-center", checked ? 'scale-100' : 'scale-0')} />
      </div>
      <span className="font-semibold">{label}</span>
    </button>
  )
}


type CheckBoxProps = {
  checked?: boolean,
  onClick?: () => void,
  label?: string,
  className?: string
}

type Option = {
  value?: any,
  display?: any,
  disable?: boolean,
  checked?: boolean
}

type SelectProps = {
  className?: string,
  cx?: {
    menu?: string,
    item?: string,
    wrapper?: string,
    value?: string,
    label?: string,
    icon?: string
  },
  options?: Option[],
  disable?: boolean,
  onSelect?: (option: Option) => void,
  checkBox?: boolean,
  value?: any,
  label?: string,
  closeAfterSelect?: boolean,
  position?: 'bottom' | 'top'
}

const Check = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 14" className={twMerge("w-4 h-4 fill-[#5180FB]", className)}>
    <path d="M12 0C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0H12ZM10.5938 5.625C10.9375 5.28125 10.9375 4.75 10.5938 4.40625C10.25 4.0625 9.71875 4.0625 9.375 4.40625L6 7.78125L4.59375 6.40625C4.25 6.0625 3.71875 6.0625 3.375 6.40625C3.03125 6.75 3.03125 7.28125 3.375 7.625L5.375 9.625C5.71875 9.96875 6.25 9.96875 6.59375 9.625L10.5938 5.625Z" />
  </svg>
)

export default Select

