import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { App } from '../../src/components/App'

test('Render App Component', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
