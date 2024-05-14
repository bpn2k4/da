import { twMerge } from "tailwind-merge"

const CheckBox = (props: CheckBoxProps) => {

  const { checked, onClick, label, className, cx } = props

  return (
    <button
      className={twMerge("flex flex-row text-xs items-center gap-2 text-[#4A5677]", className, cx?.wrapper)} onClick={onClick}>
      <div className={twMerge(
        "w-4 h-4 rounded center overflow-hidden bg-[#dbe3ef]",
        cx?.check
      )}>
        <Check
          className={twMerge("transition-all origin-center", checked ? 'scale-100' : 'scale-0')} />
      </div>
      {label && (
        <span className={twMerge("font-semibold", cx?.label)}>{label}</span>
      )}
    </button>
  )
}


type CheckBoxProps = {
  checked?: boolean,
  onClick?: () => void,
  label?: string,
  className?: string,
  cx?: {
    wrapper?: string,
    check?: string,
    label?: string
  }
}

const Check = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 14" className={twMerge("w-4 h-4 fill-[#5180FB]", className)}>
    <path d="M12 0C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0H12ZM10.5938 5.625C10.9375 5.28125 10.9375 4.75 10.5938 4.40625C10.25 4.0625 9.71875 4.0625 9.375 4.40625L6 7.78125L4.59375 6.40625C4.25 6.0625 3.71875 6.0625 3.375 6.40625C3.03125 6.75 3.03125 7.28125 3.375 7.625L5.375 9.625C5.71875 9.96875 6.25 9.96875 6.59375 9.625L10.5938 5.625Z" />
  </svg>
)

export default CheckBox