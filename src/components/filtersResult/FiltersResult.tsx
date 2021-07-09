import React from 'react';
import './filtersResult.scss';

import { Button } from '../button/Button';

import settingsIcon from '../../images/settings.svg';
import clearIcon from '../../images/clear.svg';
import classNames from 'classnames';
import { Checkbox } from '../checkbox/Checkbox';

interface FiltersResultProps {
  resultItemName: string,
  settingBtnText: string,
  clearBtnText: string,
  resultCount: number,
  styleClasses?: string[],
  margins?: {result?: number, setting?: number, clear?: number, marginBottom?: number}
}

export const FiltersResult: React.FC<FiltersResultProps> = ({clearBtnText, resultItemName, settingBtnText, resultCount, styleClasses, margins}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const cls = styleClasses ? 'filters-result ' + styleClasses.join(' ') : 'filters-result';

  return (
    <div style={{marginBottom: margins?.marginBottom}} className={cls}>
      <span style={{marginRight: margins?.result}} className="result">{resultCount} {resultItemName}</span>
      <div className="settings_block">
        <Button clickFn={() => setIsOpen(!isOpen)} styleClasses={['settings']}><img src={settingsIcon} alt="Plus"/>{settingBtnText}</Button>
        <div className={classNames('settings_dropdown', {'open': isOpen})}>
          <div className="section_title">Системные поля</div>
          <ul>
            <li><Checkbox label="Поиск" reverse/></li>
            <li><Checkbox label="Группа" reverse/></li>
            <li><Checkbox label="Должность" reverse/></li>
            <li><Checkbox label="Стаж" reverse/></li>
          </ul>
          <div className="section_title">Дополнительные поля</div>
          <ul>
            <li><Checkbox label="Подразделение" reverse/></li>
            <li><Checkbox label="Округ" reverse/></li>
            <li><Checkbox label="Город" reverse/></li>
          </ul>
        </div>
      </div>
      <Button styleClasses={['clear']}><img src={clearIcon} alt="Settings" />{clearBtnText}</Button>
    </div>
  )
}