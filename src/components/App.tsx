import { Box } from '@mui/material'
import { AppBar } from './appbar/AppBar'
import { Presentation } from '@pages¨/presentation/Presentation'

export function App (): JSX.Element {
  return (
    <Box>
      <AppBar />
      <Presentation />
    </Box>
  )
}
