import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { App } from '../src/components/App'

describe('Test main component Proyect', () => {
  test('1 test Sucesss 😏!', () => {
    expect('Success!').toBe('Success!')
  })

  test("Render component 'App'", () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})
