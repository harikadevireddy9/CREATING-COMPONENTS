import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonElement = styled.button`
  background-color: ${(props) => props.backgroundColor || 'blue'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || 'blue'};
  }
`;

const Button = ({ onClick, text, backgroundColor, color, hoverBackgroundColor }) => {
  return (
    <ButtonElement
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {text}
    </ButtonElement>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
};

export default Button;
