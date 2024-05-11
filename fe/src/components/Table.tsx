import { twMerge } from "tailwind-merge"

const Table = (props: TableProps) => {

  const { className } = props

  return (
    <table className={twMerge(
      "",
      className
    )}>

    </table>
  )
}

const TableHeader = () => {
  return (
    <div>TableHeader</div>
  )
}

type TableProps = {
  className?: string
}

export {
  Table,
  TableHeader
}