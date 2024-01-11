import React from 'react';
import {LogBox} from 'react-native';
import Routes from './routes';
LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs([
  ' Deprecation warning: value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date()',
]);
const App = () => {
  return <Routes />;
};

export default App;
