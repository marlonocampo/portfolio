const LinkedInIcon = (): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='currentColor'
      strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8 11v5' />
      <path d='M8 8v.01' />
      <path d='M12 16v-5' />
      <path d='M16 16v-3a2 2 0 1 0 -4 0' />
      <path d='M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z' />
    </svg>
  )
}

const InstagramIcon = (): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
      strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
    >
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>

  )
}

export { LinkedInIcon, InstagramIcon }
