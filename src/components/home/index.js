import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

const Wrapper = styled.div`
`;

const Header = styled.header`
`;

const Title = styled.h1`
`;

const SubTitle = styled.h2`
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
`;

const Home = props => (
  <Wrapper>
    <Header>
      <Title>Home</Title>
      <SubTitle>Count: {props.count}</SubTitle>
    </Header>

    <Wrapper>
      <Button onClick={props.increment} disabled={props.isIncrementing}>Increment</Button>
      <Button
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}
      >
        Increment Async
      </Button>
    </Wrapper>

    <Wrapper>
      <Button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</Button>
      <Button
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}
      >
        Decrement Async
      </Button>
    </Wrapper>

    <Wrapper>
      <Button onClick={() => props.changePage()}>Go to about page via redux</Button>
    </Wrapper>
  </Wrapper>
);

Home.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  isIncrementing: PropTypes.bool,
  isDecrementing: PropTypes.bool,
  incrementAsync: PropTypes.func,
  decrementAsync: PropTypes.func,
  changePage: PropTypes.func,
};

Home.defaultProps = {
  count: 0,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  isIncrementing: PropTypes.bool,
  isDecrementing: PropTypes.bool,
  incrementAsync: PropTypes.func,
  decrementAsync: PropTypes.func,
  changePage: PropTypes.func,
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
