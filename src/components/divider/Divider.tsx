import React from 'react';
import './divider.scss';
import classNames from 'classnames';

interface DividerProps {
  titles: string[],
  chooseTab?: (index: number) => void 
}

export const Divider: React.FC<DividerProps> = ({titles, chooseTab}) => {
  const [active, setActive] = React.useState<number>(0);

  const handleSetActive = (index: number): void => {
    setActive(index);

    if (chooseTab) {
      chooseTab(index);
    }
  }

  return (
    <div className="divider">
      {titles.map((item, index) => {
        return <div onClick={e => handleSetActive(index)} key={index} className={classNames(`divider_item`, {'active': index === active})}>{item}</div>
      })}
    </div>
  )
}