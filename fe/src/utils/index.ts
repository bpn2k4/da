

const Utils = {
  formatDate: (dateString: string) => {
    const date = new Date(dateString)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())
    const formattedDate = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`
    return formattedDate
  },




  ModalConfirm: {
    isShow: false,
    show: (_: ShowModalConfirmConfig = {}) => { return },
    hide: (_: any = null) => { return }
  },
  ChatHistory: {
    isShow: true
  },
  FileModal: {
    isShow: false,
    show: (_: ShowFileModalConfig = {}) => { return },
    hide: (_: any = null) => { return }
  },
  bytesToDisplayString: (bytes: number) => {
    if (bytes == 0) return '0B'
    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    let i = 0
    while (bytes >= 1024 && i < units.length - 1) {
      bytes /= 1024
      ++i
    }
    return `${bytes.toFixed(1)}${units[i]}`
  }
}

type ShowFileModalConfig = {
  type?: 'create' | 'view',
  onClickSave?: any
}

type ShowModalConfirmConfig = {
  title?: string,
  message?: string,
  type?: 'confirm' | 'delete',
  buttonRightText?: string,
  onConfirm?: any
}

export default Utils