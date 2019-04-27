/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GetString from '../GetString/Loadable';
import AddString from '../AddString/Loadable';

import GlobalStyle from '../../global-styles';
import NavBar from '../../components/NavBar';

const StyledApp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <StyledApp>
      <NavBar />
      <Switch>
        <Route exact path="/" component={GetString} />
        <Route exact path="/add" component={AddString} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </StyledApp>
  );
}
