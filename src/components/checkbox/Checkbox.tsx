import React from 'react';
import './checkbox.scss';
import classNames from 'classnames';
import { v4 } from 'uuid';

interface CheckboxProps {
  label: string,
  short?: boolean
  checked?: boolean,
  onChange?: () => void,
  reverse?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({label, short, checked, onChange, reverse}) => {
  const id = v4();

  const mock = (): void => {
    if (onChange) {
      onChange();
      return;
    }
  }

  if (reverse) {
    return (
      <div className="checkbox-container reverse">
        <input id={id} className="hidden-xs-up" type="checkbox" onChange={e => mock()} checked={checked}/>
        <label htmlFor={id} className="label reverse">{label}</label>
        <label htmlFor={id} className={classNames('cbx', 'reverse')}></label>
      </div>
    )
  }

  return (
    <div className="checkbox-container">
      <input id={id} className="hidden-xs-up" type="checkbox" onChange={e => mock()} checked={checked}/>
      <label htmlFor={id} className={classNames('cbx', {'short': short})}></label>
      <label htmlFor={id} className="label">{label}</label>
    </div>
  )
}