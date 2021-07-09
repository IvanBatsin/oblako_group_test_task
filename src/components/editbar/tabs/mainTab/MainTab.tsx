import React from 'react';
import './mainTab.scss';

import { Dropdown } from '../../../dropdown/Dropdown';
import { Radio } from '../../../radio/Radio';
import { TextInput } from '../../../textInput/TextInput';

import dateIcon from '../../../../images/date.svg';
import timeIcon from '../../../../images/time.svg';
import arrowDown from '../../../../images/arrow_down.svg';
import clearIcon from '../../../../images/clear.svg';

export const MainTab: React.FC = () => {
  return (
    <>
      <Dropdown label={'Программа'} items={['Страхование с заботой о клиенте', 'Second One']}/>

      <h4 className="h4">Мероприятие, дата и время проведения</h4>

      <TextInput label="Мероприятие" firstImage={false} defaultValue={'Главные правила продаж  Тренинг'} styleClasses={['secondary']}/>

      <div className="info">
        <TextInput label="Дата" firstImage firstImageUrl={dateIcon} secondImage={clearIcon}/>
        <TextInput label="Дата" firstImage firstImageUrl={timeIcon} secondImage={clearIcon}/>
        <Dropdown label={'Тренер'} items={['Сергей Трофимович', 'Second One']}/>
      </div>

      <TextInput label="Мероприятие" firstImage={false} defaultValue={'Страхование без потерь  Тренинг'} styleClasses={['secondary']}/>

      <div className="info">
        <TextInput label="Дата" firstImage firstImageUrl={dateIcon} secondImage={arrowDown}/>
        <TextInput label="Дата" firstImage firstImageUrl={timeIcon} secondImage={arrowDown}/>
        <Dropdown label={'Тренер'} items={['', 'Second One']}/>
      </div>

      <TextInput label="Мероприятие" firstImage={false} defaultValue={'Страховой случай или как помочь клиенту   Тренинг'} styleClasses={['secondary']}/>

      <div className="info">
        <TextInput label="Дата" firstImage firstImageUrl={dateIcon} secondImage={arrowDown}/>
        <TextInput label="Дата" firstImage firstImageUrl={timeIcon} secondImage={arrowDown}/>
        <Dropdown label={'Тренер'} items={['', 'Second One']}/>
      </div>

      <h4 className="h4">Условия записи по коду</h4>

      <div className="radio-fields">
        <Radio label="Не использовать код доступа"/>
        <Radio label="Требовать регистрацию"/>
        <Radio label="Запросить только имя и фамилию"/>
        <Radio label="Не требовать регистрацию, имя и фамилию"/>
      </div>
    </>
  )
}