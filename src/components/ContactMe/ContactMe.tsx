import { FormContactMe } from './FormContactMe'
import { FigureContactMe } from './FigureContactMe'
export function Contactame (): JSX.Element {
  return (
    <section className='mt-16 pb-52'>
      <h2 id='skills' className='mb-10 text-3xl font-bold text-secondary text-center'>
        Contáctame
      </h2>
      <div className='flex items-center justify-center'>
        <FormContactMe />
        <FigureContactMe />
      </div>
    </section>
  )
}
