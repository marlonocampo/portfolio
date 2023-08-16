import { useContext } from 'react'
import { Presentation } from './sections/presentation/Presentation'
import { NavBar } from './nav/Navbar'
import { Skills } from './sections/Skills'
import { ScrollDown } from './sections/ScrollDown'
import { ThemeContext } from 'src/context/ThemeContext'
import { Sidebar } from './nav/Sidebar'
import { SidebarContext } from 'src/context/SidebarContext'

export function App (): JSX.Element {
  const { isDark } = useContext(ThemeContext)
  const { isOpen } = useContext(SidebarContext)
  console.log(isOpen)

  return (

    <main data-theme={`${isDark ? 'darkTheme' : 'ligthTheme'}`} className='bg-primary'>
      <Sidebar />
      <div className='badge text-black z-20 bg-amber-500 right-1 fixed mt-20 p-3 rounded-lg'>In Development</div>
      <NavBar />
      <Presentation />
      <ScrollDown />
      <Skills />
    </main>
  )
}
