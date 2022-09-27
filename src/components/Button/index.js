import React from 'react';
import { ButtonPage } from './style.js';

const Button = ({ text, onClick }) => {
  return <ButtonPage onClick={onClick}>{text}</ButtonPage>;
};

export default Button;
