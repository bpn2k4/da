import { twMerge } from "tailwind-merge";
import { IconCaret, IconDoubleCaret, IconPlusCircle } from "./Icon";

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

const FileTable = () => {

  return (
    <div className="w-full rounded-lg bg-rgb-255 text-[13px]">
      <div className="w-full flex flex-row justify-between h-16 items-center px-5">
        <div>
          <span className="font-[700] text-[#4A5677]">FILE MANAGER</span>
        </div>
        <div className="flex flex-row gap-4">
          <div className="h-10 w-[140px] border rounded border-[#DBE3EF] text-black">
            <input
              className="outline-none w-full h-full px-2"
              placeholder="File name?" />
          </div>
          <button className="h-10 rounded bg-[#3ACE5A] border border-[#2AB448] center gap-2 px-4 active:scale-98 transition-all">
            <IconPlusCircle />
            <span>Add new file</span>
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="w-full min-w-[600px] ">
          <div className="w-full flex flex-row h-13 text-[#9EA5BD] font-semibold">
            <div style={{ width: '10%', minWidth: 120 }} className="h-full">
              <div className="px-6 py-3">ID</div>
            </div>
            <div style={{ width: '20%', minWidth: 240 }} className="h-full">
              <div className="px-6 py-3">NAME</div>
            </div>
            <div style={{ width: '30%', minWidth: 360 }} className="h-full">
              <div className="px-6 py-3">FILENAME</div>
            </div>
            <div style={{ width: '10%', minWidth: 120 }} className="h-full">
              <div className="px-6 py-3">TYPE</div>
            </div>
            <div style={{ width: '10%', minWidth: 120 }} className="h-full">
              <div className="px-6 py-3">SIZE</div>
            </div>
            <div style={{ width: '20%', minWidth: 240 }} className="h-full">
              <div className="px-6 py-3">CREATED</div>
            </div>
          </div>
          <div className="w-full divide-y">
            {files.map(({ createdAt, filename, id, name, size, type }, index) => (
              <div className={twMerge(
                "w-full flex flex-row text-[#4A5677] font-[500]",
                index % 2 == 0 && 'bg-[#F6F7FB]'
              )} key={index}>
                <div style={{ width: '10%', minWidth: 120 }} className="h-full inline-block">
                  <div className="px-6 py-3">{id}</div>
                </div>
                <div style={{ width: '20%', minWidth: 240 }} className="h-full inline-block">
                  <div className="px-6 py-3">{name}</div>
                </div>
                <div style={{ width: '30%', minWidth: 360 }} className="h-full inline-block">
                  <div className="px-6 py-3">{filename}</div>
                </div>
                <div style={{ width: '10%', minWidth: 120 }} className="h-full inline-block">
                  <div className="px-6 py-3">{type}</div>
                </div>
                <div style={{ width: '10%', minWidth: 120 }} className="h-full inline-block">
                  <div className="px-6 py-3">{size}</div>
                </div>
                <div style={{ width: '20%', minWidth: 240 }} className="h-full inline-block">
                  <div className="px-6 py-3">CREATED</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="w-full h-15 flex flex-row justify-between items-center px-5 border-t border-[#DBE3EF] text-[10px]">
        <div className="flex flex-row gap-1 text-[#4A5677] ">
          <button className="size-7 rounded bg-[#e2f0ff] center">
            <IconDoubleCaret className="fill-[#5180FB]" />
          </button>
          <button className="size-7 rounded bg-[#e2f0ff] center">
            <IconCaret className="fill-[#5180FB]" />
          </button>
          <button className="size-7 rounded  center">
            ...
          </button>
          <button className="size-7 rounded center hover:bg-[#e2f0ff]">
            1
          </button>
          <button className="size-7 rounded center hover:bg-[#e2f0ff]">
            2
          </button>
          <button className="size-7 rounded center bg-[#5180FB] text-rgb-255">
            3
          </button>
          <button className="size-7 rounded center hover:bg-[#e2f0ff]">
            5
          </button>
          <button className="size-7 rounded center hover:bg-[#e2f0ff]">
            6
          </button>
          <button className="size-7 rounded center hover:bg-[#e2f0ff]">
            7
          </button>
          <button className="size-7 rounded bg-[#e2f0ff] center">
            <IconCaret className="fill-[#5180FB] -rotate-180" />
          </button>
          <button className="size-7 rounded bg-[#e2f0ff] center">
            <IconDoubleCaret className="fill-[#5180FB] -rotate-180" />
          </button>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <span className="text-[#4A5677]">Hiển thị 10/30</span>
          <div className="h-7 w-11 rounded border border-[#DBE3EF]"></div>
        </div>
      </div>
    </div>
  )
}

export default FileTable