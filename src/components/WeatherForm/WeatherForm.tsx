import React, { useContext } from 'react'

import { WeatherContext, WeatherContextStoreType } from '../../store/WeatherContext'
import { BaseButton } from '../BaseButton'
import { BaseInput } from '../BaseInput'

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env

export const WeatherForm: React.FC = () => {
  const { setWeatherInfo, setError } = useContext(WeatherContext) as WeatherContextStoreType

  const getWeather = async (e: React.FormEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      city: { value: string }
      country: { value: string }
    }
    const city = target.city.value
    const country = target.country.value
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
    )
    const data = await api_call.json()
    if (city && country) {
      setWeatherInfo({
        temperature: data.main.temp,
        location: `${data.name},  ${data.sys.country}`,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      })
      setError(undefined)
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
      <BaseInput name={'city'} placeholder="Madrid" />
      <BaseInput name={'country'} placeholder="es" />
      <BaseButton label="Get Weather" />
    </form>
  )
}
