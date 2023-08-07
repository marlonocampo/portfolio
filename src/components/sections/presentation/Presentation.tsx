import { useContext } from 'react'
import { ThemeContext } from 'src/context/ThemeContext'
export function Presentation (): JSX.Element {
  const { isDark } = useContext(ThemeContext)
  return (
    <div id='#home' className={'gridColumns pt-28 px-8 h-[90vh] xl:px-64'}>
      <div className='flex justify-center items-center'>
        <img className='xs:w-[400px] lg:w-auto' src='/src/assets/images/profilePhoto.webp' alt='Photo profile marlonocampo' />
      </div>
      <div className='flex justify-center items-center'>
        <article className={`${isDark ? 'text-secondary' : 'text-primary'} prose md:prose-lg xl:w-[80%]`}>
          <p className='text-3xl'>¡Hola,</p>
          <h1 className='text-info'>Soy Marlon Ocampo!</h1>
          <p className='text-2xl'>
            Me dedico al desarrollo de software, con experiencia en la creación de soluciones profesionales
            con las herramientas que mejor se adapten.
          </p>
          <a href='#'>
            <button className='btn rounded-full mt-12 shadow-xl btn-info'>
              <svg className='w-6 h-6 animate-bounce' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3' />
              </svg>
              Descargar CV
            </button>
          </a>
        </article>
      </div>
    </div>
  )
}
