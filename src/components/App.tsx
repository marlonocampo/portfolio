import { useContext } from 'react'
import { Presentation } from './sections/presentation/Presentation'
import { NavBar } from './nav/Navbar'
import { Skills } from './sections/Skills'
import { ScrollDown } from './sections/ScrollDown'
import { ThemeContext } from 'src/context/ThemeContext'

export function App (): JSX.Element {
  const { isDark } = useContext(ThemeContext)

  return (
    <main data-theme={`${isDark ? 'darkTheme' : 'ligthTheme'}`} className='bg-primary drawer'>
      <div className='badge text-black bg-amber-500 top-1 fixed mt-20 p-3 rounded-lg'>In Development</div>
      <NavBar />
      <Presentation />
      <ScrollDown />
      <Skills />
    </main>
  )
}
