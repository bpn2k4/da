import { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { twMerge } from 'tailwind-merge'
import Utils from '@utils'
import { DocumentStatusLabel } from './DocumentTable'
import Api from '@apis'
import { useDebounce } from '@hooks'
import { Document, File } from '@types'
import { IconCancel } from './Icon'

type DocumentModalConfig = {
  type: 'create' | 'view',
  name: string,
  file?: File,
  onClickSave?: any,
  document?: Document
}

const defaultDocumentModalConfig: DocumentModalConfig = {
  type: 'create',
  name: '',
  file: undefined
}

const DocumentModal = () => {

  const [show, setShow] = useState(false)

  const [config, setConfig] = useState<DocumentModalConfig>(defaultDocumentModalConfig)

  Utils.DocumentModal = {
    isShow: show,
    show: (config) => {
      const newConfig = {
        ...defaultDocumentModalConfig,
        ...config
      }
      newConfig.file = config?.document?.file ?? newConfig.file
      newConfig.name = config?.document?.name ?? newConfig.name
      setConfig(newConfig)
      setShow(true)
    },
    hide: () => {
      setShow(false)
    }
  }

  useEffect(() => {
    if (show) {

    }
    else {
      setConfig({ ...defaultDocumentModalConfig })
    }
  }, [show])

  return (
    <Modal
      show={show}
      onClickOutsize={() => setShow(false)}>
      <div className='z-[2] w-full max-w-[600px] min-h-[200px] max-h-[calc(100dvh-40px)] overflow-hidden flex flex-col bg-rgb-255 text-rgb-15 relative rounded-lg text-[13px]'>
        <div className="center text-[#4A5677] font-semibold border-b border-[#E4E6EF]">
          <div className="w-full center h-12">Document</div>
        </div>
        <div className="bg-[#F6F7FB] overflow-y-auto px-4 py-4 min-h-[400px]">
          <div className="w-full text-xs">
            <div className="text-[#9EA5BD] mb-1">Name</div>
            <div className="h-9 w-full rounded-md border border-[#DBE3EF] overflow-hidden bg-rgb-255">
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
            <SearchBox
              file={config.file}
              type={config.type}
              onChangeFile={file => {
                config.file = file
                config.name = file.filename
                setConfig({ ...config })
              }}
              onClearFile={() => {
                config.file = undefined
                setConfig({ ...config })
              }} />
          </div>
          <div className="w-full mt-3 flex flex-row gap-3">
            <div className='flex-1'>
              <div className="text-[#9EA5BD] mb-1">Chunk method</div>
              <div className="flex-1 flex flex-row items-center mt-2 gap-5">
                <CheckBox
                  checked={true}
                  label="Struct" />
                <CheckBox
                  label="Tree" />
              </div>
            </div>
            <div className='flex-1'>
              {config.type == 'view' && (
                <>
                  <div className="text-[#9EA5BD] mb-1">Number chunks</div>
                  <div className="">
                    {config.document?.numberChunk}
                  </div>

                </>
              )}
            </div>
            <div className='flex-1'>
              {config.type == 'view' && (
                <>
                  <div className="text-[#9EA5BD] mb-1">Status</div>
                  <DocumentStatusLabel status={config.document?.status} />
                </>
              )}
            </div>
          </div>
          {config.type == 'view' && (
            <div className="w-full mt-3">
              <div className="text-[#9EA5BD] mb-1">Chunks</div>
              {/* <SearchBox /> */}
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
                if (!config.file) {
                  return
                }
                config.onClickSave({ name: config.name, fileId: config.file.fileId })
              }}>
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

const SearchBox = (props: SearchBoxProps) => {

  const { file, onChangeFile, onClearFile, type } = props

  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const debounce = useDebounce(value, 300)

  const menuRef = useRef<any>(null)
  const inputRef = useRef<any>(null)

  const load = async () => {
    const response = await Api.FileApi.getFiles({
      page: 0,
      limit: 10,
      q: value ? value : undefined
    })
    if (response.status == Api.STATUS.SUCCESS) {
      setFiles(response.files)
    }
  }

  useEffect(() => {
    load()
  }, [debounce])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current.contains(e.target) && !inputRef.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={twMerge(
      "w-full relative"
    )}>
      <div className="h-9 w-full bg-rgb-255 rounded-md border border-[#DBE3EF] overflow-hidden">
        <input
          ref={inputRef}
          onFocus={() => {
            setShow(true)
          }}
          className="w-full h-full outline-none px-2"
          value={value}
          onChange={e => setValue(e.target.value)} />
        <div
          className={twMerge(
            "absolute top-0 left-0 bottom-0 right-0 flex flex-row items-center px-2 bg-rgb-255 rounded-md border border-[#DBE3EF]",
            file ? "flex" : "hidden"
          )}>
          <a href={file?.link} target="_blank">
            <span className="line-clamp-1 hover:text-[#5180FB] hover:underline">{`${file?.filename} - ${file?.originName}`}</span>
          </a>
          <div>
            {type == 'create' && (
              <button
                className="w-6 h-6 ml-2 center rounded-full hover:bg-[#F6F7FB]"
                onClick={onClearFile}>
                <IconCancel />
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={twMerge(
          "absolute top-[calc(100%+4px)] left-0 right-0 z-[1] bg-white rounded-md max-h-[165px] overflow-y-auto shadow-primary transition-all origin-top",
          files.length > 0 && "py-[2px]",
          show ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        )}>
        {files.map((file) => (
          <div
            key={file.fileId}
            className={twMerge("h-8 w-full px-2 hover:bg-slate-100 flex flex-row items-center cursor-pointer")}
            onClick={() => {
              if (onChangeFile) {
                onChangeFile(file)
              }
              setShow(false)
            }}>
            <span className="line-clamp-1">
              {`${file.filename} - ${file.originName}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

type SearchBoxProps = {
  file?: File,
  onChangeFile?: (file: File) => void,
  onClearFile?: () => void,
  type?: 'create' | 'view'
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

export default DocumentModal