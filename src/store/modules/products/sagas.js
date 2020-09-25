import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';

function getProductsFromAPI() {
  return api.get('/example/products');
}

export function* getProducts() {
  try {
    const { status, data } = yield call(getProductsFromAPI);
    if (status === 200)
      yield put({ type: 'GET_PRODUCTS_FROM_API_SUCCED', payload: { data } });
    else console.log('Error');
  } catch (err) {
    // Saída de Erro
  }
}

function getProductByIdFromAPI(id) {
  return api.get(`/example/products/${id}`);
}

export function* getProductById({ payload: { id } }) {
  try {
    const { status, data } = yield call(getProductByIdFromAPI, id);
    if (status === 200)
      yield put({ type: 'GET_PRODUCT_BY_ID_FROM_API_SUCCED', payload: { data } });
    else console.log('Error');
  } catch (err) {
    // Saída de Erro
  }
}

export default all([
  takeLatest('GET_PRODUCTS_FROM_API', getProducts),
  takeLatest('GET_PRODUCT_BY_ID_FROM_API', getProductById),
]);
