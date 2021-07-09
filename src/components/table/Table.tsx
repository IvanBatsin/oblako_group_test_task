import React from 'react';
import './table.scss';

import arrow_up from '../../images/arrow_up.svg';

import { Tr } from './TableBodyTr';

const tableData = [
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', participants: 12, trainer: '', progress: 12},
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', participants: 12, trainer: '', progress: 12},
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', participants: 12, trainer: '', progress: 12},
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', participants: 12, trainer: '', progress: 12},
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', participants: 12, trainer: '', progress: 12},
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', participants: 12, trainer: '', progress: 12},
  {date: '23 дек, 9:00', title: 'Страхование с заботой о клиенте', participants: 12, trainer: '', progress: 12},
]

export const Table: React.FC = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th data-type="date"><div><span>Дата начала</span></div></th>
          <th>Название</th>
          <th data-type="participants"><div><span>Участников</span></div></th>
          <th data-type="trainer">Тренер</th>
          <th data-type="progress">Прогресс <img src={arrow_up} alt="Arrow"/></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => {
          return (
            <Tr 
              key={index} 
              date={item.date} 
              trainer={item.trainer} 
              title={item.title} 
              participants={item.participants} 
              progress={item.progress}
            />
          )
        })}
      </tbody>
    </table>
  )
}