import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import IconText from '../components/icon';

const City = function (): React.JSX.Element {
  const {
    // container,
    cityName,
    nameText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageLayout}
        source={require('../../assets/images/sunrise.png')}>
        <Text style={[cityName, nameText]}>London</Text>
        <Text style={[countryName, nameText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'yellow'}
            bodyText={8000}
            bodyTextStyles={populationText}
          />
        </View>
        {/* <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'yellow'}
            bodyText={8000}
            bodyTextStyles={styles.populationText}
          />
        </View> */}
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'orange'}
            bodyText={'10:46:59am'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'orange'}
            bodyText={'17:28:15pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  nameText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 40,
    color: 'skyblue',
    fontWeight: 'bold',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'grey',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'gray',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
