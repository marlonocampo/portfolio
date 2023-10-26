import {
  FrontendIcon,
  BackendIcon,
  DataBaseIcon,
  DataAnalysis,
  AwardIcon
} from '@assets/icons/SkillsIcons'

export const descriptionSkills =
[{
  name: 'Desarrollo Frontend',
  icon: () => <FrontendIcon />,
  key: 1,
  description: 'Con habilidades profesionales en el diseño y experiencia de usuarios en sitios web completos',
  subSkills: ['Diseño y maquetación de interfaces', 'Diseño adaptativo', 'Optmización de sitios web', 'Buenas prácticas (SEO y accesibiliad)',
    'Edición de contenido multimedia'
  ]
},
{
  key: 2,
  icon: () => <BackendIcon />,
  name: 'Desarrollo Backend',
  description: 'Desarrollo de softwares de manejo de datos a gran escala, tomando en cuenta la optimización y buen desempeño.',
  subSkills: ['Aplicación de arquitecturas limpias', 'Seguridad', 'Manejo de frameworks', 'Manejo de datos con ORMs o forma nativa']
},
{
  key: 3,
  icon: () => <DataBaseIcon />,
  name: 'Diseño de Bases de datos',
  description: 'Modelado y creación de base de datos, aplicando restricciones de integridad y consistencia de los datos.',
  subSkills: ['Normalización', 'Optimización', 'Gestión de permisos y accesos', 'Copias de Seguridad', 'Manejo integral de bases de datos']
},
{
  key: 4,
  icon: () => <DataAnalysis />,
  name: 'Análisis de Datos',
  description: 'Con experiencia en el campo del análisis y tratado de información.',
  subSkills: ['Interacción con los datos de la base de datos', 'Diseño y creación de informes', 'Manejo de PowerBI',
    'Comunicación entre bases de datos y heeramientas externas'
  ]
},
{
  key: 5,
  icon: () => <AwardIcon />,
  name: 'Otras Habilidades',
  description: 'Habiliades técnicas y cualitativas',
  subSkills: ['Publicación de apliaciones', 'Integración continua CI/CD', 'Mantenimeinto de servidor web', 'Control de versiones de código',
    'Capacidad para resolver problemas, proactivo, buena comunicación']
}]
