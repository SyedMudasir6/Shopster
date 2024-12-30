import {ActivityIndicator, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from './colors';
import fontfamily from '../constants/fontfamily';

const MyButton = ({title, onPress, isLoading,styleBg}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container,{styleBg}]}>
      <Text style={styles.title}>{title}</Text>
      {isLoading && <ActivityIndicator size="small" color={'white'} />}
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.borderColor,
    borderRadius: 7,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily:fontfamily.Medium
  },
});
