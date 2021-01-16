import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { BaseButton } from './BaseButton'

const handleClick = jest.fn()

test('renders correctly', () => {
  render(<BaseButton label={'Test button'} onClick={handleClick} />)
  const element = screen.getByText(/Test button/i)
  expect(element).toBeInTheDocument()
})

test('is disabled', () => {
  render(<BaseButton label={'Test button'} disabled onClick={handleClick} />)
  const element = screen.getByText(/Test button/i)
  expect(element).toHaveAttribute('disabled')
})

test('handles on click', async () => {
  render(<BaseButton label={'Test button'} onClick={handleClick} />)
  fireEvent.click(screen.getByText(/Test button/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
