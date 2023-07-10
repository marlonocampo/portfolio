import { AppBar as MenuAppBar, Toolbar, IconButton, Box, Avatar } from '@mui/material'
import { GitHubIcon, MenuIcon } from '@assets/¨styles/Icons'

import { LinkHome } from './HomeButton'
import { Links } from './Links'

export function AppBar (): JSX.Element {
  return (
    <MenuAppBar
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(19,34,58,0.87)',
        boxShadow: 'none'
      }}
    >
      <Toolbar
        variant='dense'
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'space-around' },
          margin: '10px'
        }}
      >
        <Box display='flex'>
          <IconButton
            color='info'
            aria-label='Menu'
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <LinkHome
            color='info'
            disableRipple
            href='#'
          >
            Marlonocampo
          </LinkHome>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center'
          }}
        >
          <Links color='info' disableRipple>Inicio</Links>
          <Links color='info' disableRipple>Servicios</Links>
          <Links color='info' disableRipple>Acerca de mi</Links>
        </Box>
        <Box>
          <IconButton
            sx={{
              ':hover': { boxShadow: '#1971c2 1px 2px 5px;' }
            }}
            aria-label='GitHub Profile'
          >
            <GitHubIcon
              color='info'
            />
          </IconButton>
          <IconButton>
            <Avatar
              alt='Marlon Pérez'
              sx={{ width: '1.3em', height: '1.3em' }}
              src={'/src/assets/images/minProfile.jpg'}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </MenuAppBar>
  )
}
