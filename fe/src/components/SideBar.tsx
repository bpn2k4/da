import { Link, useLocation } from "react-router-dom"
import { IconChunk, IconDocument, IconFile } from "./Icon"
import { twMerge } from "tailwind-merge"

import logoBKA from '@assets/images/logo-bka.png'

const SideBar = () => {

  const { pathname } = useLocation()

  const items = [
    { title: 'CONTENT', path: "*", type: 'text' },
    { title: 'Document', icon: <IconDocument />, path: '/admin/content' },
    { title: 'Chunk', icon: <IconChunk />, path: '/admin/content/chunk' },
    { title: 'File', icon: <IconFile />, path: '/admin/content/file' },
    { title: 'MANAGER', path: "*", type: 'text' },
  ]

  return (
    <div className="w-full h-full overflow-y-auto bg-[#2788f0] text-xs">
      <div className="w-full py-6 px-4">
        <Link to="/admin" className="flex flex-row items-center gap-4">
          <img
            className="h-8"
            src={logoBKA} />
          <span className="text-xl font-semibold">BKGPT</span>
        </Link>
      </div>
      {items.map(({ title, icon, path, type }, index) => (
        <SideBarItem
          key={index}
          title={title}
          icon={icon}
          path={path}
          type={type}
          active={pathname == path} />
      ))}
    </div>
  )
}

const SideBarItem = (props: SideBarItemProps) => {

  const { title, icon, path, active, type } = props

  if (type == 'text') {
    return (
      <div className="w-full px-4 h-7 flex flex-row items-center">
        <span className="font-semibold">{title}</span>
      </div>
    )
  }

  return (
    <Link to={path} className={twMerge(
      "w-full h-12 px-4 flex flex-row items-center hover:bg-[#3465e5]",
      active && "bg-[#3465e5]"
    )}>
      <div className="size-6 mr-4 center">
        {icon}
      </div>
      <span className="">{title}</span>
    </Link>
  )
}

type SideBarItemProps = {
  title?: string,
  icon?: React.ReactNode,
  path: string,
  active?: boolean,
  type?: string
}
export default SideBar