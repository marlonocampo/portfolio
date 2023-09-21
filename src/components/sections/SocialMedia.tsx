import { XIcon, LinkedInIcon, InstagramIcon } from '@assets/icons/SocialMediaIcons'

export function SocialMedia (): JSX.Element {
  return (
    <div className='flex justify-center flex-grow-0 w-full gap-1 mt-5'>
      <div className='tooltip tooltip-bottom' data-tip='X'>
        <a href='#' aria-label='X' className='btn btn-ghost btn-circle text-secondary'><XIcon /></a>
      </div>
      <div className='tooltip tooltip-bottom text-secondary' data-tip='LinkedIn'>
        <a href='#' aria-label='LinkedIn' className='btn btn-ghost btn-circle'><LinkedInIcon /></a>
      </div>
      <div className='tooltip tooltip-bottom text-secondary' data-tip='Instagram'>
        <a href='#' aria-label='Instagram' className='btn btn-ghost btn-circle'><InstagramIcon /></a>
      </div>
    </div>
  )
}
