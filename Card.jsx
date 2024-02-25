import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
`;

const CardTitle = styled.h2`
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  color: #666;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Card;
