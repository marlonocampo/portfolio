import { useContext } from 'react'
import { Navigation } from './nav/Navigation'
import { Skills } from './sections/skills/Skills'
import { ThemeContext } from 'src/context/ThemeContext'
import { Presentation } from './sections/presentation/Presentation'
import { ProfesionalExperience } from './sections/profesionalExperience/ProfesionalExperience'
import { AboutMe } from './sections/aboutMe/AboutMe'
import { Contactame } from './ContactMe/ContactMe'

export function App (): JSX.Element {
  const { isDark } = useContext(ThemeContext)

  return (
    <main data-theme={`${isDark ? 'darkTheme' : 'ligthTheme'}`} className='bg-primary scrollbarDark'>
      <Navigation />
      <Presentation />
      <Skills />
      <ProfesionalExperience />
      <AboutMe />
      <Contactame />
    </main>
  )
}
