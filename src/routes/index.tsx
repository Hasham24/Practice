import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '~screens';
const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
