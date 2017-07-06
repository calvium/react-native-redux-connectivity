/* @flow */
export const SET_NETWORK_CONNECTED = 'SET_NETWORK_CONNECTED';
export const SET_NETWORK_CONNECTION_TYPE_CHANGED = 'SET_NETWORK_CONNECTION_TYPE_CHANGED';

type ActionType = {
  type: string,
  connected?: boolean,
  connectionType?: string,
};

export function setNetworkConnectedAction(connected: boolean): ActionType {
  return {
    type: SET_NETWORK_CONNECTED,
    connected,
  };
}

export function setNetworkConnectionTypeChanged(connectionType: string): ActionType {
  return {
    type: SET_NETWORK_CONNECTION_TYPE_CHANGED,
    connectionType,
  };
}
