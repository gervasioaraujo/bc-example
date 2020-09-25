import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

import { getProduct } from '../../store/modules/products/actions';
import { FeedbackText } from '../../components';
import { Container } from '../../styles/layout';
import { ProductWrapper, ProductInfo } from './styles';

export default function ProductsDetails() {

  const {
    products: { loading, productDetails, error },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const { state: { productId } } = useLocation();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  return (
    <Container>
      {loading && <p>Carregando...</p>}
      {(!loading && error) &&
        <FeedbackText text={error} type="error" />
      }
      {productDetails &&
        <ProductWrapper>
          <img src={productDetails.photo_url} alt={productDetails.name} />
          <ProductInfo>
            <h2>{productDetails.name}</h2>
            <span>{productDetails.category}</span>
            <span>{productDetails.description}</span>
            <span className="price">{productDetails.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
          </ProductInfo>
        </ProductWrapper>
      }
    </Container>
  );
}
