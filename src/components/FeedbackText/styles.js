import styled from 'styled-components';

export const StyledSpan = styled.span`
  width: 100%;
  text-align:center;

  padding: 1vw;
  border-radius: 3px;
  font-weight: bold;

  color: ${({ type }) => type === 'error' ?
    'var(--color-text-error)' :
    'var(--color-text-info)'
  };
  background-color: ${({ type }) => type === 'error' ?
    'var(--color-background-error)' :
    'var(--color-background-info)'
  };
`
