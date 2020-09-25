import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { listProducts } from '../../store/modules/products/actions';
import { ProductItem, FeedbackText } from '../../components';
import { Container } from '../../styles/layout';

export default function ProductsList() {

  const {
    products: { loading, products, error },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <Container>
      {loading && <p>Carregando...</p>}
      {(!loading && error) &&
        <FeedbackText text={error} type="error" />
      }
      {products &&
        products.map(p => <ProductItem key={p.id} data={p} />)
      }
    </Container>
  );
}
