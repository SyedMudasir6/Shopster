import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text } from 'react-native';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import Account from '../screens/Account';
import About from '../screens/About';
import Icon, { Icons } from '../components/Icon';
import colors from '../components/colors';
import fontfamily from '../constants/fontfamily';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.backColor,
          height: '10%',
          paddingTop: '0.5%',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              type={Icons.Ionicons}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? colors.price : 'gray'}
              size={30}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: focused ? colors.title : colors.borderColor,
                },
              ]}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              type={Icons.Ionicons}
              name={focused ? 'cart' : 'cart-outline'}
              color={focused ? colors.price : 'gray'}
              size={30}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: focused ? colors.title : colors.borderColor,
                },
              ]}
            >
              Shop
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              type={Icons.Ionicons}
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={focused ? colors.price : 'gray'}
              size={30}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: focused ? colors.title : colors.borderColor,
                },
              ]}
            >
              About
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              type={Icons.Ionicons}
              name={focused ? 'person' : 'person-outline'}
              color={focused ? colors.price : 'gray'}
              size={30}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: focused ? colors.title : colors.borderColor,
                },
              ]}
            >
              Account
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarIconStyle: {
    display: 'none', // Hide default icons if you want to use custom icons
  },
  tabBarLabelStyle: {
    fontSize: 18,
    paddingBottom: 10,
  },
  tabBarLabel: {
    fontSize: 14,
    fontFamily: fontfamily.Medium,
  },
});
