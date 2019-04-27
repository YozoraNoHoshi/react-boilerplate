import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import saga from './sagas';

import { addStringAction } from './actions';
import AddString from './AddString';

// Lives separate from the component for testability + keeps redux separate from the actual component
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
