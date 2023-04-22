import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  padding: 0 15px;
  background-color: #5736a3;
`;

export const LogoLink = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 70px;
  height: 40px;
`;

export const LogoText = styled.p`
  font-family: 'Monoton';
  color: #5cd3a8;
  font-size: 28px;
  line-height: 32px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  font-family: 'MontserratSemiBold';
  font-size: 22px;
  line-height: 28px;
  color: #ebd8ff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #5cd3a8;
  }

  &.active {
    color: #ebd8ff;
    text-decoration: underline 2px #5cd3a8;
  }
`;
