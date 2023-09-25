import { useContext } from 'react'
import { Navigation } from './nav/Navigation'
import { Skills } from './sections/skills/Skills'
import { ThemeContext } from 'src/context/ThemeContext'
import { Presentation } from './sections/presentation/Presentation'
import { Experience } from './sections/experience/Experience'

export function App (): JSX.Element {
  const { isDark } = useContext(ThemeContext)

  return (
    <main data-theme={`${isDark ? 'darkTheme' : 'ligthTheme'}`} className='bg-primary scrollbarDark'>
      <div className='badge text-black z-20 bg-amber-500 right-1 fixed mt-20 p-3 rounded-lg'>In</div>
      <Navigation />
      <Presentation />
      <Skills />
      <Experience />
    </main>
  )
}
