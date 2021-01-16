import React from 'react'
import './WeatherProperty.css'

interface WeatherPropertyProps {
  /**display property name */
  propertyKey: string
  /**display property value */
  propertyValue: React.ReactText
}

export const WeatherProperty: React.FC<WeatherPropertyProps> = ({ propertyKey, propertyValue }) => (
  <p data-testid="weather-property" className="weather__key">
    {propertyKey}:<span className="weather__value"> {propertyValue}</span>
  </p>
)
