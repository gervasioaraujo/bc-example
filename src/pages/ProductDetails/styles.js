import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  width: 100%;

  text-align: center;

  img {

    width: 30vw;
    height: 30vw;

    object-fit: contain;
  }

  h2 {
    font-size: 3rem;
    color: var(--color-text-title);
  }

  span {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-text-complement);
  }

  .price {
    font-size: 3.5rem;
    color: var(--color-secondary);
  }

`
