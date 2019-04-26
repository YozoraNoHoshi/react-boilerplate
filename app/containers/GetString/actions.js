import axios from 'axios';
import { GET_STRING } from '../../reducers/constants';

const BASE_URL = 'http://localhost:3000/api';

export function getStringAction() {
  return { type: GET_STRING };
}

export async function getStrings() {
  try {
    const result = await axios.get(BASE_URL);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
