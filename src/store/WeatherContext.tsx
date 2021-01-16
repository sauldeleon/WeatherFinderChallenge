import React, { useState, createContext } from 'react'

import { ChildrenProps } from '../utils/types'

export type WeatherInfoProps = {
  /**location */
  location: undefined | string
  /**temperature in celsius */
  temperature: undefined | number
  /**humidity in %*/
  humidity: undefined | number
  /**description of the weather */
  description: undefined | string
}

export type InfoError = undefined | string

export type WeatherContextStoreType = {
  weatherInfo: WeatherInfoProps
  setWeatherInfo: (info: WeatherInfoProps) => void
  error: InfoError
  setError: (error: InfoError) => void
}

export const WeatherContext = createContext<WeatherContextStoreType | null>(null)

export const WeatherContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoProps>({
    location: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
  })
  const [error, setError] = useState<InfoError>(undefined)

  const store: WeatherContextStoreType = {
    weatherInfo,
    setWeatherInfo,
    error,
    setError,
  }

  return <WeatherContext.Provider value={store}>{children}</WeatherContext.Provider>
}
