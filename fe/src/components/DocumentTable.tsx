import { useEffect } from 'react'
import { Table, TableFooter, TableHeader } from './Table'
import { twMerge, useDispatch, useSelector } from '@hooks'
import { setDocuments, setLimit, setPage, thunkGetDocuments } from '@slices/Document'
import Utils from '@utils'
import Api from '@apis'
import { IconManager, IconTrash } from './Icon'
import CheckBox from './CheckBox'

const DocumentTable = () => {

  const dispatch = useDispatch()
  const { documents, limit, page, total } = useSelector(state => state.document)

  const onClickButtonAdd = () => {
    Utils.DocumentModal.show({
      onClickSave: async (data) => {
        const response = await Api.DocumentApi.createDocument({
          name: data.name,
          fileId: data.fileId
        })
        if (response.status == Api.STATUS.SUCCESS) {
          Utils.DocumentModal.hide()
          dispatch(thunkGetDocuments({ page, limit }))
        }
      }
    })
  }

  const isCheckAll = documents.reduce((prev, document) => prev && document.checked, true)


  useEffect(() => {
    dispatch(thunkGetDocuments({ page, limit }))
  }, [page, limit])

  return (
    <div className="w-full rounded-lg bg-rgb-255 shadow-primary">
      <TableHeader
        title="DOCUMENT MANAGER"
        buttonAddText="Add new document"
        onClickButtonAdd={onClickButtonAdd} />
      <Table
        minWidth={600}
        columns={[10, 20, 25, 10, 10, 15, 10]}
        baseWidth={60}
        header={[
          <div className="pl-4 pr-6 py-3 flex flex-row gap-2">
            <CheckBox checked={isCheckAll} onClick={() => {
              const newDocuments = documents.map((item) => ({
                ...item,
                checked: !isCheckAll
              }))
              dispatch(setDocuments(newDocuments))
            }} />
            <span>ID</span>
          </div>,
          <div className="px-6 py-3">NAME</div>,
          <div className="px-6 py-3">FILENAME</div>,
          <div className="px-6 py-3">STATUS</div>,
          <div className="px-6 py-3">CHUNKS</div>,
          <div className="px-6 py-3">UPDATED</div>,
          <div className="px-6 py-3">MANAGER</div>
        ]}
        body={documents.map((document) => [
          <div className="pl-4 pr-6 py-3">
            <div
              className="flex flex-row gap-2 cursor-pointer"
              onClick={() => {
                const newDocuments = documents.map((item) => ({
                  ...item,
                  checked: document.documentId == item.documentId ? !document.checked : item.checked
                }))
                dispatch(setDocuments(newDocuments))
              }}>
              <CheckBox checked={document.checked} />
              <span>
                {document.documentId.slice(0, 8)}
              </span>
            </div>
          </div>,
          <div className="px-6 py-3">{document.name}</div>,
          <div className="px-6 py-3">{document.file.originName}</div>,
          <div className="px-6 py-3">
            <DocumentStatusLabel status={document.status} />
          </div>,
          <div className="px-6 py-3">{document.numberChunk}</div>,
          <div className="px-6 py-3">{Utils.formatDate(document.updatedAt)}</div>,
          <div className="px-6 py-3 flex flex-row gap-2">
            <button
              onClick={() => {
                Utils.DocumentModal.show({
                  document: document,
                  type: 'view',
                  onClickSave: () => {
                    Utils.DocumentModal.hide()
                  }
                })
              }}>
              <IconManager className="hover:fill-[#40A4EC]" />
            </button>
            <button
              onClick={() => {
                // Utils.ModalConfirm.show({
                //   type: 'delete',
                //   buttonRightText: 'Confirm Delete',
                //   title: 'Delete file',
                //   message: 'Are you sure you want to delete this files??',
                //   onConfirm: async () => {
                //     const response = await Api.FileApi.deleteFile(file.fileId)
                //     if (response.status == Api.STATUS.SUCCESS) {
                //       Utils.ModalConfirm.hide()
                //       dispatch(thunkGetFiles({ page, limit }))
                //     }
                //   }
                // })
              }}>
              <IconTrash className="hover:fill-[#E54135]" />
            </button>
          </div>,
        ])} />
      <TableFooter
        page={page + 1}
        limit={limit}
        number={documents.length}
        total={total}
        onChangePage={page => {
          dispatch(setPage(page - 1))
        }}
        onChangeLimit={limit => {
          dispatch(setLimit(limit))
        }}
        totalPage={Math.ceil(total / limit)} />
    </div>
  )
}

const DocumentStatusLabel = (props: DocumentStatusLabelProps) => {

  const { status = 'CREATED' } = props

  const texts = {
    'CREATED': 'Created',
    'EXTRACTED': 'Extracted',
    'PROCESSING': 'Processing',
    'ERROR': 'Error',
  }

  return (
    <div className={twMerge(
      "w-[100px] h-[24px] center text-[13px] font-[500] rounded",
      status == 'CREATED' && 'text-[#5180FB] bg-[#5180FB1A]/10',
      status == 'EXTRACTED' && 'text-[#20A144] bg-[#20A1441A]/10',
      status == 'PROCESSING' && 'text-[#E56E19] bg-[#E56E191A]/10',
      status == 'ERROR' && 'text-[#E54135] bg-[#E541351A]/10',
    )}>
      {texts[status]}
    </div>
  )
}

type DocumentStatusLabelProps = {
  status?: 'CREATED' | 'EXTRACTED' | 'PROCESSING' | 'ERROR'
}

export { DocumentStatusLabel }

export default DocumentTable