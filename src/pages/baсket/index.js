import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ProductsList from "../../components/productsList/index";

const useStyles = makeStyles((theme) => ({}));

function Backet() {
  const backet = useSelector((store) => store.backet);
  const products = useSelector((store) => store.products);

  const backetProducts = useMemo(() => {
    if(products.length>0 && backet.length>0){
      console.log(products);console.log(backet);
      return backet.map(item=>products.find(elem=>item===elem.id));
    }
    return null;
  }, [backet, products]);console.log(backetProducts);
  return (<>
      <ProductsList products={backetProducts} />
     </> )
};

export default Backet;
