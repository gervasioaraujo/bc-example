import produce from 'immer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const INITIAL_STATE = {
  loading: false,
  error: null,
  products: [],
  productDetails: null
};

const productsPersistConfig = {
  key: 'products',
  storage: storage,
  blacklist: ['loading', 'error']
}

function productsReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'GET_PRODUCTS_FROM_API':
        draft.loading = true;
        draft.error = null;
        break;
      case 'GET_PRODUCTS_FROM_API_SUCCED':
        draft.loading = false;
        draft.products = action.payload.data;
        break;
      case 'GET_PRODUCTS_FROM_API_FAILS':
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      case 'GET_PRODUCT_BY_ID_FROM_API':
        draft.loading = true;
        draft.error = null;
        draft.productDetails = null;
        break;
      case 'GET_PRODUCT_BY_ID_FROM_API_SUCCED':
        draft.loading = false;
        draft.productDetails = action.payload.data;
        break;
      case 'GET_PRODUCT_BY_ID_FROM_API_FAILS':
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      default:
    }
  });
}

export default persistReducer(productsPersistConfig, productsReducer);
