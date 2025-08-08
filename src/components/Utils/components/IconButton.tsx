interface Props {
  icon: JSX.Element
  onClick: () => void
  ariaLabel: string
}

export function IconButton ({ icon, onClick, ariaLabel }: Props): JSX.Element {
  return (
    <button
      onClick={() => onClick()}
      className='btn shadow-none border-0 bg-transparent hover:bg-secondary/10 btn-circle' aria-label={ariaLabel}
    >
      {icon}
    </button>

  )
}
