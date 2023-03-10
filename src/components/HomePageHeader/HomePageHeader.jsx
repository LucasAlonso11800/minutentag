import { MenuIcon, User } from '@/assets';
import React from 'react';
import classes from './HomePageHeader.module.css';

export default function HomePageHeader() {
  return (
    <header className={classes.container}>
        <div className={classes.row}>
            <img src={MenuIcon.src} alt="Menu" className={classes.menu}/>
            <img src={User.src} alt="User" className={classes.user}/>
        </div>
        <p className={classes.subtitle}>Hi Mr. Michael</p>
        <h1 className={classes.title}>Welcome Back!</h1>
    </header>
  )
}
