import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../components/colors';
import fontfamily from '../constants/fontfamily';
import CustomHeader from '../components/CustomHeader';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomHeader title={'About Us'} />
      <View style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
      }}>
        <Text style={styles.bodyText}>
          Welcome to <Text style={styles.bold}>shop Now</Text>, your ultimate online shopping destination! We are dedicated to providing you with a seamless and enjoyable shopping experience, offering a wide variety of high-quality products at affordable prices. Whether you’re looking for the latest fashion trends, cutting-edge electronics, or home essentials, we’ve got you covered.
        </Text>
        <Text style={styles.bodyText}>
          At <Text style={styles.bold}>shop Now</Text>, we believe that shopping should be easy, fun, and convenient. Our user-friendly app and secure checkout system ensure that you can shop with confidence, knowing that your personal information is always protected. We partner with trusted brands to bring you the best selection of products, and we strive to offer excellent customer service every step of the way.
        </Text>
        <Text style={styles.bodyText}>
          Thank you for choosing us as your go-to shopping app. We are committed to making your shopping experience better every day!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.backColor,
  },
  heading: {
    fontSize: 28,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: fontfamily.Bold,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
    fontFamily: fontfamily.Regular
  },
  bold: {
    fontFamily: fontfamily.Bold
  },
});
