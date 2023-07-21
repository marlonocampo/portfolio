
export function Presentation (): JSX.Element {
  return (
    <div className='flex justify-center items-center'>
      <div className='grid2columsn lg:w-9/12 xl:w-6/12'>
        <div className='flex justify-center items-center'>
          <img src='/src/assets/images/profilePhoto.png' width={400} alt='Photo profile marlonocampo' />
        </div>
        <div className='flex justify-center items-center'>
          <article>
            Hola, Mi Nombre es Marlon Ocampo!
          </article>
        </div>
      </div>
    </div>
  )
}
