export function Skills (): JSX.Element {
  return (
    <>
      <div className='flex justify-center items-center py-8'>
        <div className='divider' />
        <h1 className='text-3xl font-bold text-secondary mt-10'>Habilidades!</h1>
      </div>
      <div className='container text-secondary grid grid-cols-4 gap-4 p-8'>
        <div className='card w-96 shadow-xl border-2 border-secondary-focus p-5'>
          <h2 className='card-title'>Desarrollo Frontend</h2>
        </div>
        <div className='card w-96 shadow-xl border-2 border-secondary-focus p-5'>
          <h2 className='card-title'>Desarrollo Backend</h2>
        </div>
        <div className='card w-96 shadow-xl border-2 border-secondary-focus p-5'>
          <h2 className='card-title'>Diseño de Bases de datos</h2>
        </div>
        <div className='card w-96 shadow-xl border-2 border-secondary-focus p-5'>
          <h2 className='card-title'>Análisis de Datos</h2>
        </div>
      </div>
    </>
  )
}
