import { twMerge } from "tailwind-merge"
import { IconPlusCircle } from "./Icon"
import Pagination from "./Pagination"
import Select from "./Select"

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
            "w-full divide-y min-h-[200px] relative  break-words",
            cx?.body
          )} style={{ minWidth: minWidth ?? 600 }}>
          {body?.map((row, bodyIndex) => (
            <div className={twMerge(
              "w-full flex flex-row text-[#4A5677] font-[500]",
              bodyIndex % 2 == 0 && 'bg-[#F6F7FB]',
            )} key={bodyIndex}>
              {row?.map((item, index) => (
                <div
                  key={index}
                  className={twMerge(
                    "",
                    bodyIndex % 2 == 0 && 'bg-[#F6F7FB]',
                    cx?.row,
                  )}
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

const TableHeader = (props: TableHeaderProps) => {

  const { title, buttonAddText, onClickButtonAdd } = props

  return (
    <div className="w-full flex flex-row justify-between h-16 items-center px-5 text-[13px]">
      <div>
        <span className="font-[700] text-[#4A5677]">{title}</span>
      </div>
      <div className="flex flex-row gap-4">
        <div className="h-8 w-[140px] border rounded border-[#DBE3EF] text-black overflow-hidden">
          <input
            className="outline-none w-full h-full px-2 bg-transparent"
            placeholder="File name?" />
        </div>
        <button
          className="h-8 rounded bg-[#3ACE5A] border border-[#2AB448] center gap-2 px-4 active:scale-98 transition-all"
          onClick={onClickButtonAdd}>
          <IconPlusCircle />
          <span>{buttonAddText}</span>
        </button>
      </div>
    </div>
  )
}

type TableHeaderProps = {
  title?: string,
  buttonAddText?: string,
  onClickButtonAdd?: () => void
  searchPlaceholder?: string,
}

const TableFooter = (props: TableFooterProps) => {

  const { limit, onChangeLimit, onChangePage, page, number, total, totalPage } = props

  return (
    <div className="w-full h-15 flex flex-row justify-between items-center px-5 border-t border-[#DBE3EF] text-[10px]">
      <Pagination
        page={page}
        onChangePage={onChangePage}
        totalPage={totalPage} />

      <div className="flex flex-row gap-3 items-center text-[13px]">
        <span className="text-[#4A5677]">Hiển thị {number}/{total}</span>
        <Select
          className="w-11 h-7 pl-[6px]"
          cx={{
            icon: "right-1",
            item: "h-6 justify-center hover:text-[#5180FB] hover:bg-gray-200 font-semibold"
          }}
          onSelect={item => {
            if (typeof (onChangeLimit) == 'function') {
              onChangeLimit(item.value)
            }
          }}
          position="top"
          value={limit}
          options={[
            { value: 10, display: 10 },
            { value: 20, display: 20 },
            { value: 50, display: 50 },
          ]}
        />
      </div>
    </div>
  )
}

type TableFooterProps = {
  className?: string,
  onChangePage?: (page: number) => void,
  number?: number,
  page?: number,
  total?: number,
  totalPage?: number,
  limit?: number,
  onChangeLimit?: (limit: any) => void
}



export { Table, TableHeader, TableFooter }