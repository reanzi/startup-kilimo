/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
// import App from './App';
import App from './app/MainApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
