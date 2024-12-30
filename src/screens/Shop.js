import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/features/ProductsSlice';
import CustomHeader from '../components/CustomHeader';
import fontfamily from '../constants/fontfamily';
import colors from '../components/colors';

const Shop = () => {
  // hooks
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { products, isSuccess } = useSelector(state => state.products);
  console.log('🚀 ~ file: Shop.js:12 ~ Shop ~ products:', products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader  title={'Shop'}/>
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
          numColumns={2} // This ensures two items per row
        />
      </View>
    </View>
  );
};

export default Shop;

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
  },
  img: {
    width: '100%',
    height: 120,
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
    flex: 1,  // Ensure it takes up equal width in each column
    margin: 10,  // Add margin for spacing between cards
    paddingBottom: 20,
    borderRadius: 5,
    backgroundColor: colors.backColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  footer: {
    flexDirection: 'column',  // Stack the title and price vertically
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
});
