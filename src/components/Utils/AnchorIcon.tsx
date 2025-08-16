interface Props {
  className: string
  ariaLabel: string
  url: string
  icon: JSX.Element
}
export function AnchorIcon ({ className, icon, ariaLabel, url }: Props): JSX.Element {
  return (
    <a href={url} target='blank' className={`btn shadow-none border-0 bg-transparent hover:bg-secondary/10 btn-circle ${className}`} aria-label={ariaLabel}>
      {icon}
    </a>
  )
}
