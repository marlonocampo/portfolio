import { Typography, useTheme } from '@mui/material'
import { ProfilePhoto } from './ProfilePhoto'
import { ItemElement as Item } from '@assets/¨styles/ItemElement'

export function Presentation (): JSX.Element {
  const theme = useTheme()

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '1em',
        backgroundColor: `${theme.palette.primary.main}`,
        height: '90vh',
        width: '100vw',
        padding: '100px 100px',
        overflow: 'auto'
      }}
    >
      <Item>
        <ProfilePhoto />
      </Item>
      <Item>
        <Typography
          variant='body1'
          textAlign='center'
        >
          Hola!, mi nombre es <h1>Marlon Ocampo</h1>
        </Typography>
      </Item>
    </div>
  )
}
