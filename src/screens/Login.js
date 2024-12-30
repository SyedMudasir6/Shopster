import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/AuthSlice';
import fontfamily from '../constants/fontfamily';
import colors from '../components/colors';
import Icon, { Icons } from '../components/Icon';

const Login = () => {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // hooks
  const dispatch = useDispatch();
  const { userData, isLoading } = useSelector(state => state.auth);

  // functions
  const handlingLogin = () => {
    const params = {
      username: email,
      password: password,
    };
    console.log('params:', params);
    dispatch(login(params));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        placeholder="Enter Email"
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          placeholder="Enter Password"
          onChangeText={setPassword}
          style={styles.passwordInput}
          placeholderTextColor="grey"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            type={Icons.Ionicons}
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="grey"
          />
        </TouchableOpacity>
      </View>
      <MyButton isLoading={isLoading} title="Login" onPress={handlingLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: '5%',
    backgroundColor: colors.backColor,
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    color: '#000',
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fontfamily.Bold
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.borderColor,
    paddingHorizontal: 20,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.borderColor,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
  },
  eyeIcon: {
    padding: 10,
  },
});
