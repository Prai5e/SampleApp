import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {customObj} from '../interface';

const IconText = function (props: customObj) {
  const {iconName, iconColor, bodyText, bodyTextStyles} = props;
  const {textTheme} = styles;
  return (
    <>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
});

export default IconText;
