import { createContext, useEffect, useState } from 'react'

interface contextProps {
  isDark: boolean
  changeTheme: () => void
}

export const ThemeContext = createContext<contextProps>({ isDark: false, changeTheme: () => {} })

const propsTheme = { key: 'isDark', darkActive: 'true' }

const getTheme = (): boolean => {
  const currentTheme = localStorage.getItem(propsTheme.key)
  if (currentTheme === null) {
    localStorage.setItem(propsTheme.key, (false).toString())
  }
  return (currentTheme === propsTheme.darkActive)
}

export function ThemeProvider ({ children }: any): JSX.Element {
  const [theme, setTheme] = useState<boolean>(getTheme)
  const changeTheme = (): void => setTheme(!theme)

  useEffect(() => {
    localStorage.setItem(propsTheme.key, theme.toString())
  }, [theme])

  const valuesProvider = {
    isDark: theme,
    changeTheme
  }

  return (
    <ThemeContext.Provider value={valuesProvider}>
      {children}
    </ThemeContext.Provider>
  )
}
