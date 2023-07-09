import { styled, Button } from '@mui/material'

export const LinkHome = styled(Button)({
  fontWeight: 600,
  transition: 'transform .3s',
  ':hover': {
    background: 'none',
    color: '#fff'
  },
  ':active': {
    transform: 'scale(.95)',
    color: ''
  }
})
