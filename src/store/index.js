import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from "redux-saga";
import sortReducer from './features/sortSlice';
import productsReducer from './features/productsSlice';
import backetReducer from './features/backetSlice';
import saga from '../saga/index';

export const history = createBrowserHistory();

let sagaMiddleware = createSagaMiddleware(saga);
const middleware = [sagaMiddleware,routerMiddleware(history)];

export default configureStore({
  reducer: {
    router: connectRouter(history),
    sort: sortReducer,
    products: productsReducer,  
    backet: backetReducer,  
  },
  middleware
})
sagaMiddleware.run(saga);