import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from '../src/components/App'
import { Presentation } from '../src/components/sections/presentation/Presentation'

describe('Test main component Proyect', () => {
  test("Should render component 'App'", () => {
    render(<App />)
    expect(true).toBeTruthy()
  })

  test("Should render component 'Presentation.tsx' with text 'Soy Marlon Ocampo!'", () => {
    const { getAllByText } = render(<Presentation />)
    expect(getAllByText('Soy Marlon Ocampo!')).toBeDefined()
  })
})
