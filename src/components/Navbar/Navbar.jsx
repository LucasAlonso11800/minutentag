import { NavHome, NavBag, NavCheckout, NavSetting } from '@/assets';
import React from 'react'
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.nav}>
        <img className={classes.image} src={NavHome.src} alt="Home" />
        <img className={classes.image} src={NavBag.src} alt="Bag" />
        <img className={classes.image} src={NavCheckout.src} alt="Checkout" />
        <img className={classes.image} src={NavSetting.src} alt="Setting" />
    </nav>
  )
}
