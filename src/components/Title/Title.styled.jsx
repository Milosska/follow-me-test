import styled from 'styled-components';

export const PageHeader = styled.h1`
  font-family: 'Monoton';
  font-size: 82px;
  line-height: 88px;
  color: #5736a3;
`;

export const Letters = styled.span`
  color: #5736a3;
  text-shadow: 0 0 0 #faebd7;
  animation: loading 1s ease-in-out infinite alternate;

  @keyframes loading {
    0% {
      text-shadow: 0 0 0 #5cd3a8;
    }
    100% {
      text-shadow: 10px 0 20px #faebd7;
    }
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
  &:nth-child(5) {
    animation-delay: 0.8s;
  }
  &:nth-child(6) {
    animation-delay: 1s;
  }
  &:nth-child(7) {
    animation-delay: 1.2s;
  }
  &:nth-child(8) {
    animation-delay: 1.4s;
  }
`;
