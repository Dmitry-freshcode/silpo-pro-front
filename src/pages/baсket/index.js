import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ProductsList from "../../components/productsList/index";

const useStyles = makeStyles((theme) => ({}));

function Backet() {
  const backet = useSelector((store) => store.backet);
  const products = useSelector((store) => store.products);

  const backetProducts = useMemo(() => {
    return products.filter((item) => backet.find((elem) => elem === item._id));
  }, [backet, products]);

  return <ProductsList products={backetProducts} />;
}

export default Backet;
