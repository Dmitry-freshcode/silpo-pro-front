import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSort } from "../../store/features/sortSlice";
import { sagaActions } from "../../saga/sagaActions";
import { makeStyles } from "@material-ui/core/styles";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import { ButtonGroup, Button } from "@material-ui/core/";
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    width: "100vw",
    zIndex: "10",
    backgroundColor: "#ec952a",
    color: "white !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
 
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 5px 0 20px",  
  },
  buttomGroup: {
    height: "20px",
    width: "120px",
    color: "white",
    borderColor: "white",
    fontWeight: "bold",
  },
  label: {
    color: "white",
    borderColor: "white",
    justifyContent: "center",
    padding: "5px 0",
    fontWeight: "bold",
  },
  mirror:{
    transform: "rotate(180deg) scaleX(-1)",
  }
}));

export default function Header(props) {
  const classes = useStyles();
  let history = useHistory();
  const sort = useSelector(store=>store.sort);
  const products = useSelector(store=>store.products);

  // useEffect(()=>{
  //   if(products.length>0){
  //     const localStor = JSON.parse(localStorage.getItem('backet'));
  //     if(localStor.length>0){
  //       const newStorage = JSON.stringify(
  //         localStor.filter(item=>products.find(elem=>elem._id===item))
  //       )
  //       localStorage.setItem('backet',newStorage)
  //     }
      
  //   }
  // },[products])

  const buttomArrow = useCallback(value=>{
    if(value===sort.field){
      return sort.sort===1 ? <SortIcon className={classes.mirror}/> :<SortIcon  />
    } else {return null}
  })

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA });
  }, []);
 
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <Button className={classes.label} onClick={() => history.push("/")}>
          Товары
        </Button>
        <Button onClick={() => history.push("/backet")}>
          <LocalGroceryStoreOutlinedIcon htmlColor="white" />
        </Button>
      </div>
      <ButtonGroup
        className={classes.label}
        aria-label="outlined primary button group"
      >   
        <Button
          className={classes.buttomGroup}
          value="slug"
          onClick={() => dispatch(selectSort("slug"))}
        >
          название{buttomArrow("slug")}
        </Button>
        <Button
          className={classes.buttomGroup}
          onClick={() => dispatch(selectSort("price"))}
        >
          цена{buttomArrow("price")}
        </Button>
        <Button
          className={classes.buttomGroup}
          onClick={() => dispatch(selectSort("discount"))}
        >
          скидка{buttomArrow("discount")}
        </Button>
      </ButtonGroup>
    </div>
  );
}
