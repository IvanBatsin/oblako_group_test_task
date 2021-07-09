import React from 'react';
import './dropdown.scss';
import classNames from 'classnames';

import arrowDown from '../../images/arrow_down.svg';
import arrowUp from '../../images/arrow_up.svg';

interface DropDownProps {
  label: string,
  items: string[]
}

export const Dropdown: React.FC<DropDownProps> = ({items, label}) => {
  const [active, setActive] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleChooseItem = (index: number): void => {
    setActive(index);
    setIsOpen(false);
  }

  return (
    <div className={classNames('dropdown', {'open': isOpen})}>
      <label>{label}</label>
      <div onClick={e => setIsOpen(!isOpen)}>
        <span>{items[active]}</span>
        <img src={isOpen ? arrowUp : arrowDown} alt="Arrow" />
      </div>
      <ul className={classNames('dropdown_items', {'open': isOpen})}>
        {items.map((item, index) => {
          return <li onClick={e => handleChooseItem(index)} key={index} className={index === active ? 'active_item' : ''}>{item}</li>
        })}
      </ul>
    </div>
  )
}