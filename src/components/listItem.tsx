import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {customObj} from '../interface';

const Data: Array<object> = [
  {
    dt_txt: '2023-02-18 17:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

const Empty = () => (
  <View>
    <Text>Empty</Text>
  </View>
);

const Item = function (props: customObj): React.JSX.Element {
  const {dt_txt, min, max, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};
const renderItem = ({item}: customObj) => (
  <Item
    conditon={item.weather[0].main}
    dt_txt={item.dt_txt}
    min={item.main.temp_min}
    max={item.main.temp_max}
  />
);

function List(): React.JSX.Element {
  return (
    <>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt}
        ListEmptyComponent={Empty}
      />
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});

export default List;
