import React from "react";

import ProductsList from "../components/productsList";
import Header from "../components/header/index";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import store, { history } from '../store/index';
import { Provider } from 'react-redux';
import Backet from "../pages/baсket";
import { makeStyles } from "@material-ui/core/styles";
import AllProducts from "../pages/allProducts";


const useStyles = makeStyles((theme) => ({
  root: {   
    height:"100vh",      
  },
}));

export default function MainRouter() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className={classes.root}>
          <Header />
          <Switch>            
            <Route path="/backet" component={Backet} />
            <Route exact path="/" component={AllProducts}/>
          </Switch>
         
        </div>
      </ConnectedRouter> 
      </Provider>  
  );
}
