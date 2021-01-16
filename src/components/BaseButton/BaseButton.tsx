import React from 'react'
import './BaseButton.css'

export interface BaseButtonProps {
  /** button label */
  label: string
  /** wether if the button is disabled or not*/
  disabled?: boolean
  /** on click handler*/
  onClick?: () => void
}

export const BaseButton: React.FC<BaseButtonProps> = ({ label, onClick, disabled }) => (
  <button className="base-button" disabled={disabled} onClick={onClick}>
    {label}
  </button>
)
