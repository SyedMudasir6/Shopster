import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon, { Icons } from '../components/Icon';
import colors from '../components/colors';
import fontfamily from '../constants/fontfamily';
import MyButton from '../components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { StackActions, useNavigation } from '@react-navigation/native';
import { logout } from '../redux/features/AuthSlice';

// User data (you will replace this with actual data coming from a global state or API)
const user = {
  email: "emily.johnson@gmail.com",
  firstName: "Emily",
  id: 1,
  image: "https://dummyjson.com/icon/emilys/128", // Profile Image URL
  lastName: "Johnson",
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzU0Nzc3MDUsImV4cCI6MTczODA2OTcwNX0.6NIyfoeIGuXMjin4OQXnk-ZVplReQ2WnQ0JuWJ05Kfw",
  username: "emilys"
};

export default function Account() {
    const { userData } = useSelector(state => state.auth);
    console.log('userData',userData)  
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const handleLogout = () => {
    dispatch(logout());
    navigation.dispatch(StackActions.replace('Login'));
  }


  return (
    <View style={styles.container}>
      <Icon
        type={Icons.AntDesign}
        size={100}
        color={colors.price}
        name={'user'}
      />
      <Text style={styles.username}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.userInfo}>Username: {user.username}</Text>
      <Text style={styles.userInfo}>Email: {user.email}</Text>
      <MyButton
        onPress={handleLogout}
        title="Logout"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backColor,
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
    fontFamily: fontfamily.SemiBold
  },
  userInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    fontFamily: fontfamily.SemiBold,
  }
});
