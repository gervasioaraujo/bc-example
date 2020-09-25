import React from 'react';

import { Touchable } from './styles';

export default function ProductItem({ data }) {

  const { id, photo_url, name, price } = data;

  // console.log(data);

  return (
    <Touchable to={{
      pathname: '/productDetails',
      state: { productId: id }
    }}>
      <span> -> {id}</span>
      <img src={photo_url} alt={name} />
      <h2>{name} </h2>
      <span> -> {price}</span>
    </Touchable>
  );

}
