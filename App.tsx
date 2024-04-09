import React from 'react';
import {View, StyleSheet} from 'react-native';
// import CurrentWeather from './src/screens/currentWeather';
import UpcomingWeather from './src/screens/upcomingWeather';
import City from './src/screens/city';

const App = function (): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(90, 3, 50)',
  },
});

export default App;
