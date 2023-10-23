import { CloseIcon } from '@assets/icons/CloseIcon'

interface props { handleShowDescription: Function }
function DescriptionSkills ({ handleShowDescription }: props): JSX.Element {
  return (
    <div className={`z-40 fixed w-full h-full top-0 flex items-center justify-center 
                      backdrop-blur-sm bg-transparent text-secondary`}
    >
      <div className='w-[500px] h-3/4 bg-primary rounded-2xl p-5 shadow-xl slide-up'>
        <div className='flex justify-between'>
          Description
          <button onClick={() => handleShowDescription()}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
export default DescriptionSkills
