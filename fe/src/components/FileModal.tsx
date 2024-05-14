import { useEffect, useId, useState } from "react"
import Modal from "./Modal"
import { twMerge } from "tailwind-merge"
import Utils from "@utils"

type FileModalConfig = {
  type: 'create' | 'view',
  name: string,
  size: number,
  fileType: 'pdf' | 'doc' | 'docx' | 'txt' | 'raw',
  content: string,
  file?: any,
  fileName?: string,
  onClickSave?: any
}

const defaultFileModalConfig: FileModalConfig = {
  type: 'create',
  name: '',
  size: 0,
  fileType: 'raw',
  content: '',
  file: null,
  fileName: undefined
}

const FileModal = () => {

  const [show, setShow] = useState(false)
  const fileInputId = useId()

  const [config, setConfig] = useState<FileModalConfig>(defaultFileModalConfig)

  Utils.FileModal = {
    isShow: show,
    show: (config) => {
      setConfig({
        ...defaultFileModalConfig,
        ...config
      })
      setShow(true)
    },
    hide: () => {
      setShow(false)
    }
  }

  const isCreate = config.type == 'create'

  const checkBoxes = [
    { label: 'pdf' },
    { label: 'doc' },
    { label: 'docx' },
    { label: 'txt' },
  ]

  useEffect(() => {
    if (show) {

    }
    else {
      setConfig({ ...defaultFileModalConfig })
    }
  }, [show])

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
                className="w-full h-full outline-none px-2"
                value={config.name}
                onChange={e => {
                  config.name = e.target.value
                  setConfig({ ...config })
                }} />
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="text-[#9EA5BD] mb-1">File</div>
            <div className="flex flex-row items-center">
              {config.fileName && (
                <div className="mr-3">{config.fileName}</div>
              )}
              <input
                id={fileInputId}
                onChange={e => {
                  const file = e.target.files ? e.target.files[0] : undefined
                  if (file) {
                    const extension = file.name.split('.').at(-1)
                    if (extension == 'pdf' || extension == 'doc' || extension == 'docx' || extension == 'txt') {
                      config.fileType = extension
                    }
                    config.file = file
                    config.fileName = file.name
                    config.size = file.size
                    if (config.name == '') {
                      config.name = file.name.split('.').slice(0, -1).join('.')
                    }
                    e.target.files = null
                    setConfig({ ...config })
                  }
                }}
                className="w-0 h-0"
                type="file"
                accept=".doc,.docx,.pdf,.txt" />
              {config.type == 'create' && (
                <label htmlFor={fileInputId} className="h-8 w-16 rounded-md border cursor-pointer center bg-rgb-255">
                  Select
                </label>
              )}
            </div>
          </div>
          <div className="w-full mt-3 flex flex-row">
            <div>
              <div className="text-[#9EA5BD] mb-1">Type</div>
              <div className="w-full flex flex-row gap-6 items-center">
                {checkBoxes.map(({ label }, index) => (
                  <CheckBox
                    key={index}
                    checked={label == config.fileType}
                    label={label.toUpperCase()} />
                ))}
                <CheckBox
                  checked={config.fileType == 'raw'}
                  onClick={() => {
                    if (config.type == 'create') {
                      config.fileType = 'raw'
                      config.name = ''
                      config.fileName = ''
                      config.content = ''
                      config.file = null
                      config.size = 0
                      config.file = 0
                      setConfig({ ...config })
                    }
                  }}
                  label="RAW" />
              </div>
            </div>
            <div className="ml-12">
              <div className="text-[#9EA5BD] mb-1">Size</div>
              <div className="font-semibold text-[#4A5677]">
                <div className="">{Utils.bytesToDisplayString(config.size)}</div>
              </div>
            </div>
          </div>
          {isCreate && config.fileType == 'raw' && (
            <div className="w-full mt-3">
              <div className="text-[#9EA5BD] mb-1">Content</div>
              <div className="w-full h-60 rounded-md border border-[#E4E6EF] overflow-hidden">
                <textarea
                  className="resize-none outline-none w-full h-full p-2"
                  value={config.content}
                  onChange={e => {
                    config.content = e.target.value
                    setConfig({ ...config })
                  }} />
              </div>
            </div>
          )}
        </div>
        <div className="center text-[#4A5677] font-semibold border-t border-[#E4E6EF]">
          <div className="h-15 center gap-2">
            <button className="center w-40 h-10 rounded-lg bg-[#F2F3F7] border border-[#E4E6EF]" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button
              className="center w-40 h-10 rounded-lg bg-[#3ACE5A] border border-[#2AB448] text-rgb-255"
              onClick={() => {
                if (!config.onClickSave) {
                  return
                }
                if (!config.name) {
                  return
                }
                const formData = new FormData()
                formData.append('filename', config.name)
                if (config.fileType == 'raw') {
                  if (!config.content) {
                    return
                  }
                  formData.append('extension', 'txt')
                  formData.append('content', config.content)
                }
                else {
                  if (!config.file) {
                    return
                  }
                  formData.append('extension', config.fileType)
                  formData.append('file', config.file)
                }
                config.onClickSave(formData)
              }}>
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

const Check = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 14" className={twMerge("w-4 h-4 fill-[#5180FB]", className)}>
    <path d="M12 0C13.0938 0 14 0.90625 14 2V12C14 13.125 13.0938 14 12 14H2C0.875 14 0 13.125 0 12V2C0 0.90625 0.875 0 2 0H12ZM10.5938 5.625C10.9375 5.28125 10.9375 4.75 10.5938 4.40625C10.25 4.0625 9.71875 4.0625 9.375 4.40625L6 7.78125L4.59375 6.40625C4.25 6.0625 3.71875 6.0625 3.375 6.40625C3.03125 6.75 3.03125 7.28125 3.375 7.625L5.375 9.625C5.71875 9.96875 6.25 9.96875 6.59375 9.625L10.5938 5.625Z" />
  </svg>
)

export default FileModal