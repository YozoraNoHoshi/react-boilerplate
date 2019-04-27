/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../Flex';

const StyledNavBar = styled(Flex)`
  & > a {
    box-shadow: 0 0 black;
    text-decoration: none;
  }
`;

const StyledNavItem = styled.div`
  padding: 5px;
  margin: 5px;
  background: steelblue;
  border-radius: 5px;
  color: white;
`;

class NavBar extends PureComponent {
  render() {
    return (
      <StyledNavBar cWidth={100} row jCenter alCenter>
        <NavLink to="/">
          <StyledNavItem>Show All Strings</StyledNavItem>
        </NavLink>
        <NavLink to="/add">
          <StyledNavItem>Add a New String</StyledNavItem>
        </NavLink>
      </StyledNavBar>
    );
  }
}

NavBar.defaultProps = {};

NavBar.propTypes = {};

export default NavBar;
