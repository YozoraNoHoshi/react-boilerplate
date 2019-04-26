import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import saga from './sagas';

import { addStringAction } from './actions';

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
  };

  render() {
    return (
      <div className="AddString">
        <form onSubmit={this.handleSubmit}>
          <input
            name="string"
            type="text"
            value={this.state.string}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddString.propTypes = { addString: PropTypes.func };

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
