import React from 'react';
import PropTypes from 'prop-types';

import { Touchable, ProductInfo } from './styles';

export default function ProductItem({ data }) {

  const { id, photo_url, name, price } = data;

  // console.log(data);

  return (
    <Touchable to={{
      pathname: '/productDetails',
      state: { productId: id }
    }}>
      <img src={photo_url} alt={name} />
      <ProductInfo>
        <h2>{name}</h2>
        <span>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
      </ProductInfo>
    </Touchable>
  );

}

ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
};

ProductItem.defaultProps = {
  data: {}
};
