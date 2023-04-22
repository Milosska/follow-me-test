import { useLocation } from 'react-router-dom';
import {
  NavContainer,
  LogoLink,
  LogoImg,
  LogoText,
  List,
  NavigationLink,
} from './NavBar.styled';

export const NavBar = () => {
  const location = useLocation();

  const setPicture = () => {
    const ratio = window.devicePixelRatio;
    return ratio > 1
      ? require('../../images/logo.png')
      : require('../../images/logo@2x.png');
  };

  return (
    <NavContainer>
      <LogoLink to="/">
        <LogoImg src={setPicture()} alt="logo" />
        <LogoText>FollowMe</LogoText>
      </LogoLink>
      <List>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/tweets" state={{ from: location }}>
            Tweets
          </NavigationLink>
        </li>
      </List>
    </NavContainer>
  );
};
