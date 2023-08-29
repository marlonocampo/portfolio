import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { DownloadIcon } from '@assets/¨icons/DownloadIcon'
export function Presentation (): JSX.Element {
  const { isDark } = useContext(ThemeContext)
  const photoProfileTheme = (): string => {
    if (isDark) return '/src/assets/images/profileLight.webp'
    return '/src/assets/images/profileDark.webp'
  }

  return (
    <div id='#home' className={'gridColumns py-24 px-8 xl:px-64 h-[95vh] bgTexture'}>
      <div className='flex justify-center items-center'>
        <img src={photoProfileTheme()} width={'400px'} height={'400px'} alt='Photo profile marlonocampo' />
      </div>
      <div className='flex items-center'>
        <article className={'text-secondary prose xl:w-[70%]'}>
          <p className='text-3xl my-2'>¡Hola 👋🏼,</p>
          <h1 className='text-info my-2 prose-h1'>Soy Marlon Ocampo!</h1>
          <p className='text-2xl my-2'>
            Desarrollador de aplicaciones, con más de 1 año de experiencia enfocado en tecnologías Web.<br />
            <a className='text-info' href='#'>Acerca de mí</a>
          </p>
          <a href='#' className='prose text-lg btn decoration-transparent rounded-full mt-12 shadow-xl btn-info capitalize text-secondary mx-2'>
            <DownloadIcon />
            Descargar CV
          </a>
        </article>
      </div>
    </div>
  )
}
