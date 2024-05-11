import { twMerge } from 'tailwind-merge'
import { IconMoon, IconSun } from './Icon'
import { useDispatch, useSelector } from '@hooks'
import { setTheme } from '@slices/System'

const AdminHeader = () => {

  return (
    <header className="w-full h-12 flex flex-row items-center justify-between text-sm px-3 text-[#4A5677] dark:text-[#4A5677]">
      <div className='flex flex-row ml-3 h-12 items-center'>

      </div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  )
}

const ToggleTheme = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.system)
  const isDark = theme == 'dark'

  const handleChangeTheme = () => {
    if (theme == 'light') {
      dispatch(setTheme('dark'))
    }
    else {
      dispatch(setTheme('light'))
    }
  }
  return (
    <button
      className={twMerge(
        'w-10 h-10 rounded-full relative overflow-hidden transition-all bg-transparent',
        'hover:bg-rgb-195 active:bg-rgb-195',
      )}
      title='Change theme'
      onClick={handleChangeTheme}>
      <div className={twMerge(
        'absolute rounded-full offset-0 center transition-transform duration-300 text-black dark:text-white',
        isDark ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
      )}>
        <IconSun />
      </div>
      <div className={twMerge(
        'absolute rounded-full offset-0 center transition-transform duration-300 text-black dark:text-white',
        isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
      )}>
        <IconMoon />
      </div>
    </button>
  )
}

export default AdminHeader