import {SET_NETWORK_CONNECTED, SET_NETWORK_CONNECTION_TYPE_CHANGED} from './actions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NETWORK_CONNECTED:
      return {
        ...state,
        connected: action.connected,
      };
    case SET_NETWORK_CONNECTION_TYPE_CHANGED:
      return {
        ...state,
        connectionType: action.connectionType,
      };
    default:
      return state;
  }
}
