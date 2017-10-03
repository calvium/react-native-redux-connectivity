# react-native-redux-connectivity
Monitor network connectivity and store the result in Redux

Monitors:
- Network connectivity
- Network type (e.g. wifi)

# Installation

```
npm install react-native-redux-connectivity
```

or 

```
yarn add react-native-redux-connectivity
```

# Usage

In your main app component:

```js
import {NetworkMonitor} from 'react-native-redux-connectivity'
const store = [IMPORT YOUR REDUX STORE HERE]

class App extends Component {
  constructor(props) {
    this.networkMonitor = new NetworkMonitor(store);
  }
 
 componentWillMount() {
  this.networkMonitor.start();
 }
 
 componentWillUnmount() {
  this.networkMonitor.stop();
 }
}
```

In your root reducer:
```js
import {combineReducers} from 'redux';
import {NetworkReducer} from 'react-native-redux-connectivity';

/**
 * When new reducers are added, put them here
 */
export default combineReducers({
  network: NetworkReducer,
  // .. your other reducers
});

```

You'll then see in Redux:

```js
network: { 
  connected: boolean, // true if there's an Internet connection
  connectionType: 'none'|'wifi'|'cell'|'unknown',
  effectiveType: '2g'|'3g'|'4g'|'unknown',
}
```

