import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'

export function NavBar (): JSX.Element {
  const { isDark, changeTheme } = useContext(ThemeContext)
  const calssLinks = (): string => `relative linknav activeEfect ${isDark ? 'hover:text-white' : 'hover:text-black'}`
  const links = [{
    link: '#presentation',
    label: 'Presentación',
    class: calssLinks()
  },
  {
    link: '#skills',
    label: 'Habilidades',
    class: calssLinks()
  },
  {
    link: '#aboutme',
    label: 'Acerca de Mí',
    class: calssLinks()
  }]
  return (
    <nav className={`${isDark ? 'text-secondary' : 'text-primary'} navbar fixed bg-transparent backdrop-blur-lg justify-between px-8 xl:px-64 w-full`}>
      <div className='flex items-center gap-2'>
        <div className='md:hidden btn btn-ghost btn-circle'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width='25' height='25'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        </div>
        <a href='#home' className='text-xl activeEfect'>MarlonOcampo</a>
      </div>
      <div className='hidden md:flex items-center gap-8'>
        {links.map(item => {
          return (<a key={item.link} href={item.link} className={item.class}>{item.label}</a>)
        })}
      </div>
      <div className='flex items-center gap-2'>
        <div className='tooltip tooltip-bottom' data-tip='GitHub Profile'>
          <a href='https://github.com/marlonocampo' target='blank' className='btn btn-ghost btn-circle' aria-label='github profile'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </a>
        </div>
        <div className='tooltip tooltip-bottom' data-tip='Theme'>
          <button className='btn btn-ghost btn-circle' aria-label='theme' onClick={changeTheme}>
            <svg
              xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'
            >
              <path
                strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385
              0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753
              9.753 0 009.002-5.998z'
              />
            </svg>
          </button>
        </div>
        <div className='tooltip tooltip-bottom' data-tip='LinkedInd'>
          <a href='#' className='btn btn-ghost btn-circle avatar'>
            <div className='w-8'>
              <img className='rounded-full' alt='marlonocampo' src='/src/assets/images/minProfile.webp' />
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}
