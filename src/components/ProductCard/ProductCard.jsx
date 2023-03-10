import { OrangeBag } from "@/assets";
import React, { useState } from "react";
import classes from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { information, skus, origin, brand } = product;

  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [selectedSku, setSelectedSku] = useState(skus[0]);
  const handleSelectedSkuChange = (sku) => () => setSelectedSku(sku);

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>{brand}</h2>
        <p className={classes.price}>${selectedSku.price}</p>
      </div>
      <div className={classes.info}>
        Origin: {origin} &nbsp; | &nbsp; Stock: {selectedSku.stock}
      </div>
      <h4 className={classes.subtitle}>Description</h4>
      {descriptionOpen ? (
        <p className={classes.text}>
          {information}
        </p>
      ) : (
          <p className={classes.text}>{information.slice(0, 189)}...
          <span onClick={() => setDescriptionOpen(true)}> Read more</span>
          </p>
      )}
      <h4 className={classes.subtitle}>Size</h4>
      <div className={classes.skusContainer}>
        {skus.map((sku) => (
          <div
            key={sku.code}
            className={`${classes.sku} ${
              selectedSku.code === sku.code ? classes.selected : ""
            }`}
            onClick={handleSelectedSkuChange(sku)}
          >
            {sku.name}
          </div>
        ))}
      </div>
      <div className={classes.buttons}>
        <button className={classes.button}>
            <img src={OrangeBag.src} alt="Bag" />
        </button>
        <button className={classes.addButton}>Add to cart</button>
      </div>
    </div>
  );
}
