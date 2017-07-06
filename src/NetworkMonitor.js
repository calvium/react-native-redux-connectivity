import {NetInfo} from 'react-native';
import {setNetworkConnectedAction, setNetworkConnectionTypeChanged} from './redux/actions';

/**
 * Monitors:
 * - Network connectivity
 * - Network type (e.g. wifi)
 *
 * Usage:
 *
 * Main app component.
 *
 * import {NetworkMonitor} from 'react-native-redux-connectivity'
 * const store = [IMPORT YOUR REDUX STORE HERE]
 *
 * constructor(..) {
 *  this.networkMonitor = new NetworkMonitor(store);
 * }
 *
 * componentWillMount() {
 *  this.networkMonitor.start();
 * }
 *
 * componentWillUnmount() {
 *  this.networkMonitor.stop();
 * }
 */
export default class NetworkMonitor {
  constructor(store: Function) {
    // Get initial state
    NetInfo.isConnected.fetch().then(isConnected => this._onConnectedChanged(isConnected));

    NetInfo.fetch().then(connectionType => this._onConnectionTypeChanged(connectionType));
    if (!store || !store.dispatch) {
      throw new Error('Pass your store instance into `new NetworkMonitor(store)` to use');
    }
    this.dispatch = store.dispatch;
  }

  _onConnectionTypeChanged = connectionType => {
    this.dispatch(setNetworkConnectionTypeChanged(connectionType));
  };

  _onConnectedChanged = connected => {
    this.dispatch(setNetworkConnectedAction(connected));
  };

  start() {
    NetInfo.addEventListener('change', this._onConnectionTypeChanged);

    NetInfo.isConnected.addEventListener('change', this._onConnectedChanged);
  }

  stop() {
    NetInfo.removeEventListener('change', this._onConnectionTypeChanged);

    NetInfo.isConnected.removeEventListener('change', this._onConnectedChanged);
  }
}
