import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import {customObj} from '../interface';
import IconText from '../components/icon';

const City = function (): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageLayout}
        source={require('../../assets/images/sunrise.png')}>
        <Text style={(styles.cityName, styles.nameText)}>London</Text>
        <Text style={(styles.countryName, styles.nameText)}>UK</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'yellow'}
            bodyText={8000}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'yellow'}
            bodyText={8000}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'orange'}
            bodyText={'10:46:59am'}
            bodyTextStyles={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'orange'}
            bodyText={'17:28:15pm'}
            bodyTextStyles={styles.riseSetText}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'grey',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'gray',
  },
});

export default City;
