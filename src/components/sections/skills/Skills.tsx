import { FrontendIcon } from '@assets/icons/SkillsIcons'
export function Skills (): JSX.Element {
  const skills = [{
    name: 'Desarrollo Frontend',
    icon: () => <FrontendIcon />,
    key: 1,
    color: '#FB8787'
  },
  {
    key: 2,
    icon: () => <></>,
    name: 'Desarrollo Backend',
    color: '#3E66EC'
  },
  {
    key: 3,
    icon: () => <></>,
    name: 'Diseño de Bases de datos',
    color: '#6AE9BE'
  },
  {
    key: 4,
    icon: () => <></>,
    name: 'Análisis de Datos',
    color: '#6AE9E1'
  }]

  return (
    <>
      <div className='flex justify-center items-center py-2'>
        <div className='divider' />
        <h1 className='text-3xl font-bold text-secondary mt-10'>Habilidades!</h1>
      </div>
      <div className='text-secondary gridSkills gap-4 p-8'>
        {skills.map(skill => {
          return (
            <div key={skill.key} className={`flex bg-[${skill.color}] justify-center items-center card m-3 shadow-xl p-5 border border-3 border-secondary-focus`}>
              <div className='m-2'>{<skill.icon />}</div>
              <span className='m-2'>{skill.name}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
