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

`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  border-top: 1px solid var(--color-line-in-white);
  padding: 1vw;

  h2 {
    font-size: 3rem;
    color: var(--color-text-title);
  }

  span {
    font-size: 1.5rem;
    color: var(--color-text-complement);
  }

  .price {
    font-weight: bold;
    font-size: 3.5rem;
    color: var(--color-secondary);
  }

`
