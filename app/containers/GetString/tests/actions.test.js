import { getStringAction, getStringsToStore } from '../actions';
import { GET_STRING, GET_STRING_TO_STORE } from '../../../reducers/constants';
// import db from '../../../../server/db';

// getStrings testing seemed extraneous due ot the fact that it doesn't do anything that isn't covered by axios/the backend.
// Testing the backend covers the function, since all it does is return a result from the backend.

// describe('getStrings returns array of strings', async () => {
//   const sample = ['bleh', 'aaaaa', 'bbbbbb'];
//   await db.query(`DELETE FROM strings`);
//   await db.query(
//     `INSERT INTO strings (string) VALUES ($1), ($2), ($3)`,
//     sample,
//   );
//   const strings = await getStrings();
//   expect(strings).toEqual(sample);
// });
describe('getStringAction returns proper action', () => {
  it('should return proper action', () => {
    expect(getStringAction()).toEqual({ type: GET_STRING });
  });
});
describe('getStringsToStore returns proper action', () => {
  it('should return proper action', () => {
    expect(getStringsToStore('blegh')).toEqual({
      type: GET_STRING_TO_STORE,
      payload: 'blegh',
    });
  });
});
// afterAll(async () => {
//   await db.query(`DELETE FROM strings`);
//   await db.end();
// });
