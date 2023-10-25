import { lazy, Suspense, useState } from 'react'
import { UpSlideIcon } from '@assets/icons/UpSlideIcon'
import { descriptionSkills } from './descriptionSkills'
const DescriptionSkills = lazy(async () => await import('./ShowDescriptionSkills'))

export function Skills (): JSX.Element {
  const [isShowDescription, isSetShowDescription] = useState(false)
  const [currentSkill, setCurrentSkill] = useState({ key: 0, name: '' })

  const handleShowDescription = (): void => {
    isSetShowDescription(!isShowDescription)
  }

  const showDescriptionSkill = ({ key, name }: { key: number, name: string }): void => {
    setCurrentSkill({ key, name })
    handleShowDescription()
  }

  return (
    <section>
      {isShowDescription && (
        <Suspense fallback={<></>}>
          <DescriptionSkills handleShowDescription={handleShowDescription} currentSkill={currentSkill} />
        </Suspense>
      )}
      <div className='flex justify-center items-center py-2'>
        <div className='divider' />
        <h1 id='skills' className='text-3xl font-bold text-secondary mt-10'>Habilidades</h1>
      </div>
      <div className='text-secondary gridSkills gap-4 p-8'>
        {descriptionSkills.map(skill => {
          return (
            <div
              key={skill.key} className={`flex bg-gradient-to-br justify-center
                                         items-center card m-3 shadow-xl p-5 border border-3 border-secondary-focus`}
            >
              <div className='m-2 w-12'>{<skill.icon />}</div>
              <span className='m-2'>{skill.name}</span>
              <div className='tooltip tooltip-bottom' data-tip='Ver Detalles'>
                <button onClick={() => showDescriptionSkill(skill)} className='text-sm link activeEfect'>
                  <UpSlideIcon />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
