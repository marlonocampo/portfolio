import { GitHubIcon } from '@assets/¨icons/GitHub'
import { MenuIcon } from '@assets/¨icons/MenuIcon'
import { ToggleTheme } from '../theme/ToggleTheme'
import { links } from './Links'
import { useContext } from 'react'
import { SidebarContext } from 'src/context/SidebarContext'

export function NavBar (): JSX.Element {
  const { closeSidebar } = useContext(SidebarContext)

  const classLinks = 'linknav activeEfect hover:text-secondary-content'

  return (
    <nav className={'text-secondary navbar fixed bg-transparent backdrop-blur-2xl justify-between px-8 xl:px-64'}>
      <div className='flex justify-center content-center items-center'>
        <button className='md:hidden btn btn-ghost btn-circle' onClick={closeSidebar}>
          <MenuIcon />
        </button>
        <a href='#home' className='text-xl activeEfect'>MarlonOcampo</a>
      </div>
      <div className='hidden md:flex items-center gap-8'>
        {links.map(link => {
          return (<a key={link.uri} href={link.uri} className={classLinks}>{link.label}</a>)
        })}
      </div>
      <div className='flex items-center'>
        <div className='tooltip tooltip-bottom' data-tip='Perfil de GitHub'>
          <a href='https://github.com/marlonocampo' target='blank' className='btn btn-ghost btn-circle' aria-label='github profile'>
            <GitHubIcon />
          </a>
        </div>
        <ToggleTheme />
        <div className='tooltip tooltip-bottom' data-tip='Profile'>
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
