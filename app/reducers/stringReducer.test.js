import stringReducer from './stringReducer';
import { ADD_STRING_TO_STORE, GET_STRING_TO_STORE } from './constants';

describe('test the reducer', () => {
  it('should have an initial state', () => {
    expect(stringReducer([], {})).toMatchSnapshot();
  });
  it('should replace the state with the input array for GET_STRING_TO_STORE', () => {
    const payload = ['a', 'b', 'c'];
    expect(
      stringReducer(['d'], { type: GET_STRING_TO_STORE, payload }),
    ).toEqual(payload);
  });
  it('should add a string to store with ADD_STRING_TO_STORE', () => {
    const payload = ['a', 'b', 'c'];
    expect(stringReducer([], { type: ADD_STRING_TO_STORE, payload })).toEqual(
      payload,
    );
    expect(
      stringReducer(payload, { type: ADD_STRING_TO_STORE, payload: 's' }),
    ).toEqual([...payload, 's']);
  });
});
