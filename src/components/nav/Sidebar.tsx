import { useContext } from 'react'
import { links } from './Links'
import { CloseIcon } from '@assets/¨icons/CloseIcon'
import { SidebarContext } from 'src/context/SidebarContext'
export default function Sidebar (): JSX.Element {
  const { isOpen, closeSidebar } = useContext(SidebarContext)

  const classStyle = `py-3 pl-10 activeEfect btn-primary capitalize border-0 w-full
                      hover:bg-secondary-focus   rounded-full flex gap-3 text-secondary`
  return (
    <div
      className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} z-10 h-screen w-screen fixed
                    backdrop-blur-md ease-in-out duration-200`}
    >
      <div className={`p-4 w-64 h-full bg-primary border-r shadow-xl
                      fixed rounded-r-2xl border-r-secondary-focus`}
      >
        <div className='flex text-secondary items-center justify-between mt-2 mb-16 ml-4'>
          <a href='#' className=''>Marlon ocampo</a>
          <button className='activeEfect' onClick={closeSidebar} aria-label='Close Sidebar'>
            <CloseIcon />
          </button>
        </div>
        <div className='flex gap-5 flex-col'>
          {links.map(link => {
            return (
              <a key={link.key} href={link.uri} className={classStyle}>
                {<link.icon />}
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
