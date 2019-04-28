import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { push } from 'connected-react-router';
// import { addString } from './actions';
import { ADD_STRING } from '../../reducers/constants';
const BASE_URL = 'http://localhost:3000/api';

async function addString(newString) {
  try {
    const data = { newString };
    const result = await axios.post(`${BASE_URL}/add`, data);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

// Calls addString and when the promise resolves, navigate to the route.
// Do not need to update store because upon navigation the store will be updated at new route by getString's sagas.
function* addNewString(action) {
  yield call(addString, action.payload);
  // yield put({ type: ADD_STRING_TO_STORE, payload: string.string });
  yield put(push('/'));
}

function* addStringSaga() {
  yield takeLatest(ADD_STRING, addNewString);
}

export default addStringSaga;
