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
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      width: "0 !important",
      display: "none",
    },
  },
}));

export default function ProductsList({ products }) {console.log(products);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products && products.length > 0 ? (
        products.map((item,index) => {
          return (          
              <ProductCard key={`${item.id}_${index}`} item={item} />
          );
        }
        )
      ) : (
        <h1>нет продуктов</h1>
      )}
    </div>
  );
}
