import React from 'react'
import './BaseInput.css'

interface BaseInputProps {
  /**input name */
  name: string
  /**input placeholder */
  placeholder: string
  /**onChange handler */
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

export const BaseInput: React.FC<BaseInputProps> = ({ name, placeholder, onChange }) => (
  <input data-testid={`input-${name}`} type="text" name={name} placeholder={placeholder} onChange={onChange} />
)
