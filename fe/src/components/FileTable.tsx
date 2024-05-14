import { useDispatch, useSelector } from "@hooks"
import { Table, TableFooter, TableHeader } from "./Table"
import { setLimit, setPage, thunkGetFiles } from "@slices/File"
import Utils from "@utils"
import Api from "@apis"
import { useEffect } from "react"
import { IconManager, IconTrash } from "./Icon"

const FileTable = () => {

  const dispatch = useDispatch()
  const { files, limit, total, page } = useSelector(state => state.file)

  const onClickButtonAdd = () => {
    Utils.FileModal.show({
      onClickSave: async (formData: FormData) => {
        const response = await Api.FileApi.createFile(formData)
        if (response.status == Api.STATUS.SUCCESS) {
          Utils.FileModal.hide()
          dispatch(thunkGetFiles({ page, limit }))
        }
      }
    })
  }

  useEffect(() => {
    dispatch(thunkGetFiles({ page, limit }))
  }, [page, limit])

  return (
    <div className="w-full rounded-lg bg-rgb-255 shadow-primary">
      <TableHeader
        title="FILE MANAGER"
        buttonAddText="Add new file"
        onClickButtonAdd={onClickButtonAdd} />
      <Table
        minWidth={600}
        columns={[10, 20, 30, 5, 10, 15, 10]}
        columnsMinWidth={[120, 240, 360, 60, 120, 180, 120]}
        header={[
          <div className="px-6 py-3">ID</div>,
          <div className="px-6 py-3">NAME</div>,
          <div className="px-6 py-3">FILENAME</div>,
          <div className="px-6 py-3">TYPE</div>,
          <div className="px-6 py-3">SIZE</div>,
          <div className="px-6 py-3">CREATED</div>,
          <div className="px-6 py-3">MANAGER</div>,
        ]}
        body={files.map((file) => ([
          <div className="px-6 py-3">{file.fileId.slice(0, 8)}</div>,
          <div className="px-6 py-3">{file.filename}</div>,
          <div className="px-6 py-3">{file.originName}</div>,
          <div className="px-6 py-3">{file.extension.toUpperCase()}</div>,
          <div className="px-6 py-3 ">{Utils.bytesToDisplayString(file.size)}</div>,
          <div className="px-6 py-3">{Utils.formatDate(file.createdAt)}</div>,
          <div className="px-6 py-3 flex flex-row gap-2">
            <button>
              <IconManager className="hover:fill-[#40A4EC]" />
            </button>
            <button
              onClick={() => {
                Utils.ModalConfirm.show({
                  type: 'delete',
                  buttonRightText: 'Confirm Delete',
                  title: 'Delete file',
                  message: 'Are you sure you want to delete this files??',
                  onConfirm: async () => {
                    const response = await Api.FileApi.deleteFile(file.fileId)
                    if (response.status == Api.STATUS.SUCCESS) {
                      Utils.ModalConfirm.hide()
                      dispatch(thunkGetFiles({ page, limit }))
                    }
                  }
                })
              }}>
              <IconTrash className="hover:fill-[#E54135]" />
            </button>
          </div>,
        ]))} />
      <TableFooter
        page={page + 1}
        limit={limit}
        number={files.length}
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

export default FileTable