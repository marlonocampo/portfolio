import { SendIcon } from '@assets/icons/SendIcons'
export function Contactame (): JSX.Element {
  return (
    <section className='mt-16 pb-52'>
      <h2 id='skills' className='mb-10 text-3xl font-bold text-secondary text-center'>
        Contáctame
      </h2>
      <div className='flex items-center justify-center'>
        <form action='' className='text-secondary w-80 rounded-3xl border-secondary-focus shadow-xl border p-7'>
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
          <button className={'btn btn-secondary hover:bg-neutral-focus text-primary rounded-full'}>
            Enviar
            <SendIcon />
          </button>
        </form>
      </div>
    </section>
  )
}
