
import { GitHubIcon } from '@assets/icons/GitHub'
import { MenuIcon } from '@assets/icons/MenuIcon'
import { ToggleTheme } from '../theme/ToggleTheme'
import { SectionsLinks } from './SectionsLinks'
import { useContext } from 'react'
import { SidebarContext } from 'src/context/SidebarContext'
import { OriginalLogo } from '../LogoMarlonocampo/LogoMarlonOcampo'

export function NavBar (): JSX.Element {
  const { closeSidebar } = useContext(SidebarContext)

  const classLinks = 'linknav activeEfect hover:text-secondary-content'

  return (
    <nav className={'text-secondary navbar fixed bg-transparent backdrop-blur-2xl z-20 justify-between md:px-8 xl:px-64'}>
      <div className='flex justify-center content-center items-center'>
        <button
          className='md:hidden btn btn-ghost btn-circle'
          aria-label='Open Sidebar'
          onClick={closeSidebar}
        >
          <MenuIcon />
        </button>
        <div className='tooltip tooltip-bottom w-5 m-2 activeEfect' data-tip='marlonocampo'>
          <a href='#home'>
            <OriginalLogo />
          </a>
        </div>
      </div>
      <div className='hidden md:flex items-center gap-8'>
        {SectionsLinks.map(link => {
          return (<a key={link.uri} href={link.uri} className={classLinks}>{link.label}</a>)
        })}
      </div>
      <div className='flex items-center'>
        <div className='tooltip tooltip-bottom' data-tip='Perfil de GitHub'>
          <a href='#' target='blank' className='btn btn-ghost btn-circle' aria-label='github profile'>
            <GitHubIcon />
          </a>
        </div>
        <ToggleTheme />
        <div className='tooltip tooltip-bottom' data-tip='Perfil'>
          <a href='#' className='btn btn-ghost btn-circle avatar'>
            <div className='w-8'>
              <img
                className='rounded-full'
                alt='marlonocampo'
                src='/src/assets/images/minProfile.webp'
              />
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}
