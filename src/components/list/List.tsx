import React from 'react';
import './list.scss';

import { Checkbox } from '../checkbox/Checkbox';

import trashIcon from '../../images/trash.svg';

interface ListProps {
  data: {name:string, checked: boolean}[],
  selectAllLabel: string,
  canDelete: boolean,
  userIsOver?: () => void
}

export const List: React.FC<ListProps> = ({data, selectAllLabel, canDelete, userIsOver}) => {
  const [listData, setListData] = React.useState<{name: string, checked: boolean}[]>(data);
  const [isAllChecked, setIsAllCheked] = React.useState<boolean>(false);
  
  const handleChange = (index: number): () => void => {
    return () => {
      const draft = [...listData];
      const el = draft[index];
      el.checked = !el.checked;
      draft[index] = el;
      setListData(draft);
    }
  }

  const deleteItem = (index: number): void => {
    const draft = [...listData];
    draft.splice(index, 1);;
    setListData(draft);
  }

  const chooseAllItems = (): void => {
    setIsAllCheked(!isAllChecked);

    if (!isAllChecked) {
      const newData = listData.map(item => {
        item.checked = true;
        return item
      });
      setListData(newData);
      return;
    }

    const newData = listData.map(item => {
      item.checked = false;
      return item
    });
    setListData(newData);
  }

  React.useEffect(() => {
    if (!listData.length && userIsOver) {
      userIsOver!();
    }
  }, [listData, userIsOver]);

  return (
    <ul className="list">
      {listData.length > 0 && <li className="list_item"><Checkbox label={selectAllLabel} short checked={isAllChecked} onChange={chooseAllItems}/></li>}
      <>
        {listData.map((item, index) => {
          return (
            <li key={index} className="list_item">
              <Checkbox label={item.name} checked={item.checked} onChange={handleChange(index)}/>
              {canDelete && <img src={trashIcon} alt="Trash" onClick={e => deleteItem(index)}/>}
            </li>
          )
        })}
      </>
    </ul>
  )
}