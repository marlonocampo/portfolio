import { FormContactMe } from './FormContactMe'
import { Title } from '../../titles/Title'
const idSection = 'contactme'

export function ContactMe (): JSX.Element {
  return (
    <section className='mt-16 pb-52 px-8' id={idSection}>
      <Title idSection={idSection} />
      <div className='flex items-center justify-center'>
        <FormContactMe />
      </div>
    </section>
  )
}
