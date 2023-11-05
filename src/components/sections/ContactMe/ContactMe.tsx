import { FormContactMe } from './FormContactMe'
import { FigureContactMe } from './FigureContactMe'
import { Title } from '../../titles/Title'
const idSection = 'contactme'

export function ContactMe (): JSX.Element {
  return (
    <section className='mt-16 pb-52' id={idSection}>
      <Title idSection={idSection} />
      <div className='flex items-center justify-center'>
        <FormContactMe />
        <FigureContactMe />
      </div>
    </section>
  )
}
