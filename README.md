# react-native-redux-connectivity
Monitor network connectivity and store the result in Redux

Monitors:
- Network connectivity
- Network type (e.g. wifi)

> This library is compatible with React Native 0.57 and up only.
> For compatibility with earlier versions of React Native, please use version 0.2.0

# Installation

```
npm install react-native-redux-connectivity
```

or 

```
yarn add react-native-redux-connectivity
```

You will also need to add [@react-native-community/netinfo](https://github.com/react-native-community/react-native-netinfo) and follow the instructions to link the library

```
npm install --save @react-native-community/netinfo
```

or 

```
react-native link @react-native-community/netinfo
```

# Usage

In your main app component:

```js
import {NetworkMonitor} from 'react-native-redux-connectivity'
const store = [IMPORT YOUR REDUX STORE HERE]

class App extends Component {
  constructor(props) {
    super(props);
    this.networkMonitor = new NetworkMonitor(store);
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

