import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import saga from './sagas';
import Flex from '../../components/Flex';
import { addStringAction } from './actions';

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  background: silver;
  :hover {
    background: gold;
    cursor: pointer;
  }
`;

class AddString extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { string: '' };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addString(this.state.string);
    // this.props.history.push('/');
  };

  render() {
    return (
      <Flex
        sMargin="10px"
        sPadding="10px"
        style={{
          boxShadow: '2px 2px 5px black',
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <Flex column alCenter>
            <Flex as="label" large htmlFor="string">
              Add a string
            </Flex>
            <input
              name="string"
              type="text"
              value={this.state.string}
              onChange={this.handleChange}
            />
            <StyledButton type="submit">Submit</StyledButton>
          </Flex>
        </form>
      </Flex>
    );
  }
}

AddString.propTypes = { addString: PropTypes.func };

// The below can be moved into a separate file to split the component from the redux connected portions

const withSaga = injectSaga({
  key: 'addstrings',
  saga,
  mode: RESTART_ON_REMOUNT,
});

const withConnect = connect(
  null,
  { addString: addStringAction },
);

export default compose(
  withConnect,
  withSaga,
)(AddString);
