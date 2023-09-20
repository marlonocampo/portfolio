import { useContext, lazy, Suspense } from 'react'
import { NavBar } from './nav/Navbar'
import { Skills } from './sections/Skills'
import { ThemeContext } from 'src/context/ThemeContext'
import { SidebarProvider } from 'src/context/SidebarContext'
import { Presentation } from './sections/presentation/Presentation'
import { Experience } from './sections/experience/Experience'
const Sidebar = lazy(async () => await import('./nav/Sidebar'))

export function App (): JSX.Element {
  const { isDark } = useContext(ThemeContext)

  return (
    <main data-theme={`${isDark ? 'darkTheme' : 'ligthTheme'}`} className='bg-primary'>
      <div className='badge text-black z-20 bg-amber-500 right-1 fixed mt-20 p-3 rounded-lg'>In Development</div>
      <SidebarProvider>
        <Suspense fallback={<></>}>
          <Sidebar />
        </Suspense>
        <NavBar />
      </SidebarProvider>
      <Presentation />
      <Skills />
      <Experience />
    </main>
  )
}
