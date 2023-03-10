import React from 'react'
import { Head, Navbar } from '..'
import classes from './Layout.module.css'

export default function Layout({title, children}) {
  return (
    <div className={classes.container}>
        <Head title={title}/>
        {children}
        <Navbar />
    </div>
  )
}
