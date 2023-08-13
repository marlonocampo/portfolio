export function Sidebar (): JSX.Element {
  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer' className='drawer-overlay' />
      <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  )
}
