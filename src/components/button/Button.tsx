import React from 'react';
import './button.scss';

interface ButtonProps {
 styleClasses?: string[],
 children?: React.ReactNode,
 clickFn?: () => void
}

export const Button: React.FC<ButtonProps> = ({children, styleClasses, clickFn}) => {
  const classes = styleClasses ? 'btn ' + styleClasses.join(' ') : 'btn';

  const mock = () => {
    if (clickFn) {
      clickFn();
      return;
    }
  }

  return (
    <button onClick={e => mock()} className={classes}>
      {children}
    </button>
  )
}