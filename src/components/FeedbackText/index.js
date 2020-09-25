import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpan } from './styles';

export default function FeedbackText({ text, type }) {

  return (
    <StyledSpan type={type}>{text}</StyledSpan>
  );

}

FeedbackText.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error']),
};

FeedbackText.defaultProps = {
  text: '',
  type: 'info',
};
