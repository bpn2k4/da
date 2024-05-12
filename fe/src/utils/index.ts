

const Utils = {
  ChatHistory: {
    isShow: true
  },
  FileModal: {
    isShow: false,
    show: () => 1,
    hide: () => 1
  },
  bytesToDisplayString: (bytes: number) => {
    if (bytes == 0) return '0B'
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
      bytes /= 1024;
      ++i;
    }
    return `${bytes.toFixed(1)}${units[i]}`;
  }
}

export default Utils