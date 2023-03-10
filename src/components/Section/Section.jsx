import React from "react";
import classes from "./Section.module.css";

export default function Section({ children, title, onClick }) {
  return (
    <section className={classes.container}>
      <div className={classes.titleContainer}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.all} onClick={onClick}>
          See All
        </p>
      </div>
      <div className={classes.childrenContainer}>
        {children}
      </div>
    </section>
  );
}
