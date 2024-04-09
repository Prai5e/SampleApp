import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CurrentWeather = function (): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <Text style={styles.temp}>Current Weather</Text> */}
        <Icon name="sun" size={100} color="black" />
        <Text style={styles.temp}>0</Text>
        <View style={styles.wrapper}>
          <Text style={styles.feels}>Feels like -3</Text>
          <Text style={styles.highLow}>High: 8 low: 9</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its perfect Weathger</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 39,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'pink',
    flex: 1,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
