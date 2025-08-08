import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { MoonIcon } from '../Utils/components/icons/MoonIcon'
import { LigthIcon } from '../Utils/components/icons/LigthIcon'
import { IconButton } from '../Utils/components/IconButton'

export function ToggleTheme (): JSX.Element {
  const { changeTheme, isDark } = useContext(ThemeContext)
  return (
    <div className='tooltip tooltip-bottom' data-tip={isDark ? 'Claro' : 'Oscuro'}>
      {isDark
        ? <IconButton onClick={changeTheme} icon={<LigthIcon />} ariaLabel={'Ligth Theme'} />
        : <IconButton onClick={changeTheme} icon={<MoonIcon />} ariaLabel={'Dark Theme'} />}
    </div>
  )
}
