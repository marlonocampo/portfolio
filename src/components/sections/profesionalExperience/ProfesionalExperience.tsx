import { profesionalEperienceInfo } from './profesionalExperienceInfo'

export function ProfesionalExperience (): JSX.Element {
  return (
    <section id='profesionalEperience' className='px-8 overflow-auto'>
      <div className='flex justify-center mb-10'>
        <h1 className='text-3xl font-bold text-secondary mt-10'>
          Experiencia Profesional
        </h1>
      </div>
      <div className='m-5 flex items-center justify-center min-w-[720px]'>
        <ul className='steps text-primary'>
          {profesionalEperienceInfo.map(info => {
            return (
              <li key={info.key} data-content='✓' className='step step-info prose'>
                <div className={'card-body text-secondary'}>
                  <h4 className='text-secondary'>{info.name}</h4>
                  <p className='m-0'>{info.position}</p>
                  <i className='m-0'>{info.duration}</i>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
