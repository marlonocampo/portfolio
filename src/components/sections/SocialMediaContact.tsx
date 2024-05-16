import { XIcon, LinkedInIcon, InstagramIcon } from '@assets/icons/SocialMediaIcons'
import { urlContact } from '../nav/urlContact'
export function SocialMedia (): JSX.Element {
  const { xUrl, instagramUrl, linkedInUrl } = urlContact()

  return (
    <div className='flex justify-center flex-grow-0 w-full mt-5'>
      <div className='tooltip tooltip-bottom' data-tip='X'>
        <a href={xUrl} aria-label='X' target='_blank' className='btn btn-ghost btn-circle text-secondary' rel='noreferrer'><XIcon /></a>
      </div>
      <div className='tooltip tooltip-bottom text-secondary' data-tip='LinkedIn'>
        <a href={linkedInUrl} aria-label='LinkedIn' target='_blank' className='btn btn-ghost btn-circle' rel='noreferrer'><LinkedInIcon /></a>
      </div>
      <div className='tooltip tooltip-bottom text-secondary' data-tip='Instagram'>
        <a href={instagramUrl} aria-label='Instagram' target='_blank' className='btn btn-ghost btn-circle' rel='noreferrer'><InstagramIcon /></a>
      </div>
    </div>
  )
}
