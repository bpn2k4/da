import { useId, useState } from "react"
import Modal from "./Modal"
import { twMerge } from "tailwind-merge"
import Utils from "@utils"

type FileModalConfig = {
  type: 'create' | 'view'
}

const defaultFileModalConfig: FileModalConfig = {
  type: 'create'
}

const FileModal = () => {

  const [show, setShow] = useState(true)
  const [file, setFile] = useState<any>(null)
  const fileInputId = useId()
  const [size, setSize] = useState<number>(0)

  const [config, setConfig] = useState<FileModalConfig>(defaultFileModalConfig)

  return (
    <Modal
      show={show}
      onClickOutsize={() => setShow(false)}>
      <div className='z-[2] w-full max-w-[600px] min-h-[200px] max-h-[calc(100dvh-40px)] overflow-hidden flex flex-col bg-rgb-255 text-rgb-15 relative rounded-lg text-[13px]'>
        <div className="center text-[#4A5677] font-semibold border-b border-[#E4E6EF]">
          <div className="w-full center h-12">File</div>
        </div>
        <div className="bg-[#F6F7FB] overflow-y-auto px-4 py-4">
          <div className="w-full text-xs">
            <div className="text-[#9EA5BD] mb-1">Name</div>
            <div className="h-9 w-full rounded-md border border-[#DBE3EF] overflow-hidden">
              <input
                className="w-full h-full outline-none px-2" />
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="text-[#9EA5BD] mb-1">File</div>
            <div className="flex flex-row items-center gap-3">
              <div>{file?.name}</div>
              <input
                id={fileInputId}
                onChange={e => {
                  const file = e.target.files ? e.target.files[0] : undefined
                  console.log(file);
                  if (file) {
                    setSize(file.size)
                    setFile(file)
                  }
                }}
                className="w-0 h-0"
                type="file" />
              <label htmlFor={fileInputId} className="h-9 w-20 rounded-md border cursor-pointer center">
                Select
              </label>
            </div>
          </div>
          <div className="w-full mt-3 flex flex-row">
            <div>
              <div className="text-[#9EA5BD] mb-1">Type</div>
              <div className="w-full flex flex-row gap-6 items-center">
                <CheckBox
                  label="PDF" />
                <CheckBox
                  label="DOCX" />
                <CheckBox
                  label="DOC" />
                <CheckBox
                  label="TXT" />
                <CheckBox
                  label="RAW" />
              </div>
            </div>
            <div className="ml-12">
              <div className="text-[#9EA5BD] mb-1">Size</div>
              <div className="font-semibold text-[#4A5677]">
                <div className="">{Utils.bytesToDisplayString(size)}</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="text-[#9EA5BD] mb-1">Content</div>
            <div className="w-full h-40 rounded-md border border-[#E4E6EF] overflow-hidden">
              <textarea
                className="resize-none outline-none w-full h-full p-2" />
            </div>
          </div>
        </div>
        <div className="center text-[#4A5677] font-semibold border-t border-[#E4E6EF]">
          <div className="h-15 center gap-2">
            <button className="center w-40 h-10 rounded-lg bg-[#F2F3F7] border border-[#E4E6EF]">
              Cancel
            </button>
            <button className="center w-40 h-10 rounded-lg bg-[#3ACE5A] border border-[#2AB448] text-rgb-255">
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

const CheckBox = (props: CheckBoxProps) => {

  const { checked, onClick, label, className } = props

  return (
    <button
      className={twMerge("flex flex-row text-xs items-center gap-2 text-[#4A5677]", className)} onClick={onClick}>
      <div className="w-4 h-4 rounded-full center overflow-hidden bg-[#dbe3ef]">
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

const TextField = (props: TextFieldProps) => {
  const { title, className } = props
  return (
    <div className={twMerge("w-full text-xs", className)}>
      <div className="text-[#9EA5BD] mb-1">{title}</div>
      <div className="h-9 w-full rounded-md border border-[#DBE3EF] overflow-hidden">
        <input
          className="w-full h-full outline-none px-2" />
      </div>
    </div>
  )
}

type TextFieldProps = {
  className?: string,
  title?: string
}

const Check = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 14" className={twMerge("w-4 h-4 fill-[#5180FB]", className)}>
    <path d="M12 0C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0H12ZM10.5938 5.625C10.9375 5.28125 10.9375 4.75 10.5938 4.40625C10.25 4.0625 9.71875 4.0625 9.375 4.40625L6 7.78125L4.59375 6.40625C4.25 6.0625 3.71875 6.0625 3.375 6.40625C3.03125 6.75 3.03125 7.28125 3.375 7.625L5.375 9.625C5.71875 9.96875 6.25 9.96875 6.59375 9.625L10.5938 5.625Z" />
  </svg>

)

export default FileModal