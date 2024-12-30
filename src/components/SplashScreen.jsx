import React, {memo, useEffect} from 'react';
import {StyleSheet, View, Image, Modal, Text} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';
import colors from './colors';
import fontfamily from '../constants/fontfamily';
import images from './images';
import {useSelector} from 'react-redux';

export default function SplashScreen({navigation}) {
  const {userData} = useSelector(state => state.auth);
  useEffect(() => {
    setTimeout(() => {
      if (userData) {
        navigation.dispatch(StackActions.replace('root'));
      } else {
        navigation.dispatch(StackActions.replace('Login'));
      }
    }, 2000);
  }, [userData, navigation]);

  return (
    <View style={styles.animationContainer}>
      <Image width={200} height={100} source={images.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: colors.title,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: fontfamily.Bold,
    fontSize: 30,
    color: colors.backColor,
  },
});
