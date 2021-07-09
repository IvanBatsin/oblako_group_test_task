import React from 'react';
import './editbar.scss';
import classNames from 'classnames';

import { Button } from '../button/Button';
import { Divider } from '../divider/Divider';
import { MainTab } from './tabs/mainTab/MainTab';
import { ParticipantsTab } from './tabs/participantsTab/ParticipantsTab';

import completeIcon from '../../images/complete.svg';
import clearIcon from '../../images/clear.svg';

interface ModalProps {
  show: boolean,
  closeModal: () => void
}

export const Editbar: React.FC<ModalProps> = ({show, closeModal}) => {
  const [isMainTab, setIsMainTab] = React.useState<boolean>(true);

  const handleChangeTabs = (index: number): void => {
    if (index === 0) {
      setIsMainTab(true);
      return;
    }

    setIsMainTab(false);
  }

  return (
    <div className={classNames('modal', {'show': show})}>
      <div className="panel">
        <div className="panel_header">
          <h3>Планирование</h3>
          <div className="panel_header_buttons">
            <Button clickFn={closeModal}>
              <img src={completeIcon} alt="Complete" />
            </Button>
            <Button clickFn={closeModal}>
              <img src={clearIcon} alt="Clear" />
            </Button>
          </div>
        </div>

        <Divider titles={['Основное', 'Участники']} chooseTab={handleChangeTabs}/>

        <div className="container">
          {isMainTab ? <MainTab/> : <ParticipantsTab/>}
        </div>
      </div>
    </div>
  )
}