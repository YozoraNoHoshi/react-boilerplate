import { call, put, takeLatest } from 'redux-saga/effects';
import { addString } from './actions';
import { ADD_STRING, ADD_STRING_TO_STORE } from '../../reducers/constants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addNewString(action) {
  const string = yield call(addString, action.payload);
  yield put({ type: ADD_STRING_TO_STORE, payload: string.string });
}

function* addStringSaga() {
  yield takeLatest(ADD_STRING, addNewString);
}

export default addStringSaga;
