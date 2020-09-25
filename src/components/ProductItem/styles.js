import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Touchable = styled(Link)`
  display: flex;

  width: 100%;
  padding: 1vw;

  margin: 2px 0;

  border-bottom: 1px solid var(--color-line-in-white);

  text-decoration: none;

  img {

    width: 10vw;
    height: 10vw;

    object-fit: contain;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  margin-left: .5vw;
  padding: .5vw;

  h2 {
    font-size: 2.6rem;
    color: var(--color-text-title);
    text-align: justify;
  }

  span {
    font-weight: bold;
    font-size: 2.6rem;
    color: var(--color-secondary);
  }
`
