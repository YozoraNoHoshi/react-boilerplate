import axios from 'axios';
import { GET_STRING, GET_STRING_TO_STORE } from '../../reducers/constants';

const BASE_URL = 'http://localhost:3000/api';

export function getStringAction() {
  return { type: GET_STRING };
}

export function getStringsToStore(payload) {
  return { type: GET_STRING_TO_STORE, payload };
}

export async function getStrings() {
  try {
    const result = await axios.get(BASE_URL);
    return result.data.strings;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
