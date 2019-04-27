import { put, call } from 'redux-saga/effects';
import { getStringsFromDB } from '../sagas';
import { getStrings } from '../actions';
import { GET_STRING_TO_STORE } from '../../../reducers/constants';
import db from '../../../../server/db';
beforeAll(() => {
  db.query(`DELETE FROM strings`);
  db.query(`INSERT INTO strings (string) VALUES ($1), ($2), ($3)`, [
    'bleh',
    'aaaaa',
    'bbbbbb',
  ]);
});

describe('test getStringsFromDB', () => {
  it('should yield results from database then put it into store by calling dispatch', () => {
    const gen = getStringsFromDB();
    expect(gen.next().value).toEqual(call(getStrings));
    expect(gen.next().value).toEqual(
      put({ type: GET_STRING_TO_STORE, payload: ['bleh', 'aaaaa', 'bbbbbb'] }),
    );
    expect(gen.next()).toEqual({
      done: true,
      value: undefined,
    });
  });
});

afterAll(() => {
  db.query(`DELETE FROM strings`);
});
