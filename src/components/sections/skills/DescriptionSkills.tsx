import { CloseIcon } from '@assets/icons/CloseIcon'

const descriptionsSkills = [
  {
    key: 1,
    description: 'Con experiencia en el campo del diseño y experiencia de usuarios en sitios web profesionales'
  },
  {
    key: 2,
    description: 'Desarrollo de softwares de manejo de datos a gran escala. Tomando en cuenta la optimización y el mejor desempeño en la nube'
  }
]

interface props {
  handleShowDescription: Function
  currentSkill: { key: number, name: string }
}

function DescriptionSkills ({ handleShowDescription, currentSkill }: props): JSX.Element {
  const { description } = descriptionsSkills.filter(skill => skill.key === currentSkill.key)[0]

  return (
    <div className={`z-40 fixed w-full h-full top-0 flex items-center justify-center 
                      backdrop-blur-sm bg-transparent text-secondary`}
    >
      <article className='w-[500px] h-3/4 bg-primary rounded-2xl p-5 shadow-xl slide-up prose text-secondary'>
        <div className='flex justify-between'>
          <h4 className='text-secondary'>{currentSkill.name}</h4>
          <button onClick={() => handleShowDescription()}>
            <CloseIcon />
          </button>
        </div>
        <div className='m-3'>
          <p>
            {description}
          </p>
        </div>
      </article>
    </div>
  )
}
export default DescriptionSkills
