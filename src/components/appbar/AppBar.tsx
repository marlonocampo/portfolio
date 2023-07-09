import { AppBar, Toolbar, IconButton, Box, Avatar } from '@mui/material'
import { MenuRounded as MenuIcon, GitHub } from '@mui/icons-material'
import { LinkHome } from './HomeButton'
import { Links } from './Links'

export function MenuAppBar(): JSX.Element {
  return (
    <AppBar
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(19,34,58,0.87)',
        boxShadow: 'none'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '10px'
        }}
        variant='dense'
      >
        <Box>
          <IconButton
            color={'info'}
            aria-label='Menu'
          >
            <MenuIcon
              sx={{
                display: { xs: 'flex', sm: 'none' }
              }}
            />
          </IconButton>
          <LinkHome href='#'>Marlonocampo</LinkHome>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center'
          }}
        >
          <Links disableRipple>Inicio</Links>
          <Links disableRipple>Servicios</Links>
          <Links disableRipple>Acerca de mi</Links>
        </Box>
        <Box>
          <IconButton
            sx={{
              ':hover': { boxShadow: '#1971c2 1px 2px 5px;' }
            }}
            aria-label='GitHub Profile'
          >
            <GitHub
              sx={{
                width: '1em',
                height: '1em',
                color: 'text.primary'
              }}
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
    </AppBar >
  )
}
