import { AddIcon } from "@/assets";
import Link from "next/link";
import React from "react";
import classes from "./ProductCardPreview.module.css";

export default function ProductCardPreview({ product }) {
  const { brand, image, skus } = product;

  return (
    <div className={classes.container}>
      <h4 className={classes.brand}>{brand}</h4>
      <img className={classes.image} src={image} alt={brand} />
      <p className="price">${skus[0].price}</p>
      <button className={classes.button}>
        <Link href={product.slug}>
          <img src={AddIcon.src} alt="Add" />
        </Link>
      </button>
    </div>
  );
}
