import { put, call } from 'redux-saga/effects';
import { getStringsFromDB } from '../sagas';
import { getStrings, getStringsToStore } from '../actions';
import db from '../../../../server/db';
beforeAll(async () => {
  await db.query(`DELETE FROM strings`);
  await db.query(`INSERT INTO strings (string) VALUES ($1), ($2), ($3)`, [
    'bleh',
    'aaaaa',
    'bbbbbb',
  ]);
});

// Can be refactored to use runSaga to test the entire saga rather than testing each yield step individually
// runSaga would save us from having to rewrite the test any time we change the saga.
describe('test getStringsFromDB', () => {
  it('should yield results from database then put it into store by calling dispatch', () => {
    const gen = getStringsFromDB();
    expect(gen.next().value).toEqual(call(getStrings));
    const payload = ['bleh', 'aaaaa', 'bbbbbb'];
    expect(gen.next(payload).value).toEqual(put(getStringsToStore(payload)));
    expect(gen.next().done).toBeTruthy();
  });
});

afterAll(async () => {
  await db.query(`DELETE FROM strings`);
  await db.end();
});
