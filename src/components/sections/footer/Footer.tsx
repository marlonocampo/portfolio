import { LogoMarlonOcampo } from '../../../components/LogoMarlonocampo/LogoMarlonOcampo'

export function Footer (): JSX.Element {
  return (
    <footer className='footer footer-center p-10 bg-primary border-t shadow-2xl rounded-lg border-t-secondary-focus text-secondary'>
      <aside>
        <span className='h-16 w-16 m-5'>
          <LogoMarlonOcampo />
        </span>
        <p className='font-bold'>
          marlonocampo.com <br />Marlon José Ocampo
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  )
}
