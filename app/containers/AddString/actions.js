import axios from 'axios';
import { ADD_STRING } from '../../reducers/constants';
const BASE_URL = 'http://localhost:3000/api';

export function addStringAction(string) {
  return { type: ADD_STRING, payload: string };
}

export async function addString(newString) {
  try {
    const data = { newString };
    const result = await axios.post(`${BASE_URL}/add`, data);
    return result.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
