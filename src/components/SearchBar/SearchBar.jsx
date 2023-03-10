import { Glass } from "@/assets";
import React from "react";
import classes from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <section className={classes.container}>
      <img className={classes.glass} src={Glass.src} alt="glass" />
      <input
        className={classes.input}
        type="search"
        name="search"
        id="search"
        placeholder="Search burger, pizza, drink or ect..."
      />
    </section>
  );
}
