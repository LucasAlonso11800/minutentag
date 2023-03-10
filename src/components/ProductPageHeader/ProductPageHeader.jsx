import { Dots, Back } from "@/assets";
import Link from "next/link";
import React from "react";
import classes from './ProductPageHeader.module.css'

export default function ProductPageHeader() {
  return (
    <header className={classes.container}>
        <Link href="/">
          <img src={Back.src} alt="Back" />
        </Link>
      <p className={classes.detail}>Detail</p>
      <div className={classes.imageContainer}>
        <img src={Dots.src} alt="Dots" />
      </div>
    </header>
  );
}
