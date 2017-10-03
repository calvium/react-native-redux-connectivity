/* @flow */
const NETWORK_CHANGED = 'redux-connectivity/NETWORK_CHANGED';

type ActionType = {
  type: string,
  connected?: boolean,
  connectionType?: string,
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
