interface Props {
  ariaLabel: string
  url: string
  icon: JSX.Element
}
export function AnchorIcon ({ icon, ariaLabel, url }: Props): JSX.Element {
  return (
    <a href={url} target='blank' className='btn shadow-none border-0 bg-transparent hover:bg-secondary/10 btn-circle' aria-label={ariaLabel}>
      {icon}
    </a>
  )
}
