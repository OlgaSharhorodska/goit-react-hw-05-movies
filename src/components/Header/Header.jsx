import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderNav, HeaderWrap } from './Header.styled';
import { Container } from 'components/Container/Container.styled';

const Header = () => {
  const styleNav = ({ isActive }) => ({
    color: isActive ? 'tomato' : 'white',
    textDecoration: 'none',
  });

  return (
    <HeaderWrap>
      <Container>
        <HeaderNav>
          <NavLink style={styleNav} to="/">
            Home
          </NavLink>
          <NavLink style={styleNav} to="movies">
            Movies
          </NavLink>
        </HeaderNav>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
