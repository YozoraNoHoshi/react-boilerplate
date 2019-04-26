import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import saga from './sagas';
import { getStringAction } from './actions';
import { selectStrings } from '../../selectors';

class GetStrings extends PureComponent {
  componentDidMount() {
    this.props.getStrings();
  }

  showStrings = strings => {
    const stringItems = strings.map(s => <li key={s}>{s}</li>);
    return <ul>{stringItems}</ul>;
  };

  render() {
    return (
      <div className="GetStrings">
        <div>I hate you</div>
        {this.showStrings(this.props.strings)}
      </div>
    );
  }
}

GetStrings.propTypes = { strings: PropTypes.array, getStrings: PropTypes.func };

function mapStateToProps(state) {
  return { strings: selectStrings(state) };
}

const withSaga = injectSaga({
  key: 'getStrings',
  saga,
  mode: RESTART_ON_REMOUNT,
});

const withConnect = connect(
  mapStateToProps,
  { getStrings: getStringAction },
);

export default compose(
  withConnect,
  withSaga,
)(GetStrings);
