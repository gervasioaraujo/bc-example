import styled from 'styled-components';
import { Link } from "react-router-dom";

// background-color: ${({ theme }) => theme.color.white};
export const Touchable = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 5px;

  background-color: red;
  margin: 1px;
  border-radius: 5px;

  text-decoration: none;

  img {
    width: 200px;
    height: 200px;
    margin: 10px 0 40px;
  }
  h2 {
    font-size: 16px;
    color: #000;
  }
  span {
    font-weight: bold;
  }
`
