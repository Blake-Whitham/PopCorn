import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-100px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
`;
const BounceLogo = styled.img`
  display: inline-block;
  animation: ${bounce} 1s linear 1;
`;
export default function Logo() {
  return (
    <div>
      <BounceLogo alt="Logo" height="100%" width="100%" src="popcorn.jpeg" />
    </div>
  );
}
