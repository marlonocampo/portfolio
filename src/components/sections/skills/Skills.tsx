import { lazy, Suspense, useState } from 'react'
import { FrontendIcon, BackendIcon, DataBaseIcon, DataAnalysis } from '@assets/icons/SkillsIcons'
const DescriptionSkills = lazy(async () => await import('./DescriptionSkills'))

const skills = [{
  name: 'Desarrollo Frontend',
  icon: () => <FrontendIcon />,
  key: 1,
  color1: 'from-blue1',
  color2: 'from-blue2'
},
{
  key: 2,
  icon: () => <BackendIcon />,
  name: 'Desarrollo Backend',
  color1: 'from-red1',
  color2: 'from-red2'
},
{
  key: 3,
  icon: () => <DataBaseIcon />,
  name: 'Diseño de Bases de datos',
  color1: 'from-green1',
  color2: 'from-green2'
},
{
  key: 4,
  icon: () => <DataAnalysis />,
  name: 'Análisis de Datos',
  color1: 'from-purple1',
  color2: 'from-purple2'
}]

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
    <>
      {isShowDescription && (
        <Suspense fallback={<></>}>
          <DescriptionSkills handleShowDescription={handleShowDescription} currentSkill={currentSkill} />
        </Suspense>
      )}
      <div className='flex justify-center items-center py-2'>
        <div className='divider' />
        <h1 className='text-3xl font-bold text-secondary mt-10'>Habilidades</h1>
      </div>
      <div className='text-secondary gridSkills gap-4 p-8'>
        {skills.map(skill => {
          return (
            <div
              key={skill.key} className={`flex bg-gradient-to-br justify-center
                                         items-center card m-3 shadow-xl p-5 border border-3 border-secondary-focus`}
            >
              <div className='m-2 w-12'>{<skill.icon />}</div>
              <span className='m-2'>{skill.name}</span>
              <span>
                <button onClick={() => showDescriptionSkill(skill)} className='text-sm link activeEfect'>Saber Más...</button>
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}
