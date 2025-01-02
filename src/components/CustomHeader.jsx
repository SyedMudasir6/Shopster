import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import fontfamily from '../constants/fontfamily';
import Icon, {Icons} from './Icon';
import {useNavigation} from '@react-navigation/native';

export default function CustomHeader({
  title,
  back,
  onPress,
  cart,
  onCardPress,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {back && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name={'left'}
              type={Icons.AntDesign}
              size={20}
              color={'white'}
              style={{marginRight: '4%', marginTop: 10}}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.txt}>{title}</Text>
      </View>
      {cart && (
        <TouchableOpacity onPress={onCardPress}>
          <Icon
            name={'shopping-cart'}
            type={Icons.Feather}
            size={20}
            color={'white'}
            style={{marginRight: '4%', marginTop: 24}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    backgroundColor: '#38393b',
    // alignItems: 'center',
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    // justifyContent: 'space-between'
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontFamily: fontfamily.Bold,
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
});
