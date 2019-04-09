declare module 'react-native-redux-connectivity' {
  
    // NetworkMonitor
  export class NetworkMonitor {
    constructor({dispatch}: {dispatch: (action: any) => unknown});
    start(): () => void;
    stop(): () => void;
  }

  // NetworkReducer
  type connectionTypeType = 'none' | 'wifi' | 'cell' | 'unknown';
  type effectiveTypeType = '2g' | '3g' | '4g' | 'unknown';
  type networkChangedType = 'redux-connectivity/NETWORK_CHANGED';

  type NetworkActionType = {
    type: networkChangedType;
    connected: boolean;
    connectionType: connectionTypeType;
    effectiveType: effectiveTypeType;
  };

  export interface NetworkMonitorState {
    connected: boolean;
    connectionType: connectionTypeType;
    effectiveType: effectiveTypeType;
  }

  export function NetworkReducer(state: NetworkMonitorState, action: NetworkActionType | any): NetworkMonitorState;
  namespace NetworkReducer {
    export function setNetworkAction(
      connected: boolean,
      connectionType: connectionTypeType,
      effectiveType: effectiveTypeType
    ): NetworkActionType;
  }
}
