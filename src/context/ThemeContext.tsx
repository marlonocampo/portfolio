import { createContext, useState } from 'react'

interface contextProps {
  isDark: boolean
  changeTheme: () => void
}

export const ThemeContext = createContext<contextProps>({ isDark: false, changeTheme: () => {} })

export function ThemeProvider ({ children }: any): JSX.Element {
  const [theme, setTheme] = useState<boolean>(false)
  const changeTheme = (): void => setTheme(!theme)

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
