import DocumentModal from "./DocumentModal"
import FileModal from "./FileModal"
import ModalConfirm from "./ModalConfirm"


const GlobalComponent = () => {

  return (
    <>
      <FileModal />
      <ModalConfirm />
      <DocumentModal />
    </>
  )
}

export default GlobalComponent