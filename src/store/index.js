import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from "redux-saga";
import sortReducer from './features/sortSlice';
import productsReducer from './features/productsSlice';
import saga from '../saga/index';

export const history = createBrowserHistory();

let sagaMiddleware = createSagaMiddleware(saga);
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware,routerMiddleware(history)];

export default configureStore({
  reducer: {
    sort: sortReducer,
    products: productsReducer,
  },
  middleware
})
sagaMiddleware.run(saga);