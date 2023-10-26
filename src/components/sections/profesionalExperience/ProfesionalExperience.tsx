import { profesionalEperienceInfo } from './profesionalExperienceInfo'

export function ProfesionalExperience (): JSX.Element {
  return (
    <section id='profesionalEperience' className='px-8 mt-16'>
      <h1 className='mb-10 text-3xl font-bold text-secondary text-center'>
        Experiencia Profesional
      </h1>
      <div className='overflow-auto'>
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
      </div>
    </section>
  )
}
