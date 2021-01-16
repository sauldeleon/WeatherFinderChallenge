import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { BaseInput } from './BaseInput'

const handleChange = jest.fn()

test('renders correctly', () => {
  render(<BaseInput name={'Test button'} placeholder={'a placeholder'} onChange={handleChange} />)
  const elementByPlaceholder = screen.getByPlaceholderText(/a placeholder/i)
  expect(elementByPlaceholder).toBeInTheDocument()

  const elementByName = screen.getByTestId(/input-Test button/i)
  expect(elementByName).toBeInTheDocument()
})

test('onChange property is being called correctly', () => {
  render(<BaseInput name={'Test button'} placeholder={'a placeholder'} onChange={handleChange} />)
  const element = screen.getByTestId(/input-Test button/i) as HTMLInputElement
  expect(element.value).toBe('')

  fireEvent.change(element, { target: { value: 'new value' } })
  expect(element.value).toBe('new value')
})
