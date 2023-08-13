import { GitHubIcon } from '@assets/¨icons/GitHub'
import { MenuIcon } from '@assets/¨icons/MenuIcon'
import { ToggleTheme } from '../theme/ToggleTheme'
import { Sidebar } from './Sidebar'

export function NavBar (): JSX.Element {
  const classLinks = (): string => 'relative linknav activeEfect hover:text-secondary-content'
  const links = [{
    link: '#presentation',
    label: 'Presentación',
    class: classLinks()
  },
  {
    link: '#skills',
    label: 'Habilidades',
    class: classLinks()
  },
  {
    link: '#aboutme',
    label: 'Acerca de Mí',
    class: classLinks()
  }]
  const showSidebar = (): JSX.Element => <Sidebar />

  return (
    <nav className={'text-secondary navbar fixed bg-transparent backdrop-blur-2xl justify-between px-8 xl:px-64 w-ful'}>
      <div className='flex items-center gap-2'>
        <button className='md:hidden btn btn-ghost btn-circle' onClick={showSidebar}>
          <MenuIcon />
        </button>
        <a href='#home' className='text-xl activeEfect'>MarlonOcampo</a>
      </div>
      <div className='hidden md:flex items-center gap-8'>
        {links.map(item => {
          return (<a key={item.link} href={item.link} className={item.class}>{item.label}</a>)
        })}
      </div>
      <div className='flex items-center'>
        <div className='tooltip tooltip-bottom' data-tip='Perfil de GitHub'>
          <a href='https://github.com/marlonocampo' target='blank' className='btn btn-ghost btn-circle' aria-label='github profile'>
            <GitHubIcon />
          </a>
        </div>
        <ToggleTheme />
        <div className='tooltip tooltip-bottom' data-tip='LinkedInd'>
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
