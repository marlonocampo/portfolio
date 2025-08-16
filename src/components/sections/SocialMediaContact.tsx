import { LinkedInIcon, InstagramIcon } from '../Utils/components/icons/SocialMediaIcons'
import { urlContact } from '../nav/urlContact'
import { AnchorIcon } from '../Utils/AnchorIcon'

export function SocialMedia (): JSX.Element {
  const { instagramUrl, linkedInUrl } = urlContact()
  return (
    <div className='flex justify-center grow-0 w-full mt-5 gap-1'>
      <div className='tooltip tooltip-bottom text-secondary' data-tip='Instagram'>
        <AnchorIcon
          className={'text-secondary'}
          icon={<InstagramIcon />}
          url={instagramUrl}
          ariaLabel='instagram profile'
        />
      </div>

      <div className='tooltip tooltip-bottom text-secondary' data-tip='LinkedIn'>
        <AnchorIcon
          className={'text-secondary'}
          icon={<LinkedInIcon />}
          url={linkedInUrl}
          ariaLabel='LinkedIn profile'
        />
      </div>
    </div>
  )
}
