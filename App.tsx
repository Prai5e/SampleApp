import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/tabs';

const App = function (): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
