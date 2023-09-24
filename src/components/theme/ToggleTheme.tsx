import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { MoonIcon } from '@assets/icons/MoonIcon'
import { LigthIcon } from '@assets/icons/LigthIcon'

export function ToggleTheme (): JSX.Element {
  const { changeTheme, isDark } = useContext(ThemeContext)
  return (
    <div className='tooltip tooltip-bottom' data-tip='Ambiente'>
      <button className='btn btn-ghost btn-circle' aria-label='theme' onClick={changeTheme}>
        {isDark ? <MoonIcon /> : <LigthIcon />}
      </button>
    </div>
  )
}
