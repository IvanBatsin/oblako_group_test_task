import React from 'react';
import './radio.scss';

interface RadioProps {
  label: string
}

export const Radio: React.FC<RadioProps> = ({label}) => {
  return (
    <label>
      <input type="radio" name="radio"/>
      <span>{label}</span>
    </label>
  )
}