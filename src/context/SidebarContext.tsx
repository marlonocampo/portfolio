import { createContext, useState } from 'react'

interface contextProps {
  isOpen: boolean
  closeSidebar: () => void
}

export const SidebarContext = createContext<contextProps>({ isOpen: false, closeSidebar: () => {} })

export function SidebarProvider ({ children }: any): JSX.Element {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const closeSidebar = (): void => setIsOpenSidebar(!isOpenSidebar)

  const valuesProvider = {
    isOpen: isOpenSidebar,
    closeSidebar
  }

  return (
    <SidebarContext.Provider value={valuesProvider}>
      {children}
    </SidebarContext.Provider>
  )
}
