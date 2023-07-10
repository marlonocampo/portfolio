import MenuRounded from '@mui/icons-material/MenuRounded'
import GitHub from '@mui/icons-material/GitHub'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

export const GitHubIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string } = GitHub
export const MenuIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string } = MenuRounded
