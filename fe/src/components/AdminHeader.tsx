import logoBKA from '@assets/images/logo-bka.png'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const AdminHeader = () => {

  const { pathname } = useLocation()

  const navItems = [
    { title: 'Content', path: '/admin/1' },
    { title: 'Manager', path: '/admin/2' },
    { title: 'Analytic', path: '/admin/3' },
  ]

  console.log(pathname);


  return (
    <header className="w-full h-12 flex flex-row items-center justify-between text-sm px-3">
      <div className='flex flex-row'>
        <Link to="/admin" className="center">
          <img
            className="h-10"
            src={logoBKA} />
        </Link>
        <div className='flex flex-row font-[500] relative ml-4'>
          {navItems.map(({ path, title }, index) => (
            <Link
              key={index}
              to={path}
              className={twMerge(
                "h-12 w-32 center hover:text-bka hover:opacity-90",
                pathname == path && "text-bka"
              )}>
              <span>
                {title.toUpperCase()}
              </span>
            </Link>
          ))}
          <Indicator />
        </div>
      </div>
    </header>
  )
}

const Indicator = () => {

  const { pathname } = useLocation()

  return (
    <div className={twMerge(
      "absolute bottom-0 left-0 h-[2px] center w-32 translate-x-0 transition-all",
      pathname == "/admin/2" && "translate-x-[100%]",
      pathname == "/admin/3" && "translate-x-[200%]",
    )}>
      <div className="h-[2px] w-24 bg-bka">

      </div>
    </div>
  )
}

export default AdminHeader