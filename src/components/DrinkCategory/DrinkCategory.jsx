import React from 'react'
import classes from './DrinkCategory.module.css';

export default function DrinkCategory({text, icon, selected, onClick}) {
  return (
    <div className={`${classes.container} ${selected ? classes.selected : ''}`} onClick={onClick}>
      {icon && <img className={classes.image} src={icon} alt={text}/>}
      <p className={classes.text}>{text}</p>
    </div>
  )
}
