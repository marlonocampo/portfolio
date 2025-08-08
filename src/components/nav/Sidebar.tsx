import { SectionsLinks } from './SectionsLinks'
import { CloseIcon } from '../Utils/components/icons/CloseIcon'

interface props {
  closeSidebar: () => void
  isOpen: boolean
}

export function Sidebar ({ closeSidebar, isOpen }: props): JSX.Element {
  const classStyle = `py-3 pl-4 activeEfect btn-primary capitalize border-0 w-full
                      hover:bg-accent rounded-full flex gap-3 text-secondary`
  return (
    <div
      className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 h-full w-full fixed backdrop-blur-md ease-out duration-200`}
      onClick={() => closeSidebar()}
    >
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} p-4 w-64 h-full bg-primary border-r shadow-xlrounded-r-2xl border-r-accent`}>
        <div className='flex text-secondary items-center justify-between mt-2 mb-16 pl-4'>
          <a href='#' className=''>marlonocampo</a>
          <button className='activeEfect' onClick={() => closeSidebar()} aria-label='Close Sidebar'>
            <CloseIcon />
          </button>
        </div>
        <ul className='flex gap-5 flex-col'>
          {SectionsLinks.map(link => {
            return (
              <li key={link.key}>
                <a href={link.uri} className={classStyle}>
                  {<link.icon />}
                  <span>{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
