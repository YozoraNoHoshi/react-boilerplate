import { call, put, takeLatest } from 'redux-saga/effects';
import { getStrings, getStringsToStore } from './actions';
import { GET_STRING } from '../../reducers/constants';

export function* getStringsFromDB() {
  const payload = yield call(getStrings);
  yield put(getStringsToStore(payload));
}

function* getStringsSaga() {
  yield takeLatest(GET_STRING, getStringsFromDB);
}

export default getStringsSaga;
