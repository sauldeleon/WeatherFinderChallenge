import React, { useState, useContext } from 'react'

import { fetchCurrentWeather } from '../../service/open-weather'
import { WeatherContext, WeatherContextStoreType } from '../../store/WeatherContext'
import { BaseButton } from '../BaseButton'
import { BaseInput } from '../BaseInput'

export const WeatherForm: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const { setWeatherInfo, setError } = useContext(WeatherContext) as WeatherContextStoreType

  const getWeather = async (e: React.FormEvent) => {
    e.preventDefault()
    if (city && country) {
      const { data, error } = await fetchCurrentWeather(city, country)
      if (error) {
        setError(error)
      } else {
        setWeatherInfo({
          temperature: data.main.temp,
          location: `${data.name},  ${data.sys.country}`,
          humidity: data.main.humidity,
          description: data.weather[0].description,
        })
        setError(undefined)
      }
    } else {
      setWeatherInfo({
        temperature: undefined,
        location: undefined,
        humidity: undefined,
        description: undefined,
      })
      setError('Please enter the values.')
    }
  }
  return (
    <form onSubmit={getWeather}>
      <BaseInput
        name={'city'}
        placeholder="Madrid"
        onChange={(e: React.FormEvent<HTMLInputElement>) => setCity(e.currentTarget.value)}
      />
      <BaseInput
        name={'country'}
        placeholder="es"
        onChange={(e: React.FormEvent<HTMLInputElement>) => setCountry(e.currentTarget.value)}
      />
      <BaseButton label="Get Weather" />
    </form>
  )
}
