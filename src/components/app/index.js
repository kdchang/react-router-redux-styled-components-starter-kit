import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../home';
import About from '../about';

const NavItem = styled(NavLink)`
    color: #FFFFF;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    margin: 5px;
    display: inline-block;
    &:hover {
        color: #d9b300;
    }
`;

const Wrapper = styled.div`
`;

const Header = styled.header`
`;

const Title = styled.h1`
  font-size: 20px;
  display: inline;
`;

const activeStyle = {
  backgroundColor: '#0099FF',
};

const App = () => (
  <Wrapper>
    <Header>
      <Title>
        React App Starter kit
      </Title>
      <NavItem
        exact
        to="/"
        activeStyle={activeStyle}
      >
        Home
      </NavItem>
      <NavItem
        to="/about-us"
        activeStyle={activeStyle}
      >
        About
      </NavItem>
    </Header>
    <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Wrapper>
  </Wrapper>
);


export default App;
