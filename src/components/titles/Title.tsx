export function Title ({ idSection }: { idSection: string }): JSX.Element {
  const sectionTitles = [{
    id: 'skills',
    label: 'Habilidades'
  },
  {
    id: 'profesionalEperience',
    label: 'Experiencia Profesional'
  },
  {
    id: 'aboutme',
    label: 'Sobre Mi'
  },
  {
    id: 'contactme',
    label: 'Contáctame'
  }]

  const { id, label } = sectionTitles.filter(title => title.id === idSection)[0]

  return (
    <h2 id={id} className='mb-10 text-3xl font-bold text-secondary text-center'>
      {label}
    </h2>
  )
}
