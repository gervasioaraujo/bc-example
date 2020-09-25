export function listProducts() {
  return {
    type: 'GET_PRODUCTS_FROM_API',
  };
}

export function getProduct(id) {
  return {
    type: 'GET_PRODUCT_BY_ID_FROM_API',
    payload: { id },
  };
}
