import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import List from './list';

const UpcomingWeather = function (): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>UpComing Weather</Text>
      <List />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default UpcomingWeather;
