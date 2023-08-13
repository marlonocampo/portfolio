import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
import { DownloadIcon } from '@assets/¨icons/DownloadIcon'
export function Presentation (): JSX.Element {
  const photoProfileTheme = (): string => {
    const { isDark } = useContext(ThemeContext)
    if (isDark) return '/src/assets/images/profileDark.webp'
    return '/src/assets/images/profileLight.webp'
  }

  return (
    <div id='#home' className={'gridColumns py-24 px-8 xl:px-64 h-[95vh]'}>
      <div className='flex justify-center items-center'>
        <img className='' src={photoProfileTheme()} width={'450px'} alt='Photo profile marlonocampo' />
      </div>
      <div className='flex items-center'>
        <article className={'text-secondary prose md:prose-lg xl:w-[80%]'}>
          <p className='text-3xl m-0'>¡Hola 👋🏼,</p>
          <h1 className='text-info m-0'>Soy Marlon Ocampo!</h1>
          <p className='text-2xl m-0'>
            Desarrollador de aplicaciones, con más de 1 año de experiencia enfocado en tecnologías Web. <a className='text-info' href='#'>Acerca de mí</a>
          </p>
          <a href='#' className='btn rounded-full mt-12 shadow-xl btn-info text-secondary mx-2'>
            <DownloadIcon />
            Descargar CV
          </a>
        </article>
      </div>
    </div>
  )
}
