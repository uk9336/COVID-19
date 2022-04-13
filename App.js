import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: '로딩화면' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: '홈화면' }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: '상세화면' }} />
      </Stack.Navigator>
    </NavigationContainer>);
} export default App;
