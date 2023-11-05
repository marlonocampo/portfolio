interface IUrlContact {
  githubUrl: string
  linkedInUrl: string
  xUrl: string
  instagramUrl: string
}

export function urlContact (): IUrlContact {
  const githubUrl = 'https://github.com/marlonocampo'
  const linkedInUrl = 'https://www.linkedin.com/in/marlon-ocampo-3b7696167/'
  const xUrl = 'https://twitter.com/marlonocampo_'
  const instagramUrl = 'https://www.instagram.com/marlonocampo_/'

  return { githubUrl, linkedInUrl, xUrl, instagramUrl }
}
