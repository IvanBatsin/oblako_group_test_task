import React from 'react';
import './header.scss';

import { Button } from '../button/Button';
import plusIcon from '../../images/plus.svg';
import burgerBtn from '../../images/burger-btn.svg';
import logo from '../../images/logo.svg';

interface HeaderProps {
  openCloseModal: () => void
}

export const Header: React.FC<HeaderProps> = ({openCloseModal}) => {
  return (
    <header className="section-outer section-header">
      <div className="header-upper">
        <Button>
          <img src={burgerBtn} alt="Burger"/>
        </Button>
        <h4>Обучение</h4>
        <Button styleClasses={['full']} clickFn={openCloseModal}>
          <img src={plusIcon} alt="Plus"/>
          Запланировать
        </Button>
        <Button styleClasses={['short']} clickFn={openCloseModal}>
          <img src={plusIcon} alt="Plus"/>
        </Button>
      </div>
      <div className="header-low">
        <div className="header-low_navigation">Главная   —   Планирование</div>
        <div className="header-low_title">
          <img src={logo} alt="Logo"/>
          <h1>Планирование</h1>
        </div>
      </div>
    </header>
  )
}