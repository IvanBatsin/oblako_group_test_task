import React from 'react';
import './main.scss';

import settingsIcon from '../../images/settings.svg';
import { Divider } from '../divider/Divider';
import { Dropdown } from '../dropdown/Dropdown';
import { TextInput } from '../textInput/TextInput';
import { Table } from '../table/Table';
import { FiltersResult } from '../filtersResult/FiltersResult';

export const Main: React.FC = () => {
  return (
    <main className="sectino-outer section-body">
      <Divider titles={['Групповое', 'Индивидуальное']}/>

      <div className="section-body_settings">
        <TextInput firstImage label={"Поиск"}/>
        <Dropdown items={['Все', 'Не все', 'Только несколько']} label="Программа"/>
        <Dropdown items={['Июнь 2019', 'rest', 'check']} label="Период"/>
        <Dropdown items={['Все', 'rest', 'check']} label="Статус"/>
      </div>
      
      <FiltersResult 
        styleClasses={['section-body_filters']}
        clearBtnText="Сбросить" 
        resultCount={33} 
        settingBtnText="Настроить фильтр" 
        resultItemName="сессии"
        margins={{result: 90, marginBottom: 70}}/>

     <div className="section-body_mobile">
      <TextInput firstImage label="Поиск" secondImage={settingsIcon}/>
      <Dropdown items={['Прогресс по обучению', 'rest', 'check']} label="Сортировка"/>
     </div>
    <Table/>
  </main>
  )
}