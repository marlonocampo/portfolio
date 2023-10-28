import { SendIcon } from '@assets/icons/SendIcons'
export function FormContactMe (): JSX.Element {
  const sendEmail = (event: any): void => {
    event.preventDefault()
  }

  return (
    <form onSubmit={sendEmail} className='text-secondary w-80 rounded-3xl border-secondary-focus shadow-xl border p-7'>
      <div className='form-control mb-4'>
        <label className='label'>
          ¿Cuál es tu nombre?
        </label>
        <input type='text' maxLength={50} className='input input-bordered input-secondary rounded-full  input-md w-full' />
      </div>
      <div className='form-control mb-4'>
        <label className='label'>
          Tu correo
        </label>
        <input name='email' type='email' maxLength={30} placeholder='' className='input input-bordered rounded-full input-secondary  input-md w-full' />
      </div>
      <div className='form-control mb-5'>
        <label className='label'>
          Detalle
        </label>
        <textarea
          placeholder='Escribe tu petición, sugerencia o pregunta'
          className='input input-bordered input-secondary input-md w-full rounded-2xl min-h-[100px] max-h-[200px]'
          maxLength={200}
        />
      </div>
      <div className='tooltip tooltip-bottom' data-tip='Temporamente Inhabilitado'>
        <button className={'btn btn-secondary hover:bg-secondary-content text-primary rounded-full cursor-not-allowed'}>
          Enviar
          <SendIcon />
        </button>
      </div>
    </form>
  )
}
