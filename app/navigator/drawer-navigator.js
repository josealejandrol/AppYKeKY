import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/HomeScreen';
import Initial from '../screens/InitialScreen';

const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Home,
    },
    Notifications: {
      screen: Initial,
    },
  });
  
  const Drawer = createAppContainer(DrawerNavigator);

  export default Drawer;