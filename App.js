import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import HomeScreen from './src/Screens/HomeScreen';
import UsersScreen from './src/Screens/UsersScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Contacts" component={UsersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
