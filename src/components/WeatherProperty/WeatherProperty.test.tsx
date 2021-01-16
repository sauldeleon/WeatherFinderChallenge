import React from 'react'
import { render, screen } from '@testing-library/react'

import { WeatherProperty } from './WeatherProperty'

test('renders correctly', () => {
  render(<WeatherProperty propertyKey={'key'} propertyValue={'value'} />)
  const keyElement = screen.getByText(/key/i)
  const valueElement = screen.getByText(/value/i)
  expect(keyElement).toBeInTheDocument()
  expect(valueElement).toBeInTheDocument()
})
