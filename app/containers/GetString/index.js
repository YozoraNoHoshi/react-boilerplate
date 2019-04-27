import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import saga from './sagas';
import { getStringAction } from './actions';
import { selectStrings } from '../../selectors';

import GetStrings from './GetString';

// Separates the component from the redux
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
