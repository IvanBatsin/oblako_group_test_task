import React from 'react';
import classNames from 'classnames';

import progressIcon from '../../images/progress.svg';
import settingsDots from '../../images/setting_dots.svg';
import pencil from '../../images/pencil.svg';
import trash from '../../images/trash.svg';

interface TrProps {
  date: string,
  title: string,
  participants: number,
  trainer: string,
  progress: number
}

export const Tr: React.FC<TrProps> = ({date, participants, progress, title, trainer}) => {
  const [tooltip, setTooltip] = React.useState<boolean>(false);
  return (
    <tr>
      <td data-type="date">{date}</td>
      <td data-type="title">{title}</td>
      <td data-type="participants">{participants}</td>
      <td data-type="trainer">{trainer}</td>
      <td data-type="progress">
        <div><img src={progressIcon} alt="Progress"/>{progress}%</div>
        <div className="setting-btn" onClick={e => setTooltip(!tooltip)}>
          <img src={settingsDots} alt="Dots"/>
          <div className={classNames('tooltip', {open:tooltip})}>
            <ul>
              <li onClick={e => setTooltip(!tooltip)}><img src={pencil} alt="Pencil"/>Редактировать</li>
              <li onClick={e => setTooltip(!tooltip)}><img src={trash} alt="Trash"/>Удалить слот</li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  )
}