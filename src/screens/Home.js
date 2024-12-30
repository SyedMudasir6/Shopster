import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/features/ProductsSlice';
import CustomHeader from '../components/CustomHeader';
import fontfamily from '../constants/fontfamily';
import colors from '../components/colors';
import SliderHome from '../components/slider';

const Home = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { products, isSuccess } = useSelector(state => state.products);
  console.log('🚀 ~ file: Home.js:12 ~ Home ~ products:', products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader title={'Home'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SliderHome />
        <Text style={[styles.title, { alignSelf: 'center', fontSize: 20, textDecorationLine: 'underline' }]}>Trending Products</Text>
        <View style={styles.container2}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products?.products}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  onPress={() => navigate('SingleProduct', { Product: item })}
                  style={styles.cardBox}
                  key={item.id}>
                  <Image source={{ uri: item.thumbnail }} style={styles.img} />
                  <View style={styles.footer}>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: colors.backColor

  },
  container2: {
    paddingHorizontal: '5%',
    marginTop: 15,
    paddingBottom: 30,
    flex: 1
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: fontfamily.SemiBold,
    color: colors.title
  },
  price: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: fontfamily.Bold,
    color: colors.price
  },
  cardBox: {
    marginBottom: 15,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: colors.backColor,
    borderColor: colors.borderColor,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
