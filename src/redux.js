/* @flow */
const NETWORK_CHANGED = 'redux-connectivity/NETWORK_CHANGED';

type ActionType = {
  type: string,
  connected: boolean,
  connectionType: 'none'|'wifi'|'cell'|'unknown',
  effectiveType: '2g'|'3g'|'4g'|'unknown',
};

export function setNetworkAction(connected: boolean, connectionType: string, effectiveType:string) {
  return {
    type: NETWORK_CHANGED,
    connected,
    connectionType,
    effectiveType,
  };
}

const initialState = {
  connected: false,
  connectionType: 'none',
  effectiveType: 'unknown',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NETWORK_CHANGED:
      return {
        ...state,
        connected: action.connected,
        connectionType: action.connectionType,
        effectiveType: action.effectiveType,
      };
    default:
      return state;
  }
}
