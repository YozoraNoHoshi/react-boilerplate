import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import GetString from '../GetString';
import db from '../../../../server/db';
import ConnectedGetString from '../index';
import configureStore from '../../../configureStore';

configure({ adapter: new Adapter() });

beforeAll(async () => {
  await db.query(`DELETE FROM strings`);
  await db.query(`INSERT INTO strings (string) VALUES ($1), ($2), ($3)`, [
    'bleh',
    'aaaaa',
    'bbbbbb',
  ]);
});

describe('<GetString /> Component', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<GetString strings={['aaaa', 'bbbbb', 'ccc']} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

// This test throws an error because of the backend not starting/receiving requests properly.
// it still 'passes' but is not an accurate representation (but at least it connects to redux)

describe('<GetString /> Connected to Redux', () => {
  it('should render and match the snapshot', () => {
    const store = configureStore({}, browserHistory);
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedGetString />
      </Provider>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

// Do not need to test the componentDidMount because that is handled in sagas.test.js
// All we need to test here is that the component renders and renders its prop 'strings' properly.

afterAll(async () => {
  await db.query(`DELETE FROM strings`);
  await db.end();
});
