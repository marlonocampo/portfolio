# Testing del proyecto 👨🏻‍🔬

### Para garantizar que este proyecto cumple con standares de Software se han realizado diferentes tipo de pruebas 
 1. Test de e2e
 2. Test de componentes de React

### Herramientas utilizadas para llevar a cabo el testing del proyecto
- **Vitest**. El test-runner de VITE, si tu proyecto fue desarrollado con este compilador, es recomendable usarlo como test-runner principal, este mejora la compatibilidad. Te ahorrará dolores de cabeza!

-  **React Testing Library**. Esto me permite realizar test prubas a los componentes mismos de React.

- **JSDom**. Un complemento para usarlo como entorno de los testing que hará **vitest**.


### Observaciones
 - Si usas alias (En tu `tsconfig.json`), debes agregarlos a tu `vite.config.ts`:
  ~~~
    test: {
      alias: {
        '@alias/': new URL('./../', import.meta.url).pathname
      }
    }
~~~
[Consulta en errorres comunes en la sección *'Cannot find module './relative-path'*](https://vitest.dev/guide/common-errors)