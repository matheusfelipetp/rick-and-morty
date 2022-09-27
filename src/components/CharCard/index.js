import React from 'react';
import { Card } from './style';

const CharCard = ({ name, image, status }) => {
  return (
    <Card status={status}>
      <h2>{name}</h2>
      <img src={image} alt="Character" />
    </Card>
  );
};

export default CharCard;
