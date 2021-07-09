import React from 'react';
import './participants.scss';

import { List } from '../../../list/List';
import { TextInput } from '../../../textInput/TextInput';
import { Dropdown } from '../../../dropdown/Dropdown';
import { FiltersResult } from '../../../filtersResult/FiltersResult';

import dragAndDrop from '../../../../images/dragAndDrop.svg';

const data = [
  {name: 'John Morrison', checked: true}, 
  {name: 'Dart Wader', checked: false}, 
  {name: 'Big Baby Tape', checked: false}, 
  {name: 'SQWOZ BAB', checked: false},
  {name: 'Larry Willson', checked: false},
  {name: 'Garry Low', checked: false},
  {name: 'Sally Shelly', checked: false},
];

export const ParticipantsTab: React.FC = () => {
  const [chooseUsers, setChoosenUsers] = React.useState<boolean>(data.length > 0);

  return (
    <div className="block">
      <div className="left">
        <h4 className="h4">Доступные участники</h4>
        <div className="filters">
          <div className="filters_row">
            <TextInput label="Поиск" firstImage />
            <Dropdown label="Группа" items={['Алминистрирование', 'Все остальное']}/>
          </div>
          <div className="filters_row">
            <Dropdown label="Группа" items={['Менеджер по персоналу', 'Все остальное']}/>
            <Dropdown label="Группа" items={['3 – 10 лет', '10 – 11 лет']}/>
          </div>

          <FiltersResult 
            styleClasses={['jcsb']} 
            resultCount={12} 
            clearBtnText="Сбросить" 
            resultItemName="пользователя" 
            settingBtnText="Настроить"
            margins={{marginBottom: 42}}
          />

          <List data={data} selectAllLabel={'Все пользователи'} canDelete={false}/>
        </div>
      </div>
      <div className="right">
        <h4 className="h4">Участники мероприятия</h4>
        <div className="participants-list">
          {chooseUsers ? <List canDelete={true} data={data} selectAllLabel={'Все пользователи'} userIsOver={() => setChoosenUsers(false)}/>
            :
            <div className="participants-list_empty">
              <img src={dragAndDrop} alt="Drag and Drop" />
              <span>Наполните группу, перетаскивая участников     из списка доступных в левой колонке</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}