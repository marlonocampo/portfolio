import { styled, Link } from '@mui/material'

export const LinkHome = styled(Link)({
  fontSize: 14,
  textDecoration: 'none',
  fontWeight: 600,
  color: '#e0e0e0',
  transition: 'transform .3s',
  ':hover': {
    transform: 'scale(1)',
    color: '#fff'
  },
  ':active': {
    transform: 'scale(1)',
    color: ''
  },
  background: 'none',
  flexGrow: 0
})
