import { Title } from '../../titles/Title'
const idSection = 'aboutme'
export function AboutMe (): JSX.Element {
  return (
    <section className='mt-16 ' id={idSection}>
      <Title idSection={idSection} />
      <div className='flex items-center justify-center'>
        <div className='border-2 rounded-2xl p-4 w-72 h-72 mr-5 border-info relative text-secondary'>
          <article className='w-72 h-72 bg-primary rounded-2xl shadow-lg border border-secondary-focus'>
            <p className='p-7 text-ce'>
              Desarrollador de software con experiencia en la creación de soluciones profesionales.
              Especializado en el área web, aplicando herramientas y conocimientos que permitan
              lograr objetivos destacados.
            </p>
          </article>
          <div className='absolute bottom-0 right-4 text-3xl font-bold'>""</div>
        </div>
      </div>
    </section>
  )
}
