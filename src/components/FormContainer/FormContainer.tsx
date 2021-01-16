import React from 'react'
import './FormContainer.css'
import { ClassContainerProps } from '../../utils/types'

import { WeatherContextProvider } from '../../store/WeatherContext'

import { WeatherForm } from '../WeatherForm'
import { WeatherInfoContainer } from '../WeatherInfoContainer'

export const FormContainer: React.FC<ClassContainerProps> = ({ className }) => (
  <div className={`form-container ${className}`}>
    <WeatherContextProvider>
      <WeatherForm />
      <WeatherInfoContainer />
    </WeatherContextProvider>
  </div>
)
