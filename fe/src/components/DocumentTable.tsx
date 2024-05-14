import { useEffect } from 'react'
import { Table, TableFooter, TableHeader } from './Table'
import { useDispatch, useSelector } from '@hooks'
import { setLimit, setPage } from '@slices/Document'

const DocumentTable = () => {

  const dispatch = useDispatch()
  const { documents, limit, page, total } = useSelector(state => state.document)

  const onClickButtonAdd = () => {

  }

  useEffect(() => {
  }, [])

  return (
    <div className="w-full rounded-lg bg-rgb-255 shadow-primary">
      <TableHeader
        title="DOCUMENT MANAGER"
        buttonAddText="Add new document"
        onClickButtonAdd={onClickButtonAdd} />
      <Table
        minWidth={600}
        columns={[10, 20, 30, 10, 10, 20]}
        columnsMinWidth={[120, 240, 360, 120, 120, 240]}
        header={[
          <div className="px-6 py-3">ID</div>,
          <div className="px-6 py-3">NAME</div>,
          <div className="px-6 py-3">FILENAME</div>,
          <div className="px-6 py-3">STATUS</div>,
          <div className="px-6 py-3">NUMBER CHUNKS</div>,
          <div className="px-6 py-3">UPDATED</div>
        ]}
        body={[]} />
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

export default DocumentTable