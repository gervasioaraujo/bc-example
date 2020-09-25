import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  products: [],
  productDetails: null
};

export default function exemple(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'GET_PRODUCTS_FROM_API':
        draft.loading = true;
        break;
      case 'GET_PRODUCTS_FROM_API_SUCCED':
        draft.loading = false;
        draft.products = action.payload.data;
        break;
      case 'GET_PRODUCT_BY_ID_FROM_API':
        draft.loading = true;
        break;
      case 'GET_PRODUCT_BY_ID_FROM_API_SUCCED':
        draft.loading = false;
        draft.productDetails = action.payload.data;
        break;
      default:
    }
  });
}
