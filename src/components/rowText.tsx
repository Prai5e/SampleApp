import React from 'react';
import {View, Text} from 'react-native';
import {customObj} from '../interface';

const RowText = function (props: customObj): React.JSX.Element {
  const {
    messageOne,
    messageTwo,
    containerStyles,
    messageOneStyles,
    messageTwoStyles,
  } = props;
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
