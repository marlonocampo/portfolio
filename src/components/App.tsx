import { Grid, Typography } from '@mui/material'
import { AppBar } from './appbar/AppBar'
import { Presentation } from '@pages¨/Presentation'

export function App(): JSX.Element {
  return (
    <Grid container>
      <AppBar />
      <Grid item
        sx={{
          backgroundColor: 'primary.main',
          height: '100vh',
          width: '100vw',
          padding: '100px 50px'
        }}
      >
        <Typography variant='h2'>
          Marlon Ocampo
        </Typography>
      </Grid>
    </Grid>
  )
}
