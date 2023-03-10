import { Dots, Back } from "@/assets";
import Link from "next/link";
import React from "react";
import classes from './ProductPageHeader.module.css'

export default function ProductPageHeader() {
  return (
    <header className={classes.container}>
      <div className={classes.imageContainer}>
        <Link href="/">
          <img src={Back.src} alt="Back" />
        </Link>
      </div>
      <p className={classes.detail}>Detail</p>
      <div className={classes.imageContainer}>
        <img src={Dots.src} alt="Dots" />
      </div>
    </header>
  );
}
