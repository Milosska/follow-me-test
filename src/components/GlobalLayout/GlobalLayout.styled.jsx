import styled from 'styled-components';

export const Main = styled.main`
  min-height: 90vh;
`;

export const Footer = styled.main`
  padding: 10px 15px;
  background-color: #5736a3;
  text-align: center;
`;

export const FooterLink = styled.a`
  font-family: 'MontserratMedium';
  font-size: 18px;
  line-height: 22px;
  color: #ebd8ff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #5cd3a8;
  }

  &:active {
    color: #5cd3a8;
    text-decoration: underline 2px #5cd3a8;
  }
`;
