import { twMerge } from "tailwind-merge"
import { IconCaret, IconDoubleCaret, IconPlusCircle } from "./Icon"

const Table = (props: TableProps) => {

  const { className, cx, minWidth, columns, header, columnsMinWidth, body } = props

  return (
    <div className={twMerge(
      "w-full overflow-x-auto text-[13px]",
      className
    )}>
      <div className="w-full" style={{ minWidth: minWidth ?? 600 }}>
        <div className={twMerge(
          "flex flex-row h-13 text-[#9EA5BD] font-semibold border-b",
          cx?.header
        )}>
          {header?.map((item, index) => (
            <div
              key={index}
              className=""
              style={{
                width: columns ? `${columns[index]}%` : undefined,
                minWidth: columnsMinWidth ? columnsMinWidth[index] : undefined
              }}>
              {item}
            </div>
          ))}
        </div>
        <div
          className={twMerge(
            "w-full divide-y",
            cx?.body
          )} style={{ minWidth: minWidth ?? 600 }}>
          {body?.map((row, bodyIndex) => (
            <div className={twMerge(
              "w-full flex flex-row text-[#4A5677] font-[500]",
              bodyIndex % 2 == 0 && 'bg-[#F6F7FB]'
            )} key={bodyIndex}>
              {row?.map((item, index) => (
                <div
                  key={index}
                  className={twMerge("", cx?.row)}
                  style={{
                    width: columns ? `${columns[index]}%` : undefined,
                    minWidth: columnsMinWidth ? columnsMinWidth[index] : undefined
                  }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export type TableProps = {
  className?: string,
  columns?: number[],
  columnsMinWidth?: number[],
  minWidth?: number,
  header?: React.ReactNode[],
  body?: Array<React.ReactNode[]>,
  cx?: {
    table?: string,
    header?: string,
    body?: string,
    row?: string
  }
}

const TableHeader = () => {
  return (
    <div className="w-full flex flex-row justify-between h-16 items-center px-5 text-[13px]">
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
  )
}

const TableFooter = () => {

  return (
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
  )
}



export { Table, TableHeader, TableFooter }