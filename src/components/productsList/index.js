import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "../Card";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "70px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  ul: {
    overflow: "auto",
    maxHeight: "100vh",
    overflow: "-moz-scrollbars-none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      width: "0 !important",
      display: "none",
    },
  },
}));

export default function ProductsList({ products }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products.length > 0 ? (
        products.map((item) => {
          return (
            <LazyLoad key={item._id} height={200} offset={100}>
              <ProductCard key={item._id} item={item} />
            </LazyLoad>
          );
        })
      ) : (
        <h1>нет продуктов</h1>
      )}
    </div>
  );
}
