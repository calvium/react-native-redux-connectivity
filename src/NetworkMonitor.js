import NetInfo from '@react-native-community/netinfo';
import {setNetworkAction} from './redux';

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
class NetworkMonitor {
  constructor(store: Function) {

    this.handleConnectivityChange = ({type, effectiveType}) => {
      const connected = type && type !== 'none';
      console.log(`NetworkMonitor: connected:${connected} type:${type} effectiveType:${effectiveType}`);
      this.dispatch(setNetworkAction(connected, type, effectiveType));
    }

    NetInfo.fetch().then(this.handleConnectivityChange);

    if (!store || !store.dispatch) {
      throw new Error('Pass your store instance into `new NetworkMonitor(store)` to use');
    }
    this.dispatch = store.dispatch;
  }

  start() {
    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  stop() {
    NetInfo.removeEventListener(this.handleConnectivityChange);
  }
}

export default NetworkMonitor;
