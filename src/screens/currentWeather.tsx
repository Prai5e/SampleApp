import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RowText from '../components/rowText';

const CurrentWeather = function (): React.JSX.Element {
  const {
    temp,
    container,
    feels,
    wrapper,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        {/* <Text style={styles.temp}>Current Weather</Text> */}
        <Icon name="sun" size={100} color="black" />
        <Text style={temp}>0</Text>
        <Text style={feels}>Feels like -3</Text>
        <RowText
          style={highLow}
          messageOne={'High: 8 '}
          messageTwo={'low: 9'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={'Its Sunny'}
        messageTwo={'Its perfect Weather'}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
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
  highLowWrapper: {
    flexDirection: 'row',
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
