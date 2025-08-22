import { useContext } from 'react'
import { Navigation } from './nav/Navigation'
import { Skills } from './sections/skills/Skills'
import { ThemeContext } from '../context/ThemeContext'
import { Presentation } from './sections/presentation/Presentation'
import { ProfesionalExperience } from './sections/profesionalExperience/ProfesionalExperience'
import { AboutMe } from './sections/aboutMe/AboutMe'
import { ContactMe } from './sections/ContactMe/ContactMe'
import { Footer } from './sections/footer/Footer'
import { EnvirontmentTag } from './Utils/components/EnvirontmentTag'
import { isProduction } from './Utils/constant/environment'

export function App (): JSX.Element {
  const { isDark } = useContext(ThemeContext)

  return (
    <main data-theme={`${isDark ? 'darkTheme' : 'ligthTheme'}`} className='bg-primary scrollbar'>
      {isProduction() && <EnvirontmentTag />}
      <Navigation />
      <Presentation />
      <Skills />
      <ProfesionalExperience />
      <AboutMe />
      <ContactMe />
      <Footer />
    </main>
  )
}
