import { styled, Button } from '@mui/material'

export const Links = styled(Button)({
  borderRadius: 20,
  margin: 'auto 1em',
  transition: 'transform .2s',
  ':hover': {
    background: 'rgba(0,0,0,0)',
    color: '#fff'
  },
  ':hover:after': {
    transform: 'scale(1,1)'
  },
  ':after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '0.2rem',
    left: 0,
    bottom: 0,
    background: 'rgba(47,255,190,0.8)',
    borderRadius: 20,
    transform: 'scale(0,1)',
    transition: 'transform 0.2s ease'
  },
  ':active': {
    background: 'rgba(0,0,0,0)',
    boxShadow: 'none',
    transform: 'scale(0.95)'
  }
})
