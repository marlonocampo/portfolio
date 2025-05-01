import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { MessageIcon } from '@assets/icons/MessageIcon'
import { SocialMedia } from '../SocialMediaContact'
const urlImageDark = new URL('./../../../assets/images/profileDark.webp', import.meta.url).href
const urlImageLight = new URL('./../../../assets/images/profileLight.webp', import.meta.url).href

export function Presentation (): JSX.Element {
  const { isDark } = useContext(ThemeContext)
  const getPhotoPresentation = isDark ? urlImageLight : urlImageDark

  return (
    <div id='presentation' className={'gridColumns py-24 px-8 xl:px-80 bgTexture'}>
      <div className='flex justify-center items-center'>
        <img src={getPhotoPresentation} className='hover:scale-105 transition-all' width={'270px'} height={'270px'} alt='Photo profile marlonocampo' />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <article className={'zoom-effect-letter z-10 text-secondary prose overflow-hidden'}>
          <p className='text-xl my-2'>¡Hola 👋🏼,</p>
          <h1 className='text-info my-2'>Soy Marlon Ocampo!</h1>
          <p className='text-xl my-2'>
            Desarrollador de software, con más de 3 años de experiencia enfocado en tecnologías Web.<br />
          </p>
        </article>
        <div className='slide-up-min flex flex-col items-start'>
          <a className='decoration-transparent linknav text-info text-xl' href='#aboutme'>Acerca de mí</a>
          <a
            href='#contactme' className='btn btn-info decoration-transparent hover:bg-info-content
            rounded-full mt-8 shadow-xl shadow-cyan-600/40 capitalize text-secondary'
          >
            <MessageIcon />
            Contactame
          </a>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}
