import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

import { getProduct } from '../../store/modules/products/actions';
import { ProductItem } from '../../components';
import { Container } from './styles';

export default function ProductsDetails() {

  const {
    products: { loading, productDetails },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const { state: { productId } } = useLocation();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  console.log(loading);

  return (
    <Container>
      {loading && <p>Buscando...</p>}
      {!loading && <p>{productDetails ?.name}</p>}
    </Container>
  );
}
