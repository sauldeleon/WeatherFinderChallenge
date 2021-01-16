import React from 'react'
import './TitleContainer.css'
import { ClassContainerProps } from '../../utils/types'

export const TitleContainer: React.FC<ClassContainerProps> = ({ className }) => (
  <div className={`title-container ${className}`}>
    <div>
      <h1 className="title-container__title">Weather Finder</h1>
      <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
    </div>
  </div>
)
