import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Flex from '../../components/Flex';

class GetStrings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  // We treat the database as the source of truth, hence why we want to ensure the redux store is up to date with the current database.
  componentDidMount() {
    try {
      this.props.getStrings();
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
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
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
      </Flex>
    );
  }
}

GetStrings.defaultProps = { getStrings: () => {}, strings: [] };

GetStrings.propTypes = { strings: PropTypes.array, getStrings: PropTypes.func };

export default GetStrings;
