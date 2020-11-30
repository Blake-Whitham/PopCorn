import React from 'react';
import Styled from 'styled-components';

const CornerIcon = Styled.img`
  height: 100px;
  width: 100px;
  position: static;
`;

export default function Icon() {
  return (
    <CornerIcon alt="Logo" src="popcorn.jpeg" />
  );
}
