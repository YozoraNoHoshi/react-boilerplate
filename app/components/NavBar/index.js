/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeStyle = { boxShadow: '0 1px black' };
const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  & > a {
    text-decoration: none;
  }
`;

const StyledNavItem = styled.div`
  padding: 5px;
  margin: 5px;
  background: steelblue;
  width: 40%;
  border-radius: 5px;
  color: white;
`;

class NavBar extends PureComponent {
  render() {
    return (
      <StyledNavBar>
        <NavLink to="/" activeStyle={activeStyle}>
          <StyledNavItem>Show All Strings</StyledNavItem>
        </NavLink>
        <NavLink to="/add" activeStyle={activeStyle}>
          <StyledNavItem>Add a New String</StyledNavItem>
        </NavLink>
      </StyledNavBar>
    );
  }
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

export default NavBar;
