import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//screens
import Initial from '../screens/InitialScreen';
import Swiper from '../screens/SwiperScreen';
import Login from '../screens/LoginScreen';

const AppNavigator = createStackNavigator(
    {
    Initial,
    Swiper,
    Login
    },
    {
      initialRouteName: "Initial",
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#F3CE12',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      },
    }
);

export default createAppContainer(AppNavigator);