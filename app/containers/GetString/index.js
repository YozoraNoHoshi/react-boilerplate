import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import saga from './sagas';
import { getStringAction } from './actions';
import { selectStrings } from '../../selectors';
import Flex from '../../components/Flex';

class GetStrings extends PureComponent {
  componentDidMount() {
    // We treat the database as the source of truth, hence why we want to ensure the redux store is up to date with the current database.
    this.props.getStrings();
  }

  showStrings = strings => {
    const stringItems = strings.map(s => <li key={s}>{s}</li>);
    return <ul>{stringItems}</ul>;
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
        <Flex large>Here are all the strings we have in our database!</Flex>
        {this.showStrings(this.props.strings)}
      </Flex>
    );
  }
}

GetStrings.propTypes = { strings: PropTypes.array, getStrings: PropTypes.func };

// The below can be moved out to a connected container that renders its children with props
// this would keep redux separate from the component
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

// export default connect(mapStateToProps)(GetStrings);
