import { useState, Suspense, lazy } from 'react'
import { GitHubIcon } from '../Utils/components/icons/GitHubIcon'
import { MenuIcon } from '../Utils/components/icons/MenuIcon'
import { ToggleTheme } from '../theme/ToggleTheme'
import { SectionsLinks } from './SectionsLinks'
import { LogoMarlonOcampo } from '../LogoMarlonocampo/LogoMarlonOcampo'
import { Sidebar } from './Sidebar'
import { urlContact } from './urlContact'
import { AnchorIcon } from '../Utils/AnchorIcon'
import { IconButton } from '../Utils/components/IconButton'

const Profile = lazy(async () => await import('../ProfileInfomation/Profile'))

export function Navigation (): JSX.Element {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const handleOpenSidebar = (): void => setIsOpenSidebar(!isOpenSidebar)
  const handleShowProfile = (): void => setShowProfile(true)
  const handleCloseProfile = (): void => setShowProfile(false)

  const { githubUrl } = urlContact()
  const classLinks = 'linknav activeEfect hover:text-secondary-content'

  const getUrlMinProfile = (): string => {
    return new URL('./../../assets/images/minProfile.webp', import.meta.url).href
  }

  return (
    <>
      <nav className={'text-secondary navbar fixed bg-transparent backdrop-blur-2xl z-20 justify-between md:px-8 xl:px-72'}>
        <div className='flex justify-center content-center items-center'>
          <IconButton
            icon={<MenuIcon />}
            className='md:hidden text-secondary'
            ariaLabel='Open Sidebar'
            onClick={handleOpenSidebar}
          />
          <div className='tooltip tooltip-bottom w-5 m-2 activeEfect' data-tip='marlonocampo'>
            <a href='#presentation' aria-label='marlonocampo'>
              <LogoMarlonOcampo />
            </a>
          </div>
        </div>
        <div className='hidden md:flex items-center gap-8'>
          {SectionsLinks.map(link => {
            return (<a key={link.uri} href={link.uri} className={classLinks}>{link.label}</a>)
          })}
        </div>
        <div className='flex items-center gap-1'>
          <div className='tooltip tooltip-bottom' data-tip='Perfil de GitHub'>
            <AnchorIcon icon={<GitHubIcon />} url={githubUrl} ariaLabel={'GitHub profile'} className={'text-secondary'} />
          </div>
          <ToggleTheme />
          <div className='tooltip tooltip-bottom' data-tip='Perfil'>
            <button onClick={handleShowProfile} className='btn shadow-none border-0 bg-transparent hover:bg-secondary/10 btn-circle'>
              <div className='avatar avatar-online w-8'>
                <img
                  className='rounded-full'
                  alt='marlonocampo'
                  src={getUrlMinProfile()}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
      <Sidebar closeSidebar={handleOpenSidebar} isOpen={isOpenSidebar} />
      {showProfile && (
        <Suspense fallback={<></>}>
          <Profile handleShowProfile={handleCloseProfile} />
        </Suspense>
      )}
    </>
  )
}
