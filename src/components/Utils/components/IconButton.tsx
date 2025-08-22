interface Props {
  className?: string
  icon: JSX.Element
  onClick: () => void
  ariaLabel: string
}

export function IconButton ({ className, icon, onClick, ariaLabel }: Props): JSX.Element {
  return (
    <button
      onClick={() => onClick()}
      className={`btn shadow-none border-0 bg-transparent hover:bg-secondary/10 btn-circle ${className}`} aria-label={ariaLabel}
    >
      {icon}
    </button>

  )
}
