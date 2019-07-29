import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//screens
import Initial from '../screens/InitialScreen';
import Swiper from '../screens/SwiperScreen';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Home from '../screens/HomeScreen';
import Test from '../screens/TestScreen';
import LifePlanner from '../screens/LifePlannerScreen';

import ResultTS from '../screens/ResultTestScreen';
import ResultLP from '../screens/ResultLifePlannerScreen'
  
const AppNavigator = createStackNavigator(
    {
    Initial,
    Swiper,
    Login,
    Register,
    Home,
    Test,
    ResultTS
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