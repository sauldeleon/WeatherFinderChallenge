import React from 'react'
import { render, screen } from '@testing-library/react'
import { WeatherContext } from '../../store/WeatherContext'

import { WeatherInfoContainer } from './WeatherInfoContainer'

const initialValue = {
  weatherInfo: {
    location: 'Madrid, ES',
    temperature: 20,
    humidity: 11.7,
    description: 'Clear sky',
  },
  error: undefined,
  setWeatherInfo: () => undefined,
  setError: () => undefined,
}

test('renders correctly', () => {
  render(
    <WeatherContext.Provider value={initialValue}>
      <WeatherInfoContainer />
    </WeatherContext.Provider>,
  )
  const elements = screen.getAllByTestId('weather-property')
  expect(elements.length).toBe(4)
})

test('If some element is undefined, its not painted', () => {
  render(
    <WeatherContext.Provider
      value={{
        ...initialValue,
        weatherInfo: { location: 'Madrid, ES', temperature: undefined, humidity: undefined, description: 'Clear sky' },
      }}
    >
      <WeatherInfoContainer />
    </WeatherContext.Provider>,
  )
  const elements = screen.getAllByTestId('weather-property')
  expect(elements.length).toBe(2)
})
