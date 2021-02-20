import { call, takeEvery, put , select  } from "redux-saga/effects";
import Axios from "axios";
import { add } from '../store/features/productsSlice';
import { selectSort } from '../store/features/sortSlice'
import { sagaActions } from "./sagaActions.js";
import config from '../config/index';

export function* fetchDataSaga() {
  try {
    const storeSort = yield select(state=>state.sort);
    const { field, sort, limit , skip } = storeSort;
    let result = yield call(() =>
    Axios.get(`${config.BASE_URL}/products?field=${field}&sort=${sort}&limit=${limit}&skip=${skip}`));
    yield put(add(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {  
 yield takeEvery(selectSort.type, fetchDataSaga);
 yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
