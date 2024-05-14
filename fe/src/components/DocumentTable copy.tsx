import { useEffect } from "react";
import { Table, TableFooter, TableHeader } from "./Table"
import Api from "@apis";

const files = [
  {
    id: '19dfc3106',
    name: 'Document 1',
    filename: 'document_1.docx',
    type: 'docx',
    size: '2MB',
    createdAt: '2024-05-12T08:00:00Z'
  },
  {
    id: 'f11aa084',
    name: 'Document 2',
    filename: 'document_2.txt',
    type: 'txt',
    size: '500KB',
    createdAt: '2024-05-11T15:30:00Z'
  },
  {
    id: 'f1de30d7',
    name: 'Document 3',
    filename: 'document_3.pdf',
    type: 'pdf',
    size: '1.5MB',
    createdAt: '2024-05-10T10:45:00Z'
  },
  {
    id: 'ffbb42c4',
    name: 'Document 4',
    filename: 'document_4.doc',
    type: 'doc',
    size: '3MB',
    createdAt: '2024-05-09T12:00:00Z'
  },
  {
    id: '58f7d7a9',
    name: 'Document 5',
    filename: 'document_5.txt',
    type: 'txt',
    size: '800KB',
    createdAt: '2024-05-08T09:30:00Z'
  },
  {
    id: 'd83fb34e',
    name: 'Document 6',
    filename: 'document_6.pdf',
    type: 'pdf',
    size: '2.2MB',
    createdAt: '2024-05-07T14:15:00Z'
  },
  {
    id: '8a421772',
    name: 'Document 7',
    filename: 'document_7.docx',
    type: 'docx',
    size: '1.7MB',
    createdAt: '2024-05-06T11:20:00Z'
  },
  {
    id: '8776851e',
    name: 'Document 8',
    filename: 'document_8.doc',
    type: 'doc',
    size: '2.5MB',
    createdAt: '2024-05-05T16:45:00Z'
  },
  {
    id: 'cd191d9b',
    name: 'Document 9',
    filename: 'document_9.txt',
    type: 'txt',
    size: '1MB',
    createdAt: '2024-05-04T08:10:00Z'
  },
  {
    id: '65a18289',
    name: 'Document 10 Document Document Document Document Document Document Document Document',
    filename: 'document_10.pdf',
    type: 'pdf',
    size: '1.8MB',
    createdAt: '2024-05-03T13:55:00Z'
  }
];

const DocumentTable = () => {

  useEffect(() => {
    const load = async () => {
      const response = await Api.FileApi.getFiles({ page: 0, limit: 10 })
      console.log(response)

    }
    // load()
  }, [])

  return (
    <div className="w-full rounded-lg bg-rgb-255 shadow-primary">
      <TableHeader />
      <Table
        minWidth={600}
        columns={[10, 20, 30, 10, 10, 20]}
        columnsMinWidth={[120, 240, 360, 120, 120, 240]}
        header={[
          <div className="px-6 py-3">ID</div>,
          <div className="px-6 py-3">NAME</div>,
          <div className="px-6 py-3">FILENAME</div>,
          <div className="px-6 py-3">TYPE</div>,
          <div className="px-6 py-3">SIZE</div>,
          <div className="px-6 py-3">CREATED</div>
        ]}
        body={files.map(({ createdAt, filename, id, name, size, type }) => [
          <div className="px-6 py-3">{id}</div>,
          <div className="px-6 py-3">{name}</div>,
          <div className="px-6 py-3">{filename}</div>,
          <div className="px-6 py-3">{type}</div>,
          <div className="px-6 py-3">{size}</div>,
          <div className="px-6 py-3">CREATED</div>,
        ])} />
      <TableFooter />
    </div>
  )
}

export default DocumentTable