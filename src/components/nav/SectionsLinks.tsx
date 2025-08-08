import { UserIcon, RocketIcon, StartIcon } from '../Utils/components/icons/PortfolioIcons'

export const SectionsLinks = [{
  key: 1,
  uri: '#presentation',
  label: 'Presentación',
  icon: () => <UserIcon />
},
{
  key: 2,
  uri: '#skills',
  label: 'Habilidades',
  icon: () => <RocketIcon />
},
{
  key: 3,
  uri: '#aboutme',
  label: 'Acerca de Mí',
  icon: () => <StartIcon />
}]
