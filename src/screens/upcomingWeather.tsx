import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import List from '../components/listItem';

const UpcomingWeather = function (): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/cloud.jpg')}>
        <Text>UpComing Weather</Text>
        <List />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
