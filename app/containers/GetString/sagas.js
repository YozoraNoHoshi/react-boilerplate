import { call, put, takeLatest } from 'redux-saga/effects';
import { getStrings } from './actions';
import { GET_STRING, GET_STRING_TO_STORE } from '../../reducers/constants';

export function* getStringsFromDB() {
  const string = yield call(getStrings);
  yield put({ type: GET_STRING_TO_STORE, payload: string.strings });
}

function* getStringsSaga() {
  yield takeLatest(GET_STRING, getStringsFromDB);
}

export default getStringsSaga;