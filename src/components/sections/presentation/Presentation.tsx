import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { MessageIcon } from '@assets/¨icons/MessageIcon'
export function Presentation (): JSX.Element {
  const { isDark } = useContext(ThemeContext)
  const photoProfileTheme = (): string => {
    if (isDark) return '/src/assets/images/profileLight.webp'
    return '/src/assets/images/profileDark.webp'
  }

  return (
    <div id='#home' className={'gridColumns py-24 px-8 xl:px-64 h-[95vh] bgTexture'}>
      <div className='flex justify-center items-center'>
        <img src={photoProfileTheme()} className='hover:scale-105 transition-all' width={'400px'} height={'400px'} alt='Photo profile marlonocampo' />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <article className={'zoomEffect z-10 text-secondary prose xl:w-[70%] overflow-hidden'}>
          <p className='text-3xl my-2'>¡Hola 👋🏼,</p>
          <h1 className='text-info my-2 prose-h1'>Soy Marlon Ocampo!</h1>
          <p className='text-2xl my-2'>
            Desarrollador de aplicaciones, con más de 1 año de experiencia enfocado en tecnologías Web.<br />
            <a className='text-info activeEfect' href='#'>Acerca de mí</a>
          </p>
        </article>
        <div className='slideUp'>
          <button className='btn btn-info text-lg decoration-transparent hover:bg-info-content
            rounded-full mt-12 shadow-xl shadow-cyan-600/40 capitalize text-secondary'
          >
            <MessageIcon />
            Contactame
          </button>
        </div>
      </div>
    </div>
  )
}
