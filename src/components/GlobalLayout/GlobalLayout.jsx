import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { Main, Footer, FooterLink } from './GlobalLayout.styled';
const GlobalLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <FooterLink
          href="https://github.com/Milosska/follow-me-test"
          target="blank"
          rel="noreferrer noopener nofollow"
        >
          &#169; Milosska - All rights reserved, 2023
        </FooterLink>
      </Footer>
    </>
  );
};

export default GlobalLayout;
