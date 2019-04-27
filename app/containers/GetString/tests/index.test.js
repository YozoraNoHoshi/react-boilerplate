import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import GetString from '../GetString';
import ConnectedGetString from '../index';
import db from '../../../../server/db';
const renderer = new ShallowRenderer();

beforeAll(() => {
  db.query(`DELETE FROM strings`);
  db.query(`INSERT INTO strings (string) VALUES ($1), ($2), ($3)`, [
    'bleh',
    'aaaaa',
    'bbbbbb',
  ]);
});

describe('<GetString /> Component', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<GetString />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
describe('<GetString /> Connected to Redux', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<ConnectedGetString />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

// Test should set redux store to initial stuff, then make the component mount, and then check to make sure that store matches what database has
// should make sure that content on page matches what database has too.

afterAll(() => {
  db.query(`DELETE FROM strings`);
});
