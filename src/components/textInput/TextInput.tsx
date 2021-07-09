import React from 'react';
import './textInput.scss';

import searchIcon from '../../images/search.svg';

interface InputProps {
  label: string,
  firstImage: boolean,
  firstImageUrl?: string,
  secondImage?: string,
  styleClasses?: string[],
  defaultValue?: string
}

export const TextInput: React.FC<InputProps> = ({label, secondImage, firstImage, styleClasses, firstImageUrl, defaultValue}) => {
  const classes = styleClasses ? "text-input " + styleClasses.join(' ') : 'text-input';
  return (
    <div className={classes}>
      {firstImage && <img src={firstImageUrl ? firstImageUrl : searchIcon} alt="Search"/>}
      <div>
        <input type="text" required={true} defaultValue={defaultValue}/>
        <label>{label}</label>		
      </div>
      {secondImage && <img style={{cursor:'pointer'}} src={secondImage} alt="Second"/>}
    </div>
  )
}