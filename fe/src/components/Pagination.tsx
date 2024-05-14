import { twMerge } from 'tailwind-merge'
import { IconCaret, IconDoubleCaret } from './Icon'


const Pagination = (props: PaginationProps) => {

  const { className, onChangePage, page = 1, totalPage = 1 } = props

  const _onChangePage = onChangePage ?? ((_) => { return })

  return (
    <div className={twMerge(
      "flex flex-row gap-1 text-[#4A5677]",
      className
    )}>
      <button
        onClick={() => _onChangePage(1)}
        className="size-7 center rounded bg-[#e2f0ff]">
        <IconDoubleCaret className="fill-[#5180FB]" />
      </button>
      <button
        onClick={() => _onChangePage(Math.max(1, page - 1))}
        className="size-7 center rounded bg-[#e2f0ff]">
        <IconCaret className="fill-[#5180FB]" />
      </button>
      {page > totalPage - 2 && totalPage > 3 &&
        <div className="size-7 center">
          ...
        </div>}
      {page == totalPage && totalPage > 2 &&
        <button
          onClick={() => _onChangePage(page - 2)}
          className="size-7 center rounded hover:bg-[#e2f0ff]">
          {page - 2}
        </button>
      }
      {page - 1 > 0 &&
        <button
          onClick={() => _onChangePage(page - 1)}
          className="size-7 center rounded hover:bg-[#e2f0ff]">
          {page - 1}
        </button>
      }
      <button className="size-7 center rounded bg-[#5180FB] text-rgb-255">
        {page}
      </button>
      {page < totalPage &&
        <button
          onClick={() => _onChangePage(page + 1)}
          className="size-7 center rounded hover:bg-[#e2f0ff]">
          {page + 1}
        </button>
      }
      {page == 1 && totalPage > 2 &&
        <button
          onClick={() => _onChangePage(page + 2)}
          className="size-7 center rounded hover:bg-[#e2f0ff]">
          {page + 2}
        </button>
      }
      {page < totalPage - 1 && totalPage > 3 &&
        <div className="size-7 center">
          ...
        </div>
      }
      <button
        onClick={() => _onChangePage(Math.min((page + 1), totalPage))}
        className="size-7 center rounded bg-[#e2f0ff]">
        <IconCaret className="fill-[#5180FB] -rotate-180" />
      </button>
      <button
        onClick={() => _onChangePage(totalPage)}
        className="size-7 center rounded bg-[#e2f0ff]">
        <IconDoubleCaret className="fill-[#5180FB] -rotate-180" />
      </button>
    </div>
  )
}

type PaginationProps = {
  className?: string,
  onChangePage?: (page: number) => void,
  page?: number,
  totalPage?: number
}

export default Pagination
