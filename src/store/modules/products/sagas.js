import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';

function getProductsFromAPI() {
  return api.get('/example/products');
}

export function* getProducts() {
  try {
    const response = yield call(getProductsFromAPI);
    if (response.status === 200)
      yield put({ type: 'GET_PRODUCTS_FROM_API_SUCCED', payload: { data: response.data } });
  } catch (err) {
    yield put({ type: 'GET_PRODUCTS_FROM_API_FAILS', payload: { error: err.message } });
  }
}

function getProductByIdFromAPI(id) {
  return api.get(`/example/products/${id}`);
}

export function* getProductById({ payload: { id } }) {
  try {
    const response = yield call(getProductByIdFromAPI, id);
    if (response.status === 200)
      yield put({ type: 'GET_PRODUCT_BY_ID_FROM_API_SUCCED', payload: { data: response.data } });
  } catch (err) {
    yield put({ type: 'GET_PRODUCT_BY_ID_FROM_API_FAILS', payload: { error: err.message } });
  }
}

export default all([
  takeLatest('GET_PRODUCTS_FROM_API', getProducts),
  takeLatest('GET_PRODUCT_BY_ID_FROM_API', getProductById),
]);
