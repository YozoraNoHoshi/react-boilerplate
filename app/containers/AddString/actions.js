import { ADD_STRING } from '../../reducers/constants';

export function addStringAction(string) {
  return { type: ADD_STRING, payload: string };
}
