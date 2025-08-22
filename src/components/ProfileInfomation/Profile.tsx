import { CloseIcon } from '../Utils/components/icons/CloseIcon'
import { IconButton } from '../Utils/components/IconButton'

function Profile ({ handleShowProfile }: { handleShowProfile: Function }): JSX.Element {
  return (
    <div
      className='w-screen h-screen bg-transparent fixed z-30'
      onClick={() => handleShowProfile()}
    >
      <div className='flex flex-col bg-primary right-4 top-16 zoom-effect shadow-2xl fixed z-40 justify-center border-accent border-2 rounded-xl xl:right-32'>
        <div className='flex justify-end text-secondary p-2'>
          <IconButton
            icon={<CloseIcon />}
            className={'text-secondary'}
            onClick={() => handleShowProfile()}
            ariaLabel={'Close'}
          />
        </div>
        <div className='flex flex-col items-center justify-center prose text-secondary px-8 pb-8'>
          <h3 className='text-secondary my-5'>Marlon José Ocampo Pérez</h3>
          <h4 className='text-secondary'>Desarrollador de Software</h4>
          <ul>
            <li>Nacionalidad: Nicaragua </li>
            <li>Email: info@marlonocampo.com </li>
            {/* <li>N° de Contacto: #### ####</li> */}
          </ul>
          <div className='stats shadow-md text-secondary bg-transparent'>
            <div className='stat place-items-center'>
              <div>Experiencia</div>
              <div className='stat-value'>+3</div>
              <div className='stat-desc text-secondary'>Año</div>
            </div>

            <div className='stat place-items-center'>
              <div>Proyectos</div>
              <div className='stat-value'>+10</div>
              <div className='stat-desc text-secondary'>Participación</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
