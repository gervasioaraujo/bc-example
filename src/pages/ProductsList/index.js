import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { listProducts } from '../../store/modules/products/actions';
import { ProductItem } from '../../components';
import { Container } from './styles';

export default function ProductsList() {

  const {
    products: { loading, products },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <Container>
      {loading && <p>Buscando...</p>}
      {!loading &&
        products.map(p => <ProductItem key={p.id} data={p} />)
      }
    </Container>
  );
}
