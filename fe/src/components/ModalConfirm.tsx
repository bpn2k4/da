import { useEffect, useState } from "react"
import Modal from "./Modal"
import { IconCircleCheck, IconTrash } from "./Icon"
import { twMerge } from "tailwind-merge"
import Utils from "@utils"

type ModalConfirmConfig = {
  title?: string,
  message?: string,
  type?: 'confirm' | 'delete',
  buttonRightText?: string,
  onConfirm?: any
}

const defaultModalConfirmConfig: ModalConfirmConfig = {
  title: 'Confirm',
  message: 'Are you sure??',
  type: 'confirm',
  buttonRightText: 'Confirm',
  onConfirm: undefined
}

const ModalConfirm = () => {

  const [show, setShow] = useState(false)
  const [config, setConfig] = useState<ModalConfirmConfig>(defaultModalConfirmConfig)

  Utils.ModalConfirm = {
    isShow: show,
    show: (config) => {
      setConfig({
        ...defaultModalConfirmConfig,
        ...config
      })
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
      setConfig({ ...defaultModalConfirmConfig })
    }
  }, [show])


  return (
    <Modal show={show}
      onClickOutsize={() => setShow(false)}>
      <div className='z-[2] w-full max-w-[400px] min-h-[200px] max-h-[calc(100dvh-40px)] overflow-hidden flex flex-col bg-rgb-255 text-rgb-15 relative rounded-lg text-[13px] font-[500]'>
        <div className="center text-[#4A5677] font-semibold border-b border-[#E4E6EF]">
          <div className="w-full center h-12">{config.title}</div>
        </div>
        <div className="bg-[#F6F7FB] overflow-y-auto px-4 pb-5">
          <Icon type={config.type} />
          <div className="w-full center">
            <span>{config.message}</span>
          </div>
        </div>
        <div className="center text-[#4A5677] font-semibold border-t border-[#E4E6EF]">
          <div className="w-full h-15 center gap-4 px-5">
            <button className="center flex-1 h-10 rounded-lg bg-[#F2F3F7] border border-[#E4E6EF] transition-all active:scale-98" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button
              className={twMerge(
                "center flex-1 h-10 rounded-lg bg-[#3ACE5A] border border-[#2AB448] text-rgb-255 transition-all active:scale-98",
                config.type == 'delete' && "bg-[#E54135] border-[#CD1F13]"
              )}
              onClick={config.onConfirm}>
              {config.buttonRightText}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

const Icon = ({ type }: { type?: 'delete' | 'confirm' }) => {

  return (
    <div className="w-full center p-5">
      <div className="w-[120px] h-[120px] center rounded-[45px] border-[10px] border-[#F2F3F7]">
        {type == 'confirm' ? (
          <IconCircleCheck />
        ) : (
          <IconTrash className="w-[62px] h-[70px]" />
        )}
      </div>
    </div>
  )
}

export default ModalConfirm