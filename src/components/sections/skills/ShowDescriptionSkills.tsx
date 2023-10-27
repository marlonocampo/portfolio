import { CloseIcon } from '@assets/icons/CloseIcon'
import { descriptionSkills } from './descriptionSkills'

interface props {
  handleShowDescription: Function
  currentSkill: { key: number, name: string }
}

function DescriptionSkills ({ handleShowDescription, currentSkill }: props): JSX.Element {
  const { description, subSkills } = descriptionSkills.filter(skill => skill.key === currentSkill.key)[0]

  return (
    <div className={`z-40 fixed w-full h-full top-0 flex items-center justify-center 
                      backdrop-blur-sm bg-transparent text-secondary`}
    >
      <p className='w-[500px] bg-primary rounded-2xl p-8 shadow-xl slide-up prose text-secondary border border-3 border-secondary-focus'>
        <div className='flex justify-between'>
          <h4 className='text-secondary'>{currentSkill.name}</h4>
          <button onClick={() => handleShowDescription()}>
            <CloseIcon />
          </button>
        </div>
        <p className='m-3'> {description} </p>
        <ul>
          {subSkills.map(subSkill => {
            return <li key={subSkill}>{subSkill}</li>
          })}
        </ul>
      </p>
    </div>
  )
}
export default DescriptionSkills
