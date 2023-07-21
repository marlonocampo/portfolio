import { Presentation } from './pages/presentation/Presentation'
import { NavBar } from './appbar/NavBar'

export function App (): JSX.Element {
  return (
    <main>
      <NavBar />
      <Presentation />
    </main>
  )
}
