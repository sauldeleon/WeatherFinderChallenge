import React, { useContext } from 'react'
import './WeatherInfoContainer.css'

import { WeatherContext, WeatherContextStoreType, WeatherInfoProps } from '../../store/WeatherContext'

import { WeatherProperty } from '../WeatherProperty'

export const WeatherInfoContainer: React.FC = () => {
  const { weatherInfo, error } = useContext(WeatherContext) as WeatherContextStoreType
  const renderInfo = () =>
    Object.keys(weatherInfo).map((key) => {
      const value = weatherInfo[key as keyof WeatherInfoProps]
      return value && <WeatherProperty key={key} propertyKey={key} propertyValue={value} />
    })
  const renderError = () => <p className="weather__error">{error}</p>

  return <div className="weather__info">{error ? renderError() : renderInfo()}</div>
}
