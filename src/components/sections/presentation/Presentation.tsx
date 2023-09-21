import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { MessageIcon } from '@assets/icons/MessageIcon'
import { SocialMedia } from '../SocialMedia'
export function Presentation (): JSX.Element {
  const { isDark } = useContext(ThemeContext)
  const pathPhotoProfileTheme = (): string => {
    if (isDark) return '/src/assets/images/profileLight.webp'
    return '/src/assets/images/profileDark.webp'
  }

  return (
    <div id='#home' className={'gridColumns py-24 px-8 xl:px-64 bgTexture'}>
      <div className='flex justify-center items-center'>
        <img src={pathPhotoProfileTheme()} className='hover:scale-105 transition-all' width={'300px'} height={'300px'} alt='Photo profile marlonocampo' />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <article className={'zoomEffect z-10 text-secondary prose xl:w-[80%] overflow-hidden'}>
          <p className='text-xl my-2'>¡Hola 👋🏼,</p>
          <h1 className='text-info my-2 prose-h1'>Soy Marlon Ocampo!</h1>
          <p className='text-xl my-2'>
            Desarrollador de aplicaciones, con más de 1 año de experiencia enfocado en tecnologías Web.<br />
            <a className='decoration-transparent linknav text-info text-xl' href='#'>Acerca de mí</a>
          </p>
        </article>
        <div className='slideUp'>
          <button className='btn btn-info decoration-transparent hover:bg-info-content
            rounded-full mt-8 shadow-xl shadow-cyan-600/40 capitalize text-secondary'
          >
            <MessageIcon />
            Contactame
          </button>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}
