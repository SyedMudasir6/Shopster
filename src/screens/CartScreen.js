import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MyBackButton from '../components/MyBackButton';
import MyButton from '../components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../redux/features/CartSlice';
import fontfamily from '../constants/fontfamily';
import colors from '../components/colors';
import CustomHeader from '../components/CustomHeader';

const CartScreen = () => {
  // hooks
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { cartData, totalAmount } = useSelector(state => state.cartItems);

  // functions
  const handleCheckout = () => {
    dispatch(clearCart());
    Alert.alert('Order Success', 'Your order place successfully', [
      { text: 'OK', onPress: () => navigate('Home') },
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <CustomHeader back title={'Cart'} />
      <View style={styles.container}>
        {/* <MyBackButton /> */}
        <FlatList
          data={cartData}
          style={styles.flatlistStyle}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.cardBox} key={item.id}>
                <View style={styles.innerContainer}>
                  <Image source={{ uri: item.thumbnail }} style={styles.img} />
                  <View>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </View>
                <View style={styles.twoBtn}>
                  <Pressable
                    style={styles.btnBox}
                    onPress={() => dispatch(removeFromCart(item.id))}>
                    <Text style={styles.btn}>-</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.amount}>{item.quantity}</Text>
                  </Pressable>
                  <Pressable
                    style={styles.btnBox}
                    onPress={() => dispatch(addToCart(item))}>
                    <Text style={styles.btn}>+</Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.totalAmount}>
          Total Amount:{'  '}
          <Text style={styles.totalAmountPrice}>{totalAmount}$</Text>
        </Text>

        <MyButton onPress={handleCheckout} title="Proceed to checkout" />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backColor
  },
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    marginTop: 15
  },
  flatlistStyle: {
    flex: 1,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 11,
    marginTop: 10,
    fontFamily: fontfamily.Bold,
    color: colors.title
  },
  price: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: fontfamily.Bold,
    color: colors.price
  },
  cardBox: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.backColor,
    paddingRight: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.borderColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  footer: {
    width: '55%',
  },
  twoBtn: {
    gap: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnBox: {
    width: 35,
    height: 35,
    backgroundColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  btn: {
    fontSize: 23,
    fontFamily: fontfamily.SemiBold,
    color: colors.backColor

  },
  amount: {
    fontSize: 16,
    fontFamily: fontfamily.SemiBold,
    color: colors.borderColor
  },
  bottom: {
    flex: 0.2,
    gap: 10,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  totalAmount: {
    fontSize: 18,
    fontFamily: fontfamily.SemiBold,
    color: colors.price
  },
  totalAmountPrice: {
    fontSize: 22,
    fontFamily: fontfamily.SemiBold,
    color: colors.price
  },
});
