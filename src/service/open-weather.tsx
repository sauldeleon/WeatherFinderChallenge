const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env
const API_URL = 'http://api.openweathermap.org/data/2.5'

/**
 * Returns the current weather in a given city and country
 * @param city the city
 * @param country the country
 */
export const fetchCurrentWeather = async (city: string, country: string) => {
  try {
    const api_call = await fetch(
      `${API_URL}/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
    )
    const data = await api_call.json()
    return !api_call.ok ? { error: data.message } : { data }
  } catch {
    return { error: 'Unknown error' }
  }
}
